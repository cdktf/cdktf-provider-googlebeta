# `googleDeveloperConnectConnection` Submodule <a name="`googleDeveloperConnectConnection` Submodule" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDeveloperConnectConnection <a name="GoogleDeveloperConnectConnection" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection google_developer_connect_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnection(scope Construct, id *string, config GoogleDeveloperConnectConnectionConfig) GoogleDeveloperConnectConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig">GoogleDeveloperConnectConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig">GoogleDeveloperConnectConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putBitbucketCloudConfig">PutBitbucketCloudConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putBitbucketDataCenterConfig">PutBitbucketDataCenterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putCryptoKeyConfig">PutCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGithubConfig">PutGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGithubEnterpriseConfig">PutGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGitlabConfig">PutGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGitlabEnterpriseConfig">PutGitlabEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetBitbucketCloudConfig">ResetBitbucketCloudConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetBitbucketDataCenterConfig">ResetBitbucketDataCenterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetCryptoKeyConfig">ResetCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGithubConfig">ResetGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGithubEnterpriseConfig">ResetGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGitlabConfig">ResetGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGitlabEnterpriseConfig">ResetGitlabEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBitbucketCloudConfig` <a name="PutBitbucketCloudConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putBitbucketCloudConfig"></a>

```go
func PutBitbucketCloudConfig(value GoogleDeveloperConnectConnectionBitbucketCloudConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putBitbucketCloudConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfig">GoogleDeveloperConnectConnectionBitbucketCloudConfig</a>

---

##### `PutBitbucketDataCenterConfig` <a name="PutBitbucketDataCenterConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putBitbucketDataCenterConfig"></a>

```go
func PutBitbucketDataCenterConfig(value GoogleDeveloperConnectConnectionBitbucketDataCenterConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putBitbucketDataCenterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig">GoogleDeveloperConnectConnectionBitbucketDataCenterConfig</a>

---

##### `PutCryptoKeyConfig` <a name="PutCryptoKeyConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putCryptoKeyConfig"></a>

```go
func PutCryptoKeyConfig(value GoogleDeveloperConnectConnectionCryptoKeyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putCryptoKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig">GoogleDeveloperConnectConnectionCryptoKeyConfig</a>

---

##### `PutGithubConfig` <a name="PutGithubConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGithubConfig"></a>

```go
func PutGithubConfig(value GoogleDeveloperConnectConnectionGithubConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGithubConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a>

---

##### `PutGithubEnterpriseConfig` <a name="PutGithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGithubEnterpriseConfig"></a>

```go
func PutGithubEnterpriseConfig(value GoogleDeveloperConnectConnectionGithubEnterpriseConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGithubEnterpriseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfig</a>

---

##### `PutGitlabConfig` <a name="PutGitlabConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGitlabConfig"></a>

```go
func PutGitlabConfig(value GoogleDeveloperConnectConnectionGitlabConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGitlabConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig">GoogleDeveloperConnectConnectionGitlabConfig</a>

---

##### `PutGitlabEnterpriseConfig` <a name="PutGitlabEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGitlabEnterpriseConfig"></a>

```go
func PutGitlabEnterpriseConfig(value GoogleDeveloperConnectConnectionGitlabEnterpriseConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGitlabEnterpriseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDeveloperConnectConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts">GoogleDeveloperConnectConnectionTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetBitbucketCloudConfig` <a name="ResetBitbucketCloudConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetBitbucketCloudConfig"></a>

```go
func ResetBitbucketCloudConfig()
```

##### `ResetBitbucketDataCenterConfig` <a name="ResetBitbucketDataCenterConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetBitbucketDataCenterConfig"></a>

```go
func ResetBitbucketDataCenterConfig()
```

##### `ResetCryptoKeyConfig` <a name="ResetCryptoKeyConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetCryptoKeyConfig"></a>

```go
func ResetCryptoKeyConfig()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetGithubConfig` <a name="ResetGithubConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGithubConfig"></a>

```go
func ResetGithubConfig()
```

##### `ResetGithubEnterpriseConfig` <a name="ResetGithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGithubEnterpriseConfig"></a>

```go
func ResetGithubEnterpriseConfig()
```

##### `ResetGitlabConfig` <a name="ResetGitlabConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGitlabConfig"></a>

```go
func ResetGitlabConfig()
```

##### `ResetGitlabEnterpriseConfig` <a name="ResetGitlabEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGitlabEnterpriseConfig"></a>

```go
func ResetGitlabEnterpriseConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDeveloperConnectConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.GoogleDeveloperConnectConnection_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.GoogleDeveloperConnectConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.GoogleDeveloperConnectConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.GoogleDeveloperConnectConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleDeveloperConnectConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDeveloperConnectConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDeveloperConnectConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDeveloperConnectConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.bitbucketCloudConfig">BitbucketCloudConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference">GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.bitbucketDataCenterConfig">BitbucketDataCenterConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.cryptoKeyConfig">CryptoKeyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference">GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubConfig">GithubConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference">GoogleDeveloperConnectConnectionGithubConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference">GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabConfig">GitlabConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference">GoogleDeveloperConnectConnectionGitlabConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabEnterpriseConfig">GitlabEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.installationState">InstallationState</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList">GoogleDeveloperConnectConnectionInstallationStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference">GoogleDeveloperConnectConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.bitbucketCloudConfigInput">BitbucketCloudConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfig">GoogleDeveloperConnectConnectionBitbucketCloudConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.bitbucketDataCenterConfigInput">BitbucketDataCenterConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig">GoogleDeveloperConnectConnectionBitbucketDataCenterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connectionIdInput">ConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.cryptoKeyConfigInput">CryptoKeyConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig">GoogleDeveloperConnectConnectionCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubConfigInput">GithubConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubEnterpriseConfigInput">GithubEnterpriseConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabConfigInput">GitlabConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig">GoogleDeveloperConnectConnectionGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabEnterpriseConfigInput">GitlabEnterpriseConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BitbucketCloudConfig`<sup>Required</sup> <a name="BitbucketCloudConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.bitbucketCloudConfig"></a>

```go
func BitbucketCloudConfig() GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference">GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference</a>

---

##### `BitbucketDataCenterConfig`<sup>Required</sup> <a name="BitbucketDataCenterConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.bitbucketDataCenterConfig"></a>

```go
func BitbucketDataCenterConfig() GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CryptoKeyConfig`<sup>Required</sup> <a name="CryptoKeyConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.cryptoKeyConfig"></a>

```go
func CryptoKeyConfig() GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference">GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference</a>

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GithubConfig`<sup>Required</sup> <a name="GithubConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubConfig"></a>

```go
func GithubConfig() GoogleDeveloperConnectConnectionGithubConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference">GoogleDeveloperConnectConnectionGithubConfigOutputReference</a>

---

##### `GithubEnterpriseConfig`<sup>Required</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubEnterpriseConfig"></a>

```go
func GithubEnterpriseConfig() GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference">GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference</a>

---

##### `GitlabConfig`<sup>Required</sup> <a name="GitlabConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabConfig"></a>

```go
func GitlabConfig() GoogleDeveloperConnectConnectionGitlabConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference">GoogleDeveloperConnectConnectionGitlabConfigOutputReference</a>

---

##### `GitlabEnterpriseConfig`<sup>Required</sup> <a name="GitlabEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabEnterpriseConfig"></a>

```go
func GitlabEnterpriseConfig() GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference</a>

---

##### `InstallationState`<sup>Required</sup> <a name="InstallationState" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.installationState"></a>

```go
func InstallationState() GoogleDeveloperConnectConnectionInstallationStateList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList">GoogleDeveloperConnectConnectionInstallationStateList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.timeouts"></a>

```go
func Timeouts() GoogleDeveloperConnectConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference">GoogleDeveloperConnectConnectionTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BitbucketCloudConfigInput`<sup>Optional</sup> <a name="BitbucketCloudConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.bitbucketCloudConfigInput"></a>

```go
func BitbucketCloudConfigInput() GoogleDeveloperConnectConnectionBitbucketCloudConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfig">GoogleDeveloperConnectConnectionBitbucketCloudConfig</a>

---

##### `BitbucketDataCenterConfigInput`<sup>Optional</sup> <a name="BitbucketDataCenterConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.bitbucketDataCenterConfigInput"></a>

```go
func BitbucketDataCenterConfigInput() GoogleDeveloperConnectConnectionBitbucketDataCenterConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig">GoogleDeveloperConnectConnectionBitbucketDataCenterConfig</a>

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connectionIdInput"></a>

```go
func ConnectionIdInput() *string
```

- *Type:* *string

---

##### `CryptoKeyConfigInput`<sup>Optional</sup> <a name="CryptoKeyConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.cryptoKeyConfigInput"></a>

```go
func CryptoKeyConfigInput() GoogleDeveloperConnectConnectionCryptoKeyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig">GoogleDeveloperConnectConnectionCryptoKeyConfig</a>

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `GithubConfigInput`<sup>Optional</sup> <a name="GithubConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubConfigInput"></a>

```go
func GithubConfigInput() GoogleDeveloperConnectConnectionGithubConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a>

---

##### `GithubEnterpriseConfigInput`<sup>Optional</sup> <a name="GithubEnterpriseConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubEnterpriseConfigInput"></a>

```go
func GithubEnterpriseConfigInput() GoogleDeveloperConnectConnectionGithubEnterpriseConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfig</a>

---

##### `GitlabConfigInput`<sup>Optional</sup> <a name="GitlabConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabConfigInput"></a>

```go
func GitlabConfigInput() GoogleDeveloperConnectConnectionGitlabConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig">GoogleDeveloperConnectConnectionGitlabConfig</a>

---

##### `GitlabEnterpriseConfigInput`<sup>Optional</sup> <a name="GitlabEnterpriseConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabEnterpriseConfigInput"></a>

```go
func GitlabEnterpriseConfigInput() GoogleDeveloperConnectConnectionGitlabEnterpriseConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDeveloperConnectConnectionBitbucketCloudConfig <a name="GoogleDeveloperConnectConnectionBitbucketCloudConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

&googledeveloperconnectconnection.GoogleDeveloperConnectConnectionBitbucketCloudConfig {
	AuthorizerCredential: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential,
	ReadAuthorizerCredential: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential,
	WebhookSecretSecretVersion: *string,
	Workspace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfig.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfig.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfig.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfig.property.workspace">Workspace</a></code> | <code>*string</code> | Required. The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform. |

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfig.property.authorizerCredential"></a>

```go
AuthorizerCredential GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#authorizer_credential GoogleDeveloperConnectConnection#authorizer_credential}

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfig.property.readAuthorizerCredential"></a>

```go
ReadAuthorizerCredential GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#read_authorizer_credential GoogleDeveloperConnectConnection#read_authorizer_credential}

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfig.property.webhookSecretSecretVersion"></a>

```go
WebhookSecretSecretVersion *string
```

- *Type:* *string

Required.

Immutable. SecretManager resource containing the webhook secret used to verify webhook
events, formatted as 'projects/* /secrets/* /versions/*'. This is used to
validate and create webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#webhook_secret_secret_version GoogleDeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfig.property.workspace"></a>

```go
Workspace *string
```

- *Type:* *string

Required. The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#workspace GoogleDeveloperConnectConnection#workspace}

---

### GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential <a name="GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

&googledeveloperconnectconnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential {
	UserTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```go
UserTokenSecretVersion *string
```

- *Type:* *string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential <a name="GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

&googledeveloperconnectconnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential {
	UserTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```go
UserTokenSecretVersion *string
```

- *Type:* *string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionBitbucketDataCenterConfig <a name="GoogleDeveloperConnectConnectionBitbucketDataCenterConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

&googledeveloperconnectconnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig {
	AuthorizerCredential: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential,
	HostUri: *string,
	ReadAuthorizerCredential: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential,
	WebhookSecretSecretVersion: *string,
	ServiceDirectoryConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig,
	SslCaCertificate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig.property.hostUri">HostUri</a></code> | <code>*string</code> | Required. The URI of the Bitbucket Data Center host this connection is for. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig.property.sslCaCertificate">SslCaCertificate</a></code> | <code>*string</code> | Optional. SSL certificate authority to trust when making requests to Bitbucket Data Center. |

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig.property.authorizerCredential"></a>

```go
AuthorizerCredential GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#authorizer_credential GoogleDeveloperConnectConnection#authorizer_credential}

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig.property.hostUri"></a>

```go
HostUri *string
```

- *Type:* *string

Required. The URI of the Bitbucket Data Center host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#host_uri GoogleDeveloperConnectConnection#host_uri}

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig.property.readAuthorizerCredential"></a>

```go
ReadAuthorizerCredential GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#read_authorizer_credential GoogleDeveloperConnectConnection#read_authorizer_credential}

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig.property.webhookSecretSecretVersion"></a>

```go
WebhookSecretSecretVersion *string
```

- *Type:* *string

Required.

Immutable. SecretManager resource containing the webhook secret used to verify webhook
events, formatted as 'projects/* /secrets/* /versions/*'. This is used to
validate webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#webhook_secret_secret_version GoogleDeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig.property.serviceDirectoryConfig"></a>

```go
ServiceDirectoryConfig GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#service_directory_config GoogleDeveloperConnectConnection#service_directory_config}

---

##### `SslCaCertificate`<sup>Optional</sup> <a name="SslCaCertificate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig.property.sslCaCertificate"></a>

```go
SslCaCertificate *string
```

- *Type:* *string

Optional. SSL certificate authority to trust when making requests to Bitbucket Data Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#ssl_ca_certificate GoogleDeveloperConnectConnection#ssl_ca_certificate}

---

### GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential <a name="GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

&googledeveloperconnectconnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential {
	UserTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```go
UserTokenSecretVersion *string
```

- *Type:* *string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential <a name="GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

&googledeveloperconnectconnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential {
	UserTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```go
UserTokenSecretVersion *string
```

- *Type:* *string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig <a name="GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

&googledeveloperconnectconnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig {
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig.property.service">Service</a></code> | <code>*string</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#service GoogleDeveloperConnectConnection#service}

---

### GoogleDeveloperConnectConnectionConfig <a name="GoogleDeveloperConnectConnectionConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

&googledeveloperconnectconnection.GoogleDeveloperConnectConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionId: *string,
	Location: *string,
	Annotations: *map[string]*string,
	BitbucketCloudConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfig,
	BitbucketDataCenterConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig,
	CryptoKeyConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig,
	Disabled: interface{},
	Etag: *string,
	GithubConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig,
	GithubEnterpriseConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig,
	GitlabConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig,
	GitlabEnterpriseConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.connectionId">ConnectionId</a></code> | <code>*string</code> | Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection_id from the method_signature of Create RPC. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Optional. Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.bitbucketCloudConfig">BitbucketCloudConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfig">GoogleDeveloperConnectConnectionBitbucketCloudConfig</a></code> | bitbucket_cloud_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.bitbucketDataCenterConfig">BitbucketDataCenterConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig">GoogleDeveloperConnectConnectionBitbucketDataCenterConfig</a></code> | bitbucket_data_center_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.cryptoKeyConfig">CryptoKeyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig">GoogleDeveloperConnectConnectionCryptoKeyConfig</a></code> | crypto_key_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.etag">Etag</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.githubConfig">GithubConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a></code> | github_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfig</a></code> | github_enterprise_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.gitlabConfig">GitlabConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig">GoogleDeveloperConnectConnectionGitlabConfig</a></code> | gitlab_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.gitlabEnterpriseConfig">GitlabEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfig</a></code> | gitlab_enterprise_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#id GoogleDeveloperConnectConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#project GoogleDeveloperConnectConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts">GoogleDeveloperConnectConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.connectionId"></a>

```go
ConnectionId *string
```

- *Type:* *string

Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#connection_id GoogleDeveloperConnectConnection#connection_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#location GoogleDeveloperConnectConnection#location}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Optional. Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#annotations GoogleDeveloperConnectConnection#annotations}

---

##### `BitbucketCloudConfig`<sup>Optional</sup> <a name="BitbucketCloudConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.bitbucketCloudConfig"></a>

```go
BitbucketCloudConfig GoogleDeveloperConnectConnectionBitbucketCloudConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfig">GoogleDeveloperConnectConnectionBitbucketCloudConfig</a>

bitbucket_cloud_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#bitbucket_cloud_config GoogleDeveloperConnectConnection#bitbucket_cloud_config}

---

##### `BitbucketDataCenterConfig`<sup>Optional</sup> <a name="BitbucketDataCenterConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.bitbucketDataCenterConfig"></a>

```go
BitbucketDataCenterConfig GoogleDeveloperConnectConnectionBitbucketDataCenterConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig">GoogleDeveloperConnectConnectionBitbucketDataCenterConfig</a>

bitbucket_data_center_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#bitbucket_data_center_config GoogleDeveloperConnectConnection#bitbucket_data_center_config}

---

##### `CryptoKeyConfig`<sup>Optional</sup> <a name="CryptoKeyConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.cryptoKeyConfig"></a>

```go
CryptoKeyConfig GoogleDeveloperConnectConnectionCryptoKeyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig">GoogleDeveloperConnectConnectionCryptoKeyConfig</a>

crypto_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#crypto_key_config GoogleDeveloperConnectConnection#crypto_key_config}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Optional.

If disabled is set to true, functionality is disabled for this connection.
Repository based API methods and webhooks processing for repositories in
this connection will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#disabled GoogleDeveloperConnectConnection#disabled}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

Optional.

This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#etag GoogleDeveloperConnectConnection#etag}

---

##### `GithubConfig`<sup>Optional</sup> <a name="GithubConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.githubConfig"></a>

```go
GithubConfig GoogleDeveloperConnectConnectionGithubConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a>

github_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#github_config GoogleDeveloperConnectConnection#github_config}

---

##### `GithubEnterpriseConfig`<sup>Optional</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.githubEnterpriseConfig"></a>

```go
GithubEnterpriseConfig GoogleDeveloperConnectConnectionGithubEnterpriseConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfig</a>

github_enterprise_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#github_enterprise_config GoogleDeveloperConnectConnection#github_enterprise_config}

---

##### `GitlabConfig`<sup>Optional</sup> <a name="GitlabConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.gitlabConfig"></a>

```go
GitlabConfig GoogleDeveloperConnectConnectionGitlabConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig">GoogleDeveloperConnectConnectionGitlabConfig</a>

gitlab_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#gitlab_config GoogleDeveloperConnectConnection#gitlab_config}

---

##### `GitlabEnterpriseConfig`<sup>Optional</sup> <a name="GitlabEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.gitlabEnterpriseConfig"></a>

```go
GitlabEnterpriseConfig GoogleDeveloperConnectConnectionGitlabEnterpriseConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfig</a>

gitlab_enterprise_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#gitlab_enterprise_config GoogleDeveloperConnectConnection#gitlab_enterprise_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#id GoogleDeveloperConnectConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#labels GoogleDeveloperConnectConnection#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#project GoogleDeveloperConnectConnection#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.timeouts"></a>

```go
Timeouts GoogleDeveloperConnectConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts">GoogleDeveloperConnectConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#timeouts GoogleDeveloperConnectConnection#timeouts}

---

### GoogleDeveloperConnectConnectionCryptoKeyConfig <a name="GoogleDeveloperConnectConnectionCryptoKeyConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

&googledeveloperconnectconnection.GoogleDeveloperConnectConnectionCryptoKeyConfig {
	KeyReference: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig.property.keyReference">KeyReference</a></code> | <code>*string</code> | Required. |

---

##### `KeyReference`<sup>Required</sup> <a name="KeyReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig.property.keyReference"></a>

```go
KeyReference *string
```

- *Type:* *string

Required.

The name of the key which is used to encrypt/decrypt customer data. For key
in Cloud KMS, the key should be in the format of
'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#key_reference GoogleDeveloperConnectConnection#key_reference}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGithubConfig <a name="GoogleDeveloperConnectConnectionGithubConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

&googledeveloperconnectconnection.GoogleDeveloperConnectConnectionGithubConfig {
	GithubApp: *string,
	AppInstallationId: *string,
	AuthorizerCredential: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.githubApp">GithubApp</a></code> | <code>*string</code> | Required. Immutable. The GitHub Application that was installed to the GitHub user or organization. Possible values: GIT_HUB_APP_UNSPECIFIED DEVELOPER_CONNECT FIREBASE. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.appInstallationId">AppInstallationId</a></code> | <code>*string</code> | Optional. GitHub App installation id. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a></code> | authorizer_credential block. |

---

##### `GithubApp`<sup>Required</sup> <a name="GithubApp" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.githubApp"></a>

```go
GithubApp *string
```

- *Type:* *string

Required. Immutable. The GitHub Application that was installed to the GitHub user or organization. Possible values: GIT_HUB_APP_UNSPECIFIED DEVELOPER_CONNECT FIREBASE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#github_app GoogleDeveloperConnectConnection#github_app}

---

##### `AppInstallationId`<sup>Optional</sup> <a name="AppInstallationId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.appInstallationId"></a>

```go
AppInstallationId *string
```

- *Type:* *string

Optional. GitHub App installation id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#app_installation_id GoogleDeveloperConnectConnection#app_installation_id}

---

##### `AuthorizerCredential`<sup>Optional</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.authorizerCredential"></a>

```go
AuthorizerCredential GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#authorizer_credential GoogleDeveloperConnectConnection#authorizer_credential}

---

### GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential <a name="GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

&googledeveloperconnectconnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential {
	OauthTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential.property.oauthTokenSecretVersion">OauthTokenSecretVersion</a></code> | <code>*string</code> | Required. A SecretManager resource containing the OAuth token that authorizes the connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `OauthTokenSecretVersion`<sup>Required</sup> <a name="OauthTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential.property.oauthTokenSecretVersion"></a>

```go
OauthTokenSecretVersion *string
```

- *Type:* *string

Required. A SecretManager resource containing the OAuth token that authorizes the connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#oauth_token_secret_version GoogleDeveloperConnectConnection#oauth_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGithubEnterpriseConfig <a name="GoogleDeveloperConnectConnectionGithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

&googledeveloperconnectconnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig {
	HostUri: *string,
	AppId: *string,
	AppInstallationId: *string,
	PrivateKeySecretVersion: *string,
	ServiceDirectoryConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig,
	SslCaCertificate: *string,
	WebhookSecretSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.hostUri">HostUri</a></code> | <code>*string</code> | Required. The URI of the GitHub Enterprise host this connection is for. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.appId">AppId</a></code> | <code>*string</code> | Optional. ID of the GitHub App created from the manifest. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.appInstallationId">AppInstallationId</a></code> | <code>*string</code> | Optional. ID of the installation of the GitHub App. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.privateKeySecretVersion">PrivateKeySecretVersion</a></code> | <code>*string</code> | Optional. SecretManager resource containing the private key of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.sslCaCertificate">SslCaCertificate</a></code> | <code>*string</code> | Optional. SSL certificate to use for requests to GitHub Enterprise. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | Optional. SecretManager resource containing the webhook secret of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'. |

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.hostUri"></a>

```go
HostUri *string
```

- *Type:* *string

Required. The URI of the GitHub Enterprise host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#host_uri GoogleDeveloperConnectConnection#host_uri}

---

##### `AppId`<sup>Optional</sup> <a name="AppId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

Optional. ID of the GitHub App created from the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#app_id GoogleDeveloperConnectConnection#app_id}

---

##### `AppInstallationId`<sup>Optional</sup> <a name="AppInstallationId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.appInstallationId"></a>

```go
AppInstallationId *string
```

- *Type:* *string

Optional. ID of the installation of the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#app_installation_id GoogleDeveloperConnectConnection#app_installation_id}

---

##### `PrivateKeySecretVersion`<sup>Optional</sup> <a name="PrivateKeySecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.privateKeySecretVersion"></a>

```go
PrivateKeySecretVersion *string
```

- *Type:* *string

Optional. SecretManager resource containing the private key of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#private_key_secret_version GoogleDeveloperConnectConnection#private_key_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.serviceDirectoryConfig"></a>

```go
ServiceDirectoryConfig GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#service_directory_config GoogleDeveloperConnectConnection#service_directory_config}

---

##### `SslCaCertificate`<sup>Optional</sup> <a name="SslCaCertificate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.sslCaCertificate"></a>

```go
SslCaCertificate *string
```

- *Type:* *string

Optional. SSL certificate to use for requests to GitHub Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#ssl_ca_certificate GoogleDeveloperConnectConnection#ssl_ca_certificate}

---

##### `WebhookSecretSecretVersion`<sup>Optional</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.webhookSecretSecretVersion"></a>

```go
WebhookSecretSecretVersion *string
```

- *Type:* *string

Optional. SecretManager resource containing the webhook secret of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#webhook_secret_secret_version GoogleDeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig <a name="GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

&googledeveloperconnectconnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig {
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig.property.service">Service</a></code> | <code>*string</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#service GoogleDeveloperConnectConnection#service}

---

### GoogleDeveloperConnectConnectionGitlabConfig <a name="GoogleDeveloperConnectConnectionGitlabConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

&googledeveloperconnectconnection.GoogleDeveloperConnectConnectionGitlabConfig {
	AuthorizerCredential: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential,
	ReadAuthorizerCredential: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential,
	WebhookSecretSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | Required. |

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig.property.authorizerCredential"></a>

```go
AuthorizerCredential GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#authorizer_credential GoogleDeveloperConnectConnection#authorizer_credential}

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig.property.readAuthorizerCredential"></a>

```go
ReadAuthorizerCredential GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#read_authorizer_credential GoogleDeveloperConnectConnection#read_authorizer_credential}

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig.property.webhookSecretSecretVersion"></a>

```go
WebhookSecretSecretVersion *string
```

- *Type:* *string

Required.

Immutable. SecretManager resource containing the webhook secret of a GitLab project,
formatted as 'projects/* /secrets/* /versions/*'. This is used to validate
webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#webhook_secret_secret_version GoogleDeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential <a name="GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

&googledeveloperconnectconnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential {
	UserTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```go
UserTokenSecretVersion *string
```

- *Type:* *string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential <a name="GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

&googledeveloperconnectconnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential {
	UserTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```go
UserTokenSecretVersion *string
```

- *Type:* *string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGitlabEnterpriseConfig <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

&googledeveloperconnectconnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig {
	AuthorizerCredential: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential,
	HostUri: *string,
	ReadAuthorizerCredential: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential,
	WebhookSecretSecretVersion: *string,
	ServiceDirectoryConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig,
	SslCaCertificate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.hostUri">HostUri</a></code> | <code>*string</code> | Required. The URI of the GitLab Enterprise host this connection is for. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.sslCaCertificate">SslCaCertificate</a></code> | <code>*string</code> | Optional. SSL Certificate Authority certificate to use for requests to GitLab Enterprise instance. |

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.authorizerCredential"></a>

```go
AuthorizerCredential GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#authorizer_credential GoogleDeveloperConnectConnection#authorizer_credential}

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.hostUri"></a>

```go
HostUri *string
```

- *Type:* *string

Required. The URI of the GitLab Enterprise host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#host_uri GoogleDeveloperConnectConnection#host_uri}

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.readAuthorizerCredential"></a>

```go
ReadAuthorizerCredential GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#read_authorizer_credential GoogleDeveloperConnectConnection#read_authorizer_credential}

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.webhookSecretSecretVersion"></a>

```go
WebhookSecretSecretVersion *string
```

- *Type:* *string

Required.

Immutable. SecretManager resource containing the webhook secret of a GitLab project,
formatted as 'projects/* /secrets/* /versions/*'. This is used to validate
webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#webhook_secret_secret_version GoogleDeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.serviceDirectoryConfig"></a>

```go
ServiceDirectoryConfig GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#service_directory_config GoogleDeveloperConnectConnection#service_directory_config}

---

##### `SslCaCertificate`<sup>Optional</sup> <a name="SslCaCertificate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.sslCaCertificate"></a>

```go
SslCaCertificate *string
```

- *Type:* *string

Optional. SSL Certificate Authority certificate to use for requests to GitLab Enterprise instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#ssl_ca_certificate GoogleDeveloperConnectConnection#ssl_ca_certificate}

---

### GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

&googledeveloperconnectconnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential {
	UserTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```go
UserTokenSecretVersion *string
```

- *Type:* *string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

&googledeveloperconnectconnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential {
	UserTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```go
UserTokenSecretVersion *string
```

- *Type:* *string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

&googledeveloperconnectconnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig {
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig.property.service">Service</a></code> | <code>*string</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#service GoogleDeveloperConnectConnection#service}

---

### GoogleDeveloperConnectConnectionInstallationState <a name="GoogleDeveloperConnectConnectionInstallationState" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationState.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

&googledeveloperconnectconnection.GoogleDeveloperConnectConnectionInstallationState {

}
```


### GoogleDeveloperConnectConnectionTimeouts <a name="GoogleDeveloperConnectConnectionTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

&googledeveloperconnectconnection.GoogleDeveloperConnectConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#create GoogleDeveloperConnectConnection#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#delete GoogleDeveloperConnectConnection#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#update GoogleDeveloperConnectConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#create GoogleDeveloperConnectConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#delete GoogleDeveloperConnectConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_developer_connect_connection#update GoogleDeveloperConnectConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference <a name="GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```go
func UserTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```go
func UserTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a>

---


### GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference <a name="GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.putAuthorizerCredential">PutAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.putReadAuthorizerCredential">PutReadAuthorizerCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerCredential` <a name="PutAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.putAuthorizerCredential"></a>

```go
func PutAuthorizerCredential(value GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a>

---

##### `PutReadAuthorizerCredential` <a name="PutReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.putReadAuthorizerCredential"></a>

```go
func PutReadAuthorizerCredential(value GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.authorizerCredentialInput">AuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredentialInput">ReadAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersionInput">WebhookSecretSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.workspaceInput">WorkspaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.workspace">Workspace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfig">GoogleDeveloperConnectConnectionBitbucketCloudConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.authorizerCredential"></a>

```go
func AuthorizerCredential() GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference</a>

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredential"></a>

```go
func ReadAuthorizerCredential() GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference</a>

---

##### `AuthorizerCredentialInput`<sup>Optional</sup> <a name="AuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.authorizerCredentialInput"></a>

```go
func AuthorizerCredentialInput() GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a>

---

##### `ReadAuthorizerCredentialInput`<sup>Optional</sup> <a name="ReadAuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```go
func ReadAuthorizerCredentialInput() GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

---

##### `WebhookSecretSecretVersionInput`<sup>Optional</sup> <a name="WebhookSecretSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```go
func WebhookSecretSecretVersionInput() *string
```

- *Type:* *string

---

##### `WorkspaceInput`<sup>Optional</sup> <a name="WorkspaceInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.workspaceInput"></a>

```go
func WorkspaceInput() *string
```

- *Type:* *string

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersion"></a>

```go
func WebhookSecretSecretVersion() *string
```

- *Type:* *string

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.workspace"></a>

```go
func Workspace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDeveloperConnectConnectionBitbucketCloudConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfig">GoogleDeveloperConnectConnectionBitbucketCloudConfig</a>

---


### GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference <a name="GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```go
func UserTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```go
func UserTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

---


### GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference <a name="GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```go
func UserTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```go
func UserTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

---


### GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference <a name="GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putAuthorizerCredential">PutAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putReadAuthorizerCredential">PutReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resetSslCaCertificate">ResetSslCaCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerCredential` <a name="PutAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putAuthorizerCredential"></a>

```go
func PutAuthorizerCredential(value GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

---

##### `PutReadAuthorizerCredential` <a name="PutReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putReadAuthorizerCredential"></a>

```go
func PutReadAuthorizerCredential(value GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

---

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putServiceDirectoryConfig"></a>

```go
func PutServiceDirectoryConfig(value GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

---

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resetServiceDirectoryConfig"></a>

```go
func ResetServiceDirectoryConfig()
```

##### `ResetSslCaCertificate` <a name="ResetSslCaCertificate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resetSslCaCertificate"></a>

```go
func ResetSslCaCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serverVersion">ServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredentialInput">AuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.hostUriInput">HostUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredentialInput">ReadAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.sslCaCertificateInput">SslCaCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersionInput">WebhookSecretSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.hostUri">HostUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.sslCaCertificate">SslCaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig">GoogleDeveloperConnectConnectionBitbucketDataCenterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredential"></a>

```go
func AuthorizerCredential() GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference</a>

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredential"></a>

```go
func ReadAuthorizerCredential() GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference</a>

---

##### `ServerVersion`<sup>Required</sup> <a name="ServerVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serverVersion"></a>

```go
func ServerVersion() *string
```

- *Type:* *string

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfig"></a>

```go
func ServiceDirectoryConfig() GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference</a>

---

##### `AuthorizerCredentialInput`<sup>Optional</sup> <a name="AuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredentialInput"></a>

```go
func AuthorizerCredentialInput() GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

---

##### `HostUriInput`<sup>Optional</sup> <a name="HostUriInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.hostUriInput"></a>

```go
func HostUriInput() *string
```

- *Type:* *string

---

##### `ReadAuthorizerCredentialInput`<sup>Optional</sup> <a name="ReadAuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```go
func ReadAuthorizerCredentialInput() GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```go
func ServiceDirectoryConfigInput() GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

---

##### `SslCaCertificateInput`<sup>Optional</sup> <a name="SslCaCertificateInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.sslCaCertificateInput"></a>

```go
func SslCaCertificateInput() *string
```

- *Type:* *string

---

##### `WebhookSecretSecretVersionInput`<sup>Optional</sup> <a name="WebhookSecretSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```go
func WebhookSecretSecretVersionInput() *string
```

- *Type:* *string

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.hostUri"></a>

```go
func HostUri() *string
```

- *Type:* *string

---

##### `SslCaCertificate`<sup>Required</sup> <a name="SslCaCertificate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.sslCaCertificate"></a>

```go
func SslCaCertificate() *string
```

- *Type:* *string

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersion"></a>

```go
func WebhookSecretSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDeveloperConnectConnectionBitbucketDataCenterConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfig">GoogleDeveloperConnectConnectionBitbucketDataCenterConfig</a>

---


### GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference <a name="GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```go
func UserTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```go
func UserTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

---


### GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference <a name="GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

---


### GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference <a name="GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReferenceInput">KeyReferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReference">KeyReference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig">GoogleDeveloperConnectConnectionCryptoKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyReferenceInput`<sup>Optional</sup> <a name="KeyReferenceInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReferenceInput"></a>

```go
func KeyReferenceInput() *string
```

- *Type:* *string

---

##### `KeyReference`<sup>Required</sup> <a name="KeyReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReference"></a>

```go
func KeyReference() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDeveloperConnectConnectionCryptoKeyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig">GoogleDeveloperConnectConnectionCryptoKeyConfig</a>

---


### GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference <a name="GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersionInput">OauthTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersion">OauthTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `OauthTokenSecretVersionInput`<sup>Optional</sup> <a name="OauthTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersionInput"></a>

```go
func OauthTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `OauthTokenSecretVersion`<sup>Required</sup> <a name="OauthTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersion"></a>

```go
func OauthTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

---


### GoogleDeveloperConnectConnectionGithubConfigOutputReference <a name="GoogleDeveloperConnectConnectionGithubConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnectionGithubConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDeveloperConnectConnectionGithubConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.putAuthorizerCredential">PutAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resetAppInstallationId">ResetAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resetAuthorizerCredential">ResetAuthorizerCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerCredential` <a name="PutAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.putAuthorizerCredential"></a>

```go
func PutAuthorizerCredential(value GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

---

##### `ResetAppInstallationId` <a name="ResetAppInstallationId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resetAppInstallationId"></a>

```go
func ResetAppInstallationId()
```

##### `ResetAuthorizerCredential` <a name="ResetAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resetAuthorizerCredential"></a>

```go
func ResetAuthorizerCredential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.installationUri">InstallationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationIdInput">AppInstallationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredentialInput">AuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.githubAppInput">GithubAppInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationId">AppInstallationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.githubApp">GithubApp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredential"></a>

```go
func AuthorizerCredential() GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference</a>

---

##### `InstallationUri`<sup>Required</sup> <a name="InstallationUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.installationUri"></a>

```go
func InstallationUri() *string
```

- *Type:* *string

---

##### `AppInstallationIdInput`<sup>Optional</sup> <a name="AppInstallationIdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationIdInput"></a>

```go
func AppInstallationIdInput() *string
```

- *Type:* *string

---

##### `AuthorizerCredentialInput`<sup>Optional</sup> <a name="AuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredentialInput"></a>

```go
func AuthorizerCredentialInput() GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

---

##### `GithubAppInput`<sup>Optional</sup> <a name="GithubAppInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.githubAppInput"></a>

```go
func GithubAppInput() *string
```

- *Type:* *string

---

##### `AppInstallationId`<sup>Required</sup> <a name="AppInstallationId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationId"></a>

```go
func AppInstallationId() *string
```

- *Type:* *string

---

##### `GithubApp`<sup>Required</sup> <a name="GithubApp" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.githubApp"></a>

```go
func GithubApp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDeveloperConnectConnectionGithubConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a>

---


### GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference <a name="GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppId">ResetAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppInstallationId">ResetAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetPrivateKeySecretVersion">ResetPrivateKeySecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetSslCaCertificate">ResetSslCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetWebhookSecretSecretVersion">ResetWebhookSecretSecretVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig"></a>

```go
func PutServiceDirectoryConfig(value GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---

##### `ResetAppId` <a name="ResetAppId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppId"></a>

```go
func ResetAppId()
```

##### `ResetAppInstallationId` <a name="ResetAppInstallationId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppInstallationId"></a>

```go
func ResetAppInstallationId()
```

##### `ResetPrivateKeySecretVersion` <a name="ResetPrivateKeySecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetPrivateKeySecretVersion"></a>

```go
func ResetPrivateKeySecretVersion()
```

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetServiceDirectoryConfig"></a>

```go
func ResetServiceDirectoryConfig()
```

##### `ResetSslCaCertificate` <a name="ResetSslCaCertificate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetSslCaCertificate"></a>

```go
func ResetSslCaCertificate()
```

##### `ResetWebhookSecretSecretVersion` <a name="ResetWebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetWebhookSecretSecretVersion"></a>

```go
func ResetWebhookSecretSecretVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appSlug">AppSlug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.installationUri">InstallationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serverVersion">ServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationIdInput">AppInstallationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUriInput">HostUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersionInput">PrivateKeySecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificateInput">SslCaCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput">WebhookSecretSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationId">AppInstallationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUri">HostUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersion">PrivateKeySecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificate">SslCaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppSlug`<sup>Required</sup> <a name="AppSlug" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appSlug"></a>

```go
func AppSlug() *string
```

- *Type:* *string

---

##### `InstallationUri`<sup>Required</sup> <a name="InstallationUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.installationUri"></a>

```go
func InstallationUri() *string
```

- *Type:* *string

---

##### `ServerVersion`<sup>Required</sup> <a name="ServerVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serverVersion"></a>

```go
func ServerVersion() *string
```

- *Type:* *string

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfig"></a>

```go
func ServiceDirectoryConfig() GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference</a>

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `AppInstallationIdInput`<sup>Optional</sup> <a name="AppInstallationIdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationIdInput"></a>

```go
func AppInstallationIdInput() *string
```

- *Type:* *string

---

##### `HostUriInput`<sup>Optional</sup> <a name="HostUriInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUriInput"></a>

```go
func HostUriInput() *string
```

- *Type:* *string

---

##### `PrivateKeySecretVersionInput`<sup>Optional</sup> <a name="PrivateKeySecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersionInput"></a>

```go
func PrivateKeySecretVersionInput() *string
```

- *Type:* *string

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```go
func ServiceDirectoryConfigInput() GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---

##### `SslCaCertificateInput`<sup>Optional</sup> <a name="SslCaCertificateInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificateInput"></a>

```go
func SslCaCertificateInput() *string
```

- *Type:* *string

---

##### `WebhookSecretSecretVersionInput`<sup>Optional</sup> <a name="WebhookSecretSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```go
func WebhookSecretSecretVersionInput() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `AppInstallationId`<sup>Required</sup> <a name="AppInstallationId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationId"></a>

```go
func AppInstallationId() *string
```

- *Type:* *string

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUri"></a>

```go
func HostUri() *string
```

- *Type:* *string

---

##### `PrivateKeySecretVersion`<sup>Required</sup> <a name="PrivateKeySecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersion"></a>

```go
func PrivateKeySecretVersion() *string
```

- *Type:* *string

---

##### `SslCaCertificate`<sup>Required</sup> <a name="SslCaCertificate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificate"></a>

```go
func SslCaCertificate() *string
```

- *Type:* *string

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersion"></a>

```go
func WebhookSecretSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDeveloperConnectConnectionGithubEnterpriseConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfig</a>

---


### GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference <a name="GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---


### GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference <a name="GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```go
func UserTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```go
func UserTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

---


### GoogleDeveloperConnectConnectionGitlabConfigOutputReference <a name="GoogleDeveloperConnectConnectionGitlabConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnectionGitlabConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDeveloperConnectConnectionGitlabConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.putAuthorizerCredential">PutAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.putReadAuthorizerCredential">PutReadAuthorizerCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerCredential` <a name="PutAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.putAuthorizerCredential"></a>

```go
func PutAuthorizerCredential(value GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

---

##### `PutReadAuthorizerCredential` <a name="PutReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.putReadAuthorizerCredential"></a>

```go
func PutReadAuthorizerCredential(value GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredentialInput">AuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredentialInput">ReadAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersionInput">WebhookSecretSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig">GoogleDeveloperConnectConnectionGitlabConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredential"></a>

```go
func AuthorizerCredential() GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference</a>

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredential"></a>

```go
func ReadAuthorizerCredential() GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference</a>

---

##### `AuthorizerCredentialInput`<sup>Optional</sup> <a name="AuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredentialInput"></a>

```go
func AuthorizerCredentialInput() GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

---

##### `ReadAuthorizerCredentialInput`<sup>Optional</sup> <a name="ReadAuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```go
func ReadAuthorizerCredentialInput() GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

---

##### `WebhookSecretSecretVersionInput`<sup>Optional</sup> <a name="WebhookSecretSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```go
func WebhookSecretSecretVersionInput() *string
```

- *Type:* *string

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersion"></a>

```go
func WebhookSecretSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDeveloperConnectConnectionGitlabConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig">GoogleDeveloperConnectConnectionGitlabConfig</a>

---


### GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference <a name="GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```go
func UserTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```go
func UserTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

---


### GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```go
func UserTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```go
func UserTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

---


### GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putAuthorizerCredential">PutAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putReadAuthorizerCredential">PutReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetSslCaCertificate">ResetSslCaCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerCredential` <a name="PutAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putAuthorizerCredential"></a>

```go
func PutAuthorizerCredential(value GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

---

##### `PutReadAuthorizerCredential` <a name="PutReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putReadAuthorizerCredential"></a>

```go
func PutReadAuthorizerCredential(value GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

---

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putServiceDirectoryConfig"></a>

```go
func PutServiceDirectoryConfig(value GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

---

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetServiceDirectoryConfig"></a>

```go
func ResetServiceDirectoryConfig()
```

##### `ResetSslCaCertificate` <a name="ResetSslCaCertificate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetSslCaCertificate"></a>

```go
func ResetSslCaCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serverVersion">ServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredentialInput">AuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUriInput">HostUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredentialInput">ReadAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificateInput">SslCaCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput">WebhookSecretSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUri">HostUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificate">SslCaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredential"></a>

```go
func AuthorizerCredential() GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference</a>

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredential"></a>

```go
func ReadAuthorizerCredential() GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference</a>

---

##### `ServerVersion`<sup>Required</sup> <a name="ServerVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serverVersion"></a>

```go
func ServerVersion() *string
```

- *Type:* *string

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfig"></a>

```go
func ServiceDirectoryConfig() GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference</a>

---

##### `AuthorizerCredentialInput`<sup>Optional</sup> <a name="AuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredentialInput"></a>

```go
func AuthorizerCredentialInput() GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

---

##### `HostUriInput`<sup>Optional</sup> <a name="HostUriInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUriInput"></a>

```go
func HostUriInput() *string
```

- *Type:* *string

---

##### `ReadAuthorizerCredentialInput`<sup>Optional</sup> <a name="ReadAuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```go
func ReadAuthorizerCredentialInput() GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```go
func ServiceDirectoryConfigInput() GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

---

##### `SslCaCertificateInput`<sup>Optional</sup> <a name="SslCaCertificateInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificateInput"></a>

```go
func SslCaCertificateInput() *string
```

- *Type:* *string

---

##### `WebhookSecretSecretVersionInput`<sup>Optional</sup> <a name="WebhookSecretSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```go
func WebhookSecretSecretVersionInput() *string
```

- *Type:* *string

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUri"></a>

```go
func HostUri() *string
```

- *Type:* *string

---

##### `SslCaCertificate`<sup>Required</sup> <a name="SslCaCertificate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificate"></a>

```go
func SslCaCertificate() *string
```

- *Type:* *string

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersion"></a>

```go
func WebhookSecretSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDeveloperConnectConnectionGitlabEnterpriseConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfig</a>

---


### GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```go
func UserTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```go
func UserTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

---


### GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

---


### GoogleDeveloperConnectConnectionInstallationStateList <a name="GoogleDeveloperConnectConnectionInstallationStateList" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnectionInstallationStateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDeveloperConnectConnectionInstallationStateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.get"></a>

```go
func Get(index *f64) GoogleDeveloperConnectConnectionInstallationStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleDeveloperConnectConnectionInstallationStateOutputReference <a name="GoogleDeveloperConnectConnectionInstallationStateOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnectionInstallationStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDeveloperConnectConnectionInstallationStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.actionUri">ActionUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.stage">Stage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationState">GoogleDeveloperConnectConnectionInstallationState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionUri`<sup>Required</sup> <a name="ActionUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.actionUri"></a>

```go
func ActionUri() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.stage"></a>

```go
func Stage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDeveloperConnectConnectionInstallationState
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationState">GoogleDeveloperConnectConnectionInstallationState</a>

---


### GoogleDeveloperConnectConnectionTimeoutsOutputReference <a name="GoogleDeveloperConnectConnectionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledeveloperconnectconnection"

googledeveloperconnectconnection.NewGoogleDeveloperConnectConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDeveloperConnectConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



