# 弹弹play开放平台

请开发者加QQ群第一时间获取弹弹play API（服务器状态、API改动）的通知：[https://qm.qq.com/q/D2nRsB3mCY](https://qm.qq.com/q/D2nRsB3mCY)

[接口文档及在线调试工具](https://api.dandanplay.net/swagger) |
[弹弹play服务状态页](https://stats.uptimerobot.com/DV0BKUo2g9) |
[API变动日志](changelog.md) |

[[TOC]]

## 一、介绍

### 平台历史与简介

很久以前，弹弹play只是一个能播放弹幕的本地视频播放器，但是互联网上视频众多，即使是某个动画的同一集，都会有大量字幕组发行大量不同版本但是内容相同的视频文件，这些视频是独立而分散的，比如在B站经常会看到某个新番有众多字幕组的多个版本，而这些版本间的弹幕并不互通。所以为了解决多个视频共享弹幕的问题，我们决定引入服务器端。

有了服务器端之后，就可以针对每个节目建立唯一的弹幕池（弹弹play里叫**弹幕库**），然后让不同的视频关联到同一个弹幕库，获取同一份弹幕，最终解决了不同视频能够共享弹幕的问题。

弹弹play开放平台，就是基于弹弹play播放器的这个功能（弹幕收发、文件识别）而发展出来的。目的是为了重新组织互联网上复杂混乱的视频文件世界，将它们识别出来并进行归类。

## 二、API 接入指南

### 1. 概述

本指南旨在帮助第三方开发者正确地集成和使用弹弹play API 服务。弹弹play API v2支持两种身份验证模式：签名验证模式和客户端凭证模式。以下内容将详细介绍如何配置和使用这两种模式。

### 2. 配置前提

- **API 地址**：当前服务器地址为 `https://api.dandanplay.net`。
- **AppId 和 AppSecret**：在开始之前，您需要从我们这里获得分配的 `AppId` 和 `AppSecret`。

### 3. 申请 AppId 和 AppSecret

不论是公开项目或是私有项目，只要遵守弹弹play开放平台的使用规定，都可以申请接入开放平台。

您可以通过以下方式申请 AppId 和 AppSecret：

1. 发送邮件至 `kaedei@dandanplay.net`，邮件标题为 `弹弹play开放平台申请`，内容包括您的应用名称（中文、英文）、应用描述、应用类型、联系方式、GitHub仓库页面等必要信息。

2. 加入开放平台QQ群，联系管理员并提供上述信息。

我们将在收到您的申请后尽快处理，并通过邮件或QQ通知您。

应用创建成功后，您将获得一个 `AppId` 和两个 `AppSecret`。请妥善保管这些凭证，不要泄露给他人。如果您的凭证丢失或泄露，请立即联系我们。如果我们发现您的凭证被滥用，将会立即停用您的应用。

### 4. 请求头配置

弹弹play API 支持使用 **签名验证模式** 或 **客户端凭证模式** 两种客户端的身份验证方式，您可以选择其中一种来验证您的请求。

#### 请求头参数

所有发往开放平台的请求必须在 HTTP 请求头中包含以下信息：

- **签名验证模式**
  - **X-AppId**: 您的应用程序 ID。
  - **X-Timestamp**: 当前时间的 Unix 时间戳，单位为秒。
  - **X-Signature**: 使用 `AppId`、`AppSecret` 等参数生成的签名。下一章节中会详细介绍。

- **客户端凭证模式**
  - **X-AppId**: 您的应用程序 ID。
  - **X-AppSecret**: 您的应用程序密钥（之一）。

#### 选择正确的身份验证模式

我们推荐使用 **签名验证模式**，因为这种方式更加安全，可以保护您的 `AppSecret`。

- 如果您的应用程序是一个客户端应用（如移动应用、桌面应用、纯前端应用等），我们强烈建议您使用 **签名验证模式**。

- 如果您的应用程序是一个服务器端应用，或者您有能力保护 `AppSecret`，那么可以使用 **客户端凭证模式**。

### 5. 签名验证模式指南

#### 签名生成步骤

1. **获取当前时间戳（Timestamp）**：

   - 使用当前的 UTC 时间生成 Unix 时间戳，单位为秒。请确保您的服务器时间或设备时间与标准时间同步，否则可能会导致签名验证失败。
   - 例如，UTC时间 2025年1月1日 00:00:00 的时间戳应为 1735660800。

2. **获取当前访问的 API 路径（Path）**：

   - 此处的 API 路径是指 API 地址后的路径部分，以`/`开头，不包括前面的协议、域名和`?`后面的查询参数。
   - 例如，要访问 `https://api.dandanplay.net/api/v2/comment/123450001?withRelated=true`，则 API 路径应该为 `/api/v2/comment/123450001`。
   - 建议路径全部使用小写字母，不需要经过 URL 编码。

3. **计算签名**：

    算法为 `base64(sha256(AppId + Timestamp + Path + AppSecret))`

   - 将 `AppId`、`Timestamp`、`Path` 和 `AppSecret` 按顺序拼接成一个字符串，区分大小写。
   - 使用 SHA256 哈希算法对该字符串进行哈希处理。
   - 将生成的哈希结果转换为 Base64 编码格式，作为 `X-Signature` 的值。

4. **发送请求**：

   - 确保在请求头中包含 `X-AppId`、`X-Signature` 和 `X-Timestamp`。

#### 示例代码

以下是一个使用 Java 的示例代码，展示如何生成签名：

```java
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Date;

public class SignatureGenerator {
    public static void main(String[] args) {
        String appId = "your_app_id";
        String appSecret = "your_app_secret";

        long timestamp = new Date().getTime() / 1000;
        String path = "/api/v2/comment/123450001";
        String signature = generateSignature(appId, timestamp, path, appSecret);

        System.out.println("X-AppId: " + appId);
        System.out.println("X-Signature: " + signature);
        System.out.println("X-Timestamp: " + timestamp);
    }

    private static String generateSignature(String appId, long timestamp, String path, String appSecret) {
        String data = appId + timestamp + path + appSecret;
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(data.getBytes());
            return Base64.getEncoder().encodeToString(hash);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return null;
        }
    }
}
```

以下是一个使用 JavaScript 的示例代码，展示如何生成签名：

```javascript
const crypto = require('crypto');

const appId = 'your_app_id';
const appSecret = 'your_app_secret';
const path = '/api/v2/comment/123450001';
const timestamp = Math.floor(Date.now() / 1000);
const signature = generateSignature(appId, timestamp, path, appSecret);

console.log('X-AppId: ' + appId);
console.log('X-Signature: ' + signature);
console.log('X-Timestamp: ' + timestamp);

function generateSignature(appId, timestamp, path, appSecret) {
    const data = appId + timestamp + path + appSecret;
    return crypto.createHash('sha256').
        update(data).
        digest('base64');
}
```

### 6. 错误处理

- **包含错误信息的 200 响应**：
  - 当 API 请求出现业务相关错误时，服务器将返回一个包含错误信息 200 响应，例如：

    ```json
    {
      "success": false,
      "errorCode": 1,
      "errorMessage": "服务器内部错误"
    }
    ```

- **401 Unauthorized**:
  - 调用受限接口（下文介绍）时缺少必要的身份验证头。

- **403 Forbidden**: 
  - 缺少必要的身份验证头。
  - 时间戳无效或与服务器时间差异过大。
  - `AppId` 或 `AppSecret` 无效。
  - 签名不匹配。
  - 如果访问任何页面（包括Swagger工具）都返回 403 错误，可能您的IP已被服务器屏蔽

  收到 403 错误响应时，请检查请求头是否正确配置，时间戳是否有效，以及签名是否正确计算。具体的错误信息将包含在响应的 `X-Error-Message` 头中：

  | X-Error-Message | 说明 |
  | --- | --- |
  | `Missing Authentication Headers` | 缺少必要的身份验证头。 |
  | `Invalid Timestamp` | 时间戳无效或与服务器时间差异过大。 |
  | `Invalid AppId` | 签名验证模式下 `AppId` 或 `AppSecret` 无效。客户端凭证模式下 `AppId` 无效。 |
  | `Invalid Signature` | 签名不匹配。 |
  | `Invalid AppSecret` | 客户端凭证模式下 `AppSecret` 无效。 |


### 7. 安全注意事项

- 尽量不在客户端应用（如移动应用、桌面应用）中硬编码您的 `AppSecret`，或是将代码进行混淆，以防止 `AppSecret` 泄露。
- 如果您正在开发开源的客户端/前端项目，可以选择：
  - 通过自建服务器端向弹弹play开放平台转发来自客户端的请求，将 `AppSecret` 存放在您的服务器端。
  - 在开源代码中使用占位符，防止 `AppSecret` 从代码中泄露，之后在构建时（如使用 GitHub Actions）从机密中读取 `AppSecret` 后替换此占位符。
- 使用 HTTPS 来确保请求的安全性。
- 定期更新和保护您的凭证。

### 8. API 权限和使用范围说明

当您申请到 `AppId` 和 `AppSecret` 后，就可以使用这些凭证来访问弹弹play API了。

目前弹弹play API中的接口分为两类，**公开接口** 和 **受限接口**：
  - **公开接口**是指不需要身份验证就可以访问的接口，如文件识别、搜索、获取弹幕等。
  - **受限接口**是指需要身份验证（用户成功登录后）才能访问的接口，如关注、播放历史、发送弹幕等。

受限接口一般和用户操作自己的数据有关，在Swagger工具的接口注释中会注明。调用受限接口时需要在 Authorization 头中包含用户的 JWT Token。

新申请的应用程序默认可以访问所有公开接口。当前暂不开放受限接口的访问权限，当受限接口开放后，我们将会通过各种方式通知您。到时如果您有需要，可以联系我们申请访问权限。

### 9. API 使用约定

- 请按需使用 API，避免高频调用，以免对服务器造成过大的负担。
- 请缓存 API 返回的数据，以减少对服务器的请求次数。
- 不可滥用 API，包括但不限于：
  - 恶意刷弹幕污染弹幕库环境；
  - 向服务器大量提交无意义的数据；
  - 通过 API 大规模抓取数据等“下载数据库”的行为。
- 不可将 API 用于违法、违规，或侵犯他人权益的行为。
- 未经授权，禁止利用弹弹play开放平台返回的数据进行任何形式的商业活动，包括但不限于向第三方收费或提供增值服务。如需商业合作或授权，请与我们联系。

当前开放平台暂不对 API 的调用次数和频率进行限制，但如果我们发现您的应用程序有违反上述约定的行为，我们保留在不事先通知的情况下立即停用您应用的权利。

为了保证开放平台的正常服务，我们对部分比较消耗服务器资源的接口（如搜索）配置了检测机制，如果检测到您的应用程序超过正常使用范围内的调用这些接口，程序将自动限制您的继续访问。如果您的应用确实需要频繁调用这些接口，请联系我们添加白名单。

### 10. 缓存建议

即使是最简单的缓存策略也能够带来性能和响应速度的大幅提升。建议您在调用开放平台 API 时，适当缓存 API 返回的数据，减少请求次数。以下是一些缓存建议：

  - 绝大部分数据都不会频繁变动，包括弹幕、节目信息、关联、搜索结果等。可以根据 ID、搜索关键词等条件适当缓存一段时间（如 2-6 小时）。
  - 根据弹弹play自己的经验，除热门番剧更新当天需要较短的缓存时间（一般是半小时到 1 小时）之外，非当季热门番剧可以设置更久，如 12-24 小时的缓存时间。老番剧的数据则可以设置更长的缓存时间，如 2-7 天。

如果您的应用调用量非常大或非常频繁，建议从一开始接入时就考虑使用缓存机制，以免触发开放平台的检测与拦截机制。

### 11. 客户端调用流程

[接口文档及在线调试工具](https://api.dandanplay.net/swagger)

#### (1) 使用文件识别或搜索，得到节目编号
首先，在打开视频文件的时候，客户端应该调用 **文件识别 API**（`/api/v2/match`），传递视频文件名、hash、长度、大小之后，服务器端对文件进行识别。文件识别 API 会返回一个“此文件可能是...”的列表，用户需要在此列表中选择一个最适合的项目。

- Hash计算方式：使用文件前 16MB（16x1024x1024字节）数据计算MD5
- 测试视频：此视频前16MB数据的MD5为 `658d05841b9476ccc7420b3f0bb21c3b` 下载地址：[http://pan.baidu.com/s/1GNkQE](http://pan.baidu.com/s/1GNkQE)

客户端将会得到一个`节目编号(episodeId)`，请保存此视频文件和此节目编号的关联。节目编号表示的是某个动画的某一集，一个节目编号可以关联很多个视频，一个视频只能关联到一个节目编号。

当**文件识别 API**（`/api/v2/match`）返回的列表中没有正确的番剧名称或节目时，仍可通过 **搜索 API**（`/api/v2/search`）搜索番剧名称，进行手动匹配。

#### (2) 使用节目编号获取弹幕

之后，客户端就可以通过`节目编号(episodeId)`来调用 **弹幕 API**（`/api/v2/comment`）获取弹弹play服务器上的弹幕了。使用参数 `?withRelated=true` 可以获取整合第三方网站后的所有弹幕。

> 弹弹play服务器上的弹幕数量不够怎么办？这时可以调用 **弹幕关联 API**（`/api/v2/related`），客户端可以通过`节目编号(episodeId)`获得这个节目在其他网站上都有哪些对应的网址（如B站、动画疯等），从而解析这些网址并加载弹幕。

> 为了从解析出一个外部网址对应的弹幕，除了自行编写解析代码，也可以使用 **外部弹幕 API**（`/api/v2/extcomment`）获取已缓存的弹幕。

#### (3) 发送弹幕

当用户想要发送弹幕时，可以再次调用 **弹幕 API**（`/api/v2/comment`）将弹幕发送到弹弹play服务器上。

### 12. 支持

如有任何问题或需要进一步帮助，请加QQ群联系管理员。

后续会上线开发者中心网站，方便开发者查看应用程序的 API 使用情况、自助更换凭证、查看文档等。