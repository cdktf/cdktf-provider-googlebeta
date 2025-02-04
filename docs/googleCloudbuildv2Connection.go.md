# `googleCloudbuildv2Connection` Submodule <a name="`googleCloudbuildv2Connection` Submodule" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudbuildv2Connection <a name="GoogleCloudbuildv2Connection" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection google_cloudbuildv2_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.NewGoogleCloudbuildv2Connection(scope Construct, id *string, config GoogleCloudbuildv2ConnectionConfig) GoogleCloudbuildv2Connection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig">GoogleCloudbuildv2ConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig">GoogleCloudbuildv2ConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.putBitbucketCloudConfig">PutBitbucketCloudConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.putBitbucketDataCenterConfig">PutBitbucketDataCenterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.putGithubConfig">PutGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.putGithubEnterpriseConfig">PutGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.putGitlabConfig">PutGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.resetBitbucketCloudConfig">ResetBitbucketCloudConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.resetBitbucketDataCenterConfig">ResetBitbucketDataCenterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.resetGithubConfig">ResetGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.resetGithubEnterpriseConfig">ResetGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.resetGitlabConfig">ResetGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBitbucketCloudConfig` <a name="PutBitbucketCloudConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.putBitbucketCloudConfig"></a>

```go
func PutBitbucketCloudConfig(value GoogleCloudbuildv2ConnectionBitbucketCloudConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.putBitbucketCloudConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfig">GoogleCloudbuildv2ConnectionBitbucketCloudConfig</a>

---

##### `PutBitbucketDataCenterConfig` <a name="PutBitbucketDataCenterConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.putBitbucketDataCenterConfig"></a>

```go
func PutBitbucketDataCenterConfig(value GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.putBitbucketDataCenterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig</a>

---

##### `PutGithubConfig` <a name="PutGithubConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.putGithubConfig"></a>

```go
func PutGithubConfig(value GoogleCloudbuildv2ConnectionGithubConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.putGithubConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfig">GoogleCloudbuildv2ConnectionGithubConfig</a>

---

##### `PutGithubEnterpriseConfig` <a name="PutGithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.putGithubEnterpriseConfig"></a>

```go
func PutGithubEnterpriseConfig(value GoogleCloudbuildv2ConnectionGithubEnterpriseConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.putGithubEnterpriseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig">GoogleCloudbuildv2ConnectionGithubEnterpriseConfig</a>

---

##### `PutGitlabConfig` <a name="PutGitlabConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.putGitlabConfig"></a>

```go
func PutGitlabConfig(value GoogleCloudbuildv2ConnectionGitlabConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.putGitlabConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfig">GoogleCloudbuildv2ConnectionGitlabConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCloudbuildv2ConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeouts">GoogleCloudbuildv2ConnectionTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetBitbucketCloudConfig` <a name="ResetBitbucketCloudConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.resetBitbucketCloudConfig"></a>

```go
func ResetBitbucketCloudConfig()
```

##### `ResetBitbucketDataCenterConfig` <a name="ResetBitbucketDataCenterConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.resetBitbucketDataCenterConfig"></a>

```go
func ResetBitbucketDataCenterConfig()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetGithubConfig` <a name="ResetGithubConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.resetGithubConfig"></a>

```go
func ResetGithubConfig()
```

##### `ResetGithubEnterpriseConfig` <a name="ResetGithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.resetGithubEnterpriseConfig"></a>

```go
func ResetGithubEnterpriseConfig()
```

##### `ResetGitlabConfig` <a name="ResetGitlabConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.resetGitlabConfig"></a>

```go
func ResetGitlabConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudbuildv2Connection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.GoogleCloudbuildv2Connection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.GoogleCloudbuildv2Connection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.GoogleCloudbuildv2Connection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.GoogleCloudbuildv2Connection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleCloudbuildv2Connection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleCloudbuildv2Connection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleCloudbuildv2Connection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudbuildv2Connection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.bitbucketCloudConfig">BitbucketCloudConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference">GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.bitbucketDataCenterConfig">BitbucketDataCenterConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.githubConfig">GithubConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference">GoogleCloudbuildv2ConnectionGithubConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference">GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.gitlabConfig">GitlabConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference">GoogleCloudbuildv2ConnectionGitlabConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.installationState">InstallationState</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList">GoogleCloudbuildv2ConnectionInstallationStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference">GoogleCloudbuildv2ConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.bitbucketCloudConfigInput">BitbucketCloudConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfig">GoogleCloudbuildv2ConnectionBitbucketCloudConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.bitbucketDataCenterConfigInput">BitbucketDataCenterConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.githubConfigInput">GithubConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfig">GoogleCloudbuildv2ConnectionGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.githubEnterpriseConfigInput">GithubEnterpriseConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig">GoogleCloudbuildv2ConnectionGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.gitlabConfigInput">GitlabConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfig">GoogleCloudbuildv2ConnectionGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BitbucketCloudConfig`<sup>Required</sup> <a name="BitbucketCloudConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.bitbucketCloudConfig"></a>

```go
func BitbucketCloudConfig() GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference">GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference</a>

---

##### `BitbucketDataCenterConfig`<sup>Required</sup> <a name="BitbucketDataCenterConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.bitbucketDataCenterConfig"></a>

```go
func BitbucketDataCenterConfig() GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `GithubConfig`<sup>Required</sup> <a name="GithubConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.githubConfig"></a>

```go
func GithubConfig() GoogleCloudbuildv2ConnectionGithubConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference">GoogleCloudbuildv2ConnectionGithubConfigOutputReference</a>

---

##### `GithubEnterpriseConfig`<sup>Required</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.githubEnterpriseConfig"></a>

```go
func GithubEnterpriseConfig() GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference">GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference</a>

---

##### `GitlabConfig`<sup>Required</sup> <a name="GitlabConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.gitlabConfig"></a>

```go
func GitlabConfig() GoogleCloudbuildv2ConnectionGitlabConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference">GoogleCloudbuildv2ConnectionGitlabConfigOutputReference</a>

---

##### `InstallationState`<sup>Required</sup> <a name="InstallationState" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.installationState"></a>

```go
func InstallationState() GoogleCloudbuildv2ConnectionInstallationStateList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList">GoogleCloudbuildv2ConnectionInstallationStateList</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.timeouts"></a>

```go
func Timeouts() GoogleCloudbuildv2ConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference">GoogleCloudbuildv2ConnectionTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BitbucketCloudConfigInput`<sup>Optional</sup> <a name="BitbucketCloudConfigInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.bitbucketCloudConfigInput"></a>

```go
func BitbucketCloudConfigInput() GoogleCloudbuildv2ConnectionBitbucketCloudConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfig">GoogleCloudbuildv2ConnectionBitbucketCloudConfig</a>

---

##### `BitbucketDataCenterConfigInput`<sup>Optional</sup> <a name="BitbucketDataCenterConfigInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.bitbucketDataCenterConfigInput"></a>

```go
func BitbucketDataCenterConfigInput() GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig</a>

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `GithubConfigInput`<sup>Optional</sup> <a name="GithubConfigInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.githubConfigInput"></a>

```go
func GithubConfigInput() GoogleCloudbuildv2ConnectionGithubConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfig">GoogleCloudbuildv2ConnectionGithubConfig</a>

---

##### `GithubEnterpriseConfigInput`<sup>Optional</sup> <a name="GithubEnterpriseConfigInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.githubEnterpriseConfigInput"></a>

```go
func GithubEnterpriseConfigInput() GoogleCloudbuildv2ConnectionGithubEnterpriseConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig">GoogleCloudbuildv2ConnectionGithubEnterpriseConfig</a>

---

##### `GitlabConfigInput`<sup>Optional</sup> <a name="GitlabConfigInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.gitlabConfigInput"></a>

```go
func GitlabConfigInput() GoogleCloudbuildv2ConnectionGitlabConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfig">GoogleCloudbuildv2ConnectionGitlabConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2Connection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudbuildv2ConnectionBitbucketCloudConfig <a name="GoogleCloudbuildv2ConnectionBitbucketCloudConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

&googlecloudbuildv2connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfig {
	AuthorizerCredential: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential,
	ReadAuthorizerCredential: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential,
	WebhookSecretSecretVersion: *string,
	Workspace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfig.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfig.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfig.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as 'projects/* /secrets/* /versions/*'. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfig.property.workspace">Workspace</a></code> | <code>*string</code> | The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform. |

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfig.property.authorizerCredential"></a>

```go
AuthorizerCredential GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#authorizer_credential GoogleCloudbuildv2Connection#authorizer_credential}

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfig.property.readAuthorizerCredential"></a>

```go
ReadAuthorizerCredential GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#read_authorizer_credential GoogleCloudbuildv2Connection#read_authorizer_credential}

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfig.property.webhookSecretSecretVersion"></a>

```go
WebhookSecretSecretVersion *string
```

- *Type:* *string

Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#webhook_secret_secret_version GoogleCloudbuildv2Connection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfig.property.workspace"></a>

```go
Workspace *string
```

- *Type:* *string

The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#workspace GoogleCloudbuildv2Connection#workspace}

---

### GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential <a name="GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

&googlecloudbuildv2connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential {
	UserTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```go
UserTokenSecretVersion *string
```

- *Type:* *string

Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#user_token_secret_version GoogleCloudbuildv2Connection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential <a name="GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

&googlecloudbuildv2connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential {
	UserTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```go
UserTokenSecretVersion *string
```

- *Type:* *string

Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#user_token_secret_version GoogleCloudbuildv2Connection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig <a name="GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

&googlecloudbuildv2connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig {
	AuthorizerCredential: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential,
	HostUri: *string,
	ReadAuthorizerCredential: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential,
	WebhookSecretSecretVersion: *string,
	ServiceDirectoryConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig,
	SslCa: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig.property.hostUri">HostUri</a></code> | <code>*string</code> | The URI of the Bitbucket Data Center host this connection is for. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as 'projects/* /secrets/* /versions/*'. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig.property.sslCa">SslCa</a></code> | <code>*string</code> | SSL certificate to use for requests to the Bitbucket Data Center. |

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig.property.authorizerCredential"></a>

```go
AuthorizerCredential GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#authorizer_credential GoogleCloudbuildv2Connection#authorizer_credential}

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig.property.hostUri"></a>

```go
HostUri *string
```

- *Type:* *string

The URI of the Bitbucket Data Center host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#host_uri GoogleCloudbuildv2Connection#host_uri}

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig.property.readAuthorizerCredential"></a>

```go
ReadAuthorizerCredential GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#read_authorizer_credential GoogleCloudbuildv2Connection#read_authorizer_credential}

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig.property.webhookSecretSecretVersion"></a>

```go
WebhookSecretSecretVersion *string
```

- *Type:* *string

Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#webhook_secret_secret_version GoogleCloudbuildv2Connection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig.property.serviceDirectoryConfig"></a>

```go
ServiceDirectoryConfig GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#service_directory_config GoogleCloudbuildv2Connection#service_directory_config}

---

##### `SslCa`<sup>Optional</sup> <a name="SslCa" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig.property.sslCa"></a>

```go
SslCa *string
```

- *Type:* *string

SSL certificate to use for requests to the Bitbucket Data Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#ssl_ca GoogleCloudbuildv2Connection#ssl_ca}

---

### GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential <a name="GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

&googlecloudbuildv2connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential {
	UserTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```go
UserTokenSecretVersion *string
```

- *Type:* *string

Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#user_token_secret_version GoogleCloudbuildv2Connection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential <a name="GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

&googlecloudbuildv2connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential {
	UserTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```go
UserTokenSecretVersion *string
```

- *Type:* *string

Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#user_token_secret_version GoogleCloudbuildv2Connection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig <a name="GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

&googlecloudbuildv2connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig {
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig.property.service">Service</a></code> | <code>*string</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#service GoogleCloudbuildv2Connection#service}

---

### GoogleCloudbuildv2ConnectionConfig <a name="GoogleCloudbuildv2ConnectionConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

&googlecloudbuildv2connection.GoogleCloudbuildv2ConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	Annotations: *map[string]*string,
	BitbucketCloudConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfig,
	BitbucketDataCenterConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig,
	Disabled: interface{},
	GithubConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfig,
	GithubEnterpriseConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig,
	GitlabConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfig,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.name">Name</a></code> | <code>*string</code> | Immutable. The resource name of the connection. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.bitbucketCloudConfig">BitbucketCloudConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfig">GoogleCloudbuildv2ConnectionBitbucketCloudConfig</a></code> | bitbucket_cloud_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.bitbucketDataCenterConfig">BitbucketDataCenterConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig</a></code> | bitbucket_data_center_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | If disabled is set to true, functionality is disabled for this connection. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.githubConfig">GithubConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfig">GoogleCloudbuildv2ConnectionGithubConfig</a></code> | github_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig">GoogleCloudbuildv2ConnectionGithubEnterpriseConfig</a></code> | github_enterprise_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.gitlabConfig">GitlabConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfig">GoogleCloudbuildv2ConnectionGitlabConfig</a></code> | gitlab_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#id GoogleCloudbuildv2Connection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#project GoogleCloudbuildv2Connection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeouts">GoogleCloudbuildv2ConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#location GoogleCloudbuildv2Connection#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Immutable. The resource name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#name GoogleCloudbuildv2Connection#name}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#annotations GoogleCloudbuildv2Connection#annotations}

---

##### `BitbucketCloudConfig`<sup>Optional</sup> <a name="BitbucketCloudConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.bitbucketCloudConfig"></a>

```go
BitbucketCloudConfig GoogleCloudbuildv2ConnectionBitbucketCloudConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfig">GoogleCloudbuildv2ConnectionBitbucketCloudConfig</a>

bitbucket_cloud_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#bitbucket_cloud_config GoogleCloudbuildv2Connection#bitbucket_cloud_config}

---

##### `BitbucketDataCenterConfig`<sup>Optional</sup> <a name="BitbucketDataCenterConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.bitbucketDataCenterConfig"></a>

```go
BitbucketDataCenterConfig GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig</a>

bitbucket_data_center_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#bitbucket_data_center_config GoogleCloudbuildv2Connection#bitbucket_data_center_config}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

If disabled is set to true, functionality is disabled for this connection.

Repository based API methods and webhooks processing for repositories in this connection will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#disabled GoogleCloudbuildv2Connection#disabled}

---

##### `GithubConfig`<sup>Optional</sup> <a name="GithubConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.githubConfig"></a>

```go
GithubConfig GoogleCloudbuildv2ConnectionGithubConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfig">GoogleCloudbuildv2ConnectionGithubConfig</a>

github_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#github_config GoogleCloudbuildv2Connection#github_config}

---

##### `GithubEnterpriseConfig`<sup>Optional</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.githubEnterpriseConfig"></a>

```go
GithubEnterpriseConfig GoogleCloudbuildv2ConnectionGithubEnterpriseConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig">GoogleCloudbuildv2ConnectionGithubEnterpriseConfig</a>

github_enterprise_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#github_enterprise_config GoogleCloudbuildv2Connection#github_enterprise_config}

---

##### `GitlabConfig`<sup>Optional</sup> <a name="GitlabConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.gitlabConfig"></a>

```go
GitlabConfig GoogleCloudbuildv2ConnectionGitlabConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfig">GoogleCloudbuildv2ConnectionGitlabConfig</a>

gitlab_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#gitlab_config GoogleCloudbuildv2Connection#gitlab_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#id GoogleCloudbuildv2Connection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#project GoogleCloudbuildv2Connection#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionConfig.property.timeouts"></a>

```go
Timeouts GoogleCloudbuildv2ConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeouts">GoogleCloudbuildv2ConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#timeouts GoogleCloudbuildv2Connection#timeouts}

---

### GoogleCloudbuildv2ConnectionGithubConfig <a name="GoogleCloudbuildv2ConnectionGithubConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

&googlecloudbuildv2connection.GoogleCloudbuildv2ConnectionGithubConfig {
	AppInstallationId: *f64,
	AuthorizerCredential: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfig.property.appInstallationId">AppInstallationId</a></code> | <code>*f64</code> | GitHub App installation id. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfig.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential</a></code> | authorizer_credential block. |

---

##### `AppInstallationId`<sup>Optional</sup> <a name="AppInstallationId" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfig.property.appInstallationId"></a>

```go
AppInstallationId *f64
```

- *Type:* *f64

GitHub App installation id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#app_installation_id GoogleCloudbuildv2Connection#app_installation_id}

---

##### `AuthorizerCredential`<sup>Optional</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfig.property.authorizerCredential"></a>

```go
AuthorizerCredential GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#authorizer_credential GoogleCloudbuildv2Connection#authorizer_credential}

---

### GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential <a name="GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

&googlecloudbuildv2connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential {
	OauthTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential.property.oauthTokenSecretVersion">OauthTokenSecretVersion</a></code> | <code>*string</code> | A SecretManager resource containing the OAuth token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `OauthTokenSecretVersion`<sup>Optional</sup> <a name="OauthTokenSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential.property.oauthTokenSecretVersion"></a>

```go
OauthTokenSecretVersion *string
```

- *Type:* *string

A SecretManager resource containing the OAuth token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#oauth_token_secret_version GoogleCloudbuildv2Connection#oauth_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleCloudbuildv2ConnectionGithubEnterpriseConfig <a name="GoogleCloudbuildv2ConnectionGithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

&googlecloudbuildv2connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig {
	HostUri: *string,
	AppId: *f64,
	AppInstallationId: *f64,
	AppSlug: *string,
	PrivateKeySecretVersion: *string,
	ServiceDirectoryConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig,
	SslCa: *string,
	WebhookSecretSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig.property.hostUri">HostUri</a></code> | <code>*string</code> | Required. The URI of the GitHub Enterprise host this connection is for. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig.property.appId">AppId</a></code> | <code>*f64</code> | Id of the GitHub App created from the manifest. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig.property.appInstallationId">AppInstallationId</a></code> | <code>*f64</code> | ID of the installation of the GitHub App. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig.property.appSlug">AppSlug</a></code> | <code>*string</code> | The URL-friendly name of the GitHub App. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig.property.privateKeySecretVersion">PrivateKeySecretVersion</a></code> | <code>*string</code> | SecretManager resource containing the private key of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig.property.sslCa">SslCa</a></code> | <code>*string</code> | SSL certificate to use for requests to GitHub Enterprise. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | SecretManager resource containing the webhook secret of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'. |

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig.property.hostUri"></a>

```go
HostUri *string
```

- *Type:* *string

Required. The URI of the GitHub Enterprise host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#host_uri GoogleCloudbuildv2Connection#host_uri}

---

##### `AppId`<sup>Optional</sup> <a name="AppId" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig.property.appId"></a>

```go
AppId *f64
```

- *Type:* *f64

Id of the GitHub App created from the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#app_id GoogleCloudbuildv2Connection#app_id}

---

##### `AppInstallationId`<sup>Optional</sup> <a name="AppInstallationId" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig.property.appInstallationId"></a>

```go
AppInstallationId *f64
```

- *Type:* *f64

ID of the installation of the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#app_installation_id GoogleCloudbuildv2Connection#app_installation_id}

---

##### `AppSlug`<sup>Optional</sup> <a name="AppSlug" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig.property.appSlug"></a>

```go
AppSlug *string
```

- *Type:* *string

The URL-friendly name of the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#app_slug GoogleCloudbuildv2Connection#app_slug}

---

##### `PrivateKeySecretVersion`<sup>Optional</sup> <a name="PrivateKeySecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig.property.privateKeySecretVersion"></a>

```go
PrivateKeySecretVersion *string
```

- *Type:* *string

SecretManager resource containing the private key of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#private_key_secret_version GoogleCloudbuildv2Connection#private_key_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig.property.serviceDirectoryConfig"></a>

```go
ServiceDirectoryConfig GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#service_directory_config GoogleCloudbuildv2Connection#service_directory_config}

---

##### `SslCa`<sup>Optional</sup> <a name="SslCa" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig.property.sslCa"></a>

```go
SslCa *string
```

- *Type:* *string

SSL certificate to use for requests to GitHub Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#ssl_ca GoogleCloudbuildv2Connection#ssl_ca}

---

##### `WebhookSecretSecretVersion`<sup>Optional</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig.property.webhookSecretSecretVersion"></a>

```go
WebhookSecretSecretVersion *string
```

- *Type:* *string

SecretManager resource containing the webhook secret of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#webhook_secret_secret_version GoogleCloudbuildv2Connection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig <a name="GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

&googlecloudbuildv2connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig {
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig.property.service">Service</a></code> | <code>*string</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#service GoogleCloudbuildv2Connection#service}

---

### GoogleCloudbuildv2ConnectionGitlabConfig <a name="GoogleCloudbuildv2ConnectionGitlabConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

&googlecloudbuildv2connection.GoogleCloudbuildv2ConnectionGitlabConfig {
	AuthorizerCredential: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential,
	ReadAuthorizerCredential: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential,
	WebhookSecretSecretVersion: *string,
	HostUri: *string,
	ServiceDirectoryConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig,
	SslCa: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfig.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfig.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfig.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | Required. Immutable. SecretManager resource containing the webhook secret of a GitLab Enterprise project, formatted as 'projects/* /secrets/* /versions/*'. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfig.property.hostUri">HostUri</a></code> | <code>*string</code> | The URI of the GitLab Enterprise host this connection is for. If not specified, the default value is https://gitlab.com. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfig.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfig.property.sslCa">SslCa</a></code> | <code>*string</code> | SSL certificate to use for requests to GitLab Enterprise. |

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfig.property.authorizerCredential"></a>

```go
AuthorizerCredential GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#authorizer_credential GoogleCloudbuildv2Connection#authorizer_credential}

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfig.property.readAuthorizerCredential"></a>

```go
ReadAuthorizerCredential GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#read_authorizer_credential GoogleCloudbuildv2Connection#read_authorizer_credential}

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfig.property.webhookSecretSecretVersion"></a>

```go
WebhookSecretSecretVersion *string
```

- *Type:* *string

Required. Immutable. SecretManager resource containing the webhook secret of a GitLab Enterprise project, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#webhook_secret_secret_version GoogleCloudbuildv2Connection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `HostUri`<sup>Optional</sup> <a name="HostUri" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfig.property.hostUri"></a>

```go
HostUri *string
```

- *Type:* *string

The URI of the GitLab Enterprise host this connection is for. If not specified, the default value is https://gitlab.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#host_uri GoogleCloudbuildv2Connection#host_uri}

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfig.property.serviceDirectoryConfig"></a>

```go
ServiceDirectoryConfig GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#service_directory_config GoogleCloudbuildv2Connection#service_directory_config}

---

##### `SslCa`<sup>Optional</sup> <a name="SslCa" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfig.property.sslCa"></a>

```go
SslCa *string
```

- *Type:* *string

SSL certificate to use for requests to GitLab Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#ssl_ca GoogleCloudbuildv2Connection#ssl_ca}

---

### GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential <a name="GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

&googlecloudbuildv2connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential {
	UserTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```go
UserTokenSecretVersion *string
```

- *Type:* *string

Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#user_token_secret_version GoogleCloudbuildv2Connection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential <a name="GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

&googlecloudbuildv2connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential {
	UserTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```go
UserTokenSecretVersion *string
```

- *Type:* *string

Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#user_token_secret_version GoogleCloudbuildv2Connection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig <a name="GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

&googlecloudbuildv2connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig {
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig.property.service">Service</a></code> | <code>*string</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#service GoogleCloudbuildv2Connection#service}

---

### GoogleCloudbuildv2ConnectionInstallationState <a name="GoogleCloudbuildv2ConnectionInstallationState" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationState.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

&googlecloudbuildv2connection.GoogleCloudbuildv2ConnectionInstallationState {

}
```


### GoogleCloudbuildv2ConnectionTimeouts <a name="GoogleCloudbuildv2ConnectionTimeouts" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

&googlecloudbuildv2connection.GoogleCloudbuildv2ConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#create GoogleCloudbuildv2Connection#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#delete GoogleCloudbuildv2Connection#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#update GoogleCloudbuildv2Connection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#create GoogleCloudbuildv2Connection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#delete GoogleCloudbuildv2Connection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudbuildv2_connection#update GoogleCloudbuildv2Connection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference <a name="GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.NewGoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```go
func UserTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```go
func UserTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential</a>

---


### GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference <a name="GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.NewGoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.putAuthorizerCredential">PutAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.putReadAuthorizerCredential">PutReadAuthorizerCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerCredential` <a name="PutAuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.putAuthorizerCredential"></a>

```go
func PutAuthorizerCredential(value GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential</a>

---

##### `PutReadAuthorizerCredential` <a name="PutReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.putReadAuthorizerCredential"></a>

```go
func PutReadAuthorizerCredential(value GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference">GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference">GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.authorizerCredentialInput">AuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredentialInput">ReadAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersionInput">WebhookSecretSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.workspaceInput">WorkspaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.workspace">Workspace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfig">GoogleCloudbuildv2ConnectionBitbucketCloudConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.authorizerCredential"></a>

```go
func AuthorizerCredential() GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference">GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference</a>

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredential"></a>

```go
func ReadAuthorizerCredential() GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference">GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference</a>

---

##### `AuthorizerCredentialInput`<sup>Optional</sup> <a name="AuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.authorizerCredentialInput"></a>

```go
func AuthorizerCredentialInput() GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential</a>

---

##### `ReadAuthorizerCredentialInput`<sup>Optional</sup> <a name="ReadAuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```go
func ReadAuthorizerCredentialInput() GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

---

##### `WebhookSecretSecretVersionInput`<sup>Optional</sup> <a name="WebhookSecretSecretVersionInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```go
func WebhookSecretSecretVersionInput() *string
```

- *Type:* *string

---

##### `WorkspaceInput`<sup>Optional</sup> <a name="WorkspaceInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.workspaceInput"></a>

```go
func WorkspaceInput() *string
```

- *Type:* *string

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersion"></a>

```go
func WebhookSecretSecretVersion() *string
```

- *Type:* *string

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.workspace"></a>

```go
func Workspace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildv2ConnectionBitbucketCloudConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfig">GoogleCloudbuildv2ConnectionBitbucketCloudConfig</a>

---


### GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference <a name="GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.NewGoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```go
func UserTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```go
func UserTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

---


### GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference <a name="GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.NewGoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```go
func UserTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```go
func UserTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

---


### GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference <a name="GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.NewGoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putAuthorizerCredential">PutAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putReadAuthorizerCredential">PutReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.resetSslCa">ResetSslCa</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerCredential` <a name="PutAuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putAuthorizerCredential"></a>

```go
func PutAuthorizerCredential(value GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

---

##### `PutReadAuthorizerCredential` <a name="PutReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putReadAuthorizerCredential"></a>

```go
func PutReadAuthorizerCredential(value GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

---

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putServiceDirectoryConfig"></a>

```go
func PutServiceDirectoryConfig(value GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

---

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.resetServiceDirectoryConfig"></a>

```go
func ResetServiceDirectoryConfig()
```

##### `ResetSslCa` <a name="ResetSslCa" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.resetSslCa"></a>

```go
func ResetSslCa()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.serverVersion">ServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredentialInput">AuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.hostUriInput">HostUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredentialInput">ReadAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.sslCaInput">SslCaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersionInput">WebhookSecretSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.hostUri">HostUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.sslCa">SslCa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredential"></a>

```go
func AuthorizerCredential() GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference</a>

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredential"></a>

```go
func ReadAuthorizerCredential() GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference</a>

---

##### `ServerVersion`<sup>Required</sup> <a name="ServerVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.serverVersion"></a>

```go
func ServerVersion() *string
```

- *Type:* *string

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfig"></a>

```go
func ServiceDirectoryConfig() GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference</a>

---

##### `AuthorizerCredentialInput`<sup>Optional</sup> <a name="AuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredentialInput"></a>

```go
func AuthorizerCredentialInput() GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

---

##### `HostUriInput`<sup>Optional</sup> <a name="HostUriInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.hostUriInput"></a>

```go
func HostUriInput() *string
```

- *Type:* *string

---

##### `ReadAuthorizerCredentialInput`<sup>Optional</sup> <a name="ReadAuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```go
func ReadAuthorizerCredentialInput() GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```go
func ServiceDirectoryConfigInput() GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

---

##### `SslCaInput`<sup>Optional</sup> <a name="SslCaInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.sslCaInput"></a>

```go
func SslCaInput() *string
```

- *Type:* *string

---

##### `WebhookSecretSecretVersionInput`<sup>Optional</sup> <a name="WebhookSecretSecretVersionInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```go
func WebhookSecretSecretVersionInput() *string
```

- *Type:* *string

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.hostUri"></a>

```go
func HostUri() *string
```

- *Type:* *string

---

##### `SslCa`<sup>Required</sup> <a name="SslCa" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.sslCa"></a>

```go
func SslCa() *string
```

- *Type:* *string

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersion"></a>

```go
func WebhookSecretSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig</a>

---


### GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference <a name="GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.NewGoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```go
func UserTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```go
func UserTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

---


### GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference <a name="GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.NewGoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig">GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

---


### GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference <a name="GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.NewGoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.resetOauthTokenSecretVersion">ResetOauthTokenSecretVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOauthTokenSecretVersion` <a name="ResetOauthTokenSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.resetOauthTokenSecretVersion"></a>

```go
func ResetOauthTokenSecretVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersionInput">OauthTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersion">OauthTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `OauthTokenSecretVersionInput`<sup>Optional</sup> <a name="OauthTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersionInput"></a>

```go
func OauthTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `OauthTokenSecretVersion`<sup>Required</sup> <a name="OauthTokenSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersion"></a>

```go
func OauthTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential</a>

---


### GoogleCloudbuildv2ConnectionGithubConfigOutputReference <a name="GoogleCloudbuildv2ConnectionGithubConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.NewGoogleCloudbuildv2ConnectionGithubConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildv2ConnectionGithubConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.putAuthorizerCredential">PutAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.resetAppInstallationId">ResetAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.resetAuthorizerCredential">ResetAuthorizerCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerCredential` <a name="PutAuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.putAuthorizerCredential"></a>

```go
func PutAuthorizerCredential(value GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential</a>

---

##### `ResetAppInstallationId` <a name="ResetAppInstallationId" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.resetAppInstallationId"></a>

```go
func ResetAppInstallationId()
```

##### `ResetAuthorizerCredential` <a name="ResetAuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.resetAuthorizerCredential"></a>

```go
func ResetAuthorizerCredential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference">GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.property.appInstallationIdInput">AppInstallationIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.property.authorizerCredentialInput">AuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.property.appInstallationId">AppInstallationId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfig">GoogleCloudbuildv2ConnectionGithubConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.property.authorizerCredential"></a>

```go
func AuthorizerCredential() GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference">GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference</a>

---

##### `AppInstallationIdInput`<sup>Optional</sup> <a name="AppInstallationIdInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.property.appInstallationIdInput"></a>

```go
func AppInstallationIdInput() *f64
```

- *Type:* *f64

---

##### `AuthorizerCredentialInput`<sup>Optional</sup> <a name="AuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.property.authorizerCredentialInput"></a>

```go
func AuthorizerCredentialInput() GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential</a>

---

##### `AppInstallationId`<sup>Required</sup> <a name="AppInstallationId" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.property.appInstallationId"></a>

```go
func AppInstallationId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildv2ConnectionGithubConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubConfig">GoogleCloudbuildv2ConnectionGithubConfig</a>

---


### GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference <a name="GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.NewGoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppId">ResetAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppInstallationId">ResetAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppSlug">ResetAppSlug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetPrivateKeySecretVersion">ResetPrivateKeySecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetSslCa">ResetSslCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetWebhookSecretSecretVersion">ResetWebhookSecretSecretVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig"></a>

```go
func PutServiceDirectoryConfig(value GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---

##### `ResetAppId` <a name="ResetAppId" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppId"></a>

```go
func ResetAppId()
```

##### `ResetAppInstallationId` <a name="ResetAppInstallationId" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppInstallationId"></a>

```go
func ResetAppInstallationId()
```

##### `ResetAppSlug` <a name="ResetAppSlug" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppSlug"></a>

```go
func ResetAppSlug()
```

##### `ResetPrivateKeySecretVersion` <a name="ResetPrivateKeySecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetPrivateKeySecretVersion"></a>

```go
func ResetPrivateKeySecretVersion()
```

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetServiceDirectoryConfig"></a>

```go
func ResetServiceDirectoryConfig()
```

##### `ResetSslCa` <a name="ResetSslCa" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetSslCa"></a>

```go
func ResetSslCa()
```

##### `ResetWebhookSecretSecretVersion` <a name="ResetWebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetWebhookSecretSecretVersion"></a>

```go
func ResetWebhookSecretSecretVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference">GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appIdInput">AppIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appInstallationIdInput">AppInstallationIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appSlugInput">AppSlugInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.hostUriInput">HostUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersionInput">PrivateKeySecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.sslCaInput">SslCaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput">WebhookSecretSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appId">AppId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appInstallationId">AppInstallationId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appSlug">AppSlug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.hostUri">HostUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersion">PrivateKeySecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.sslCa">SslCa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig">GoogleCloudbuildv2ConnectionGithubEnterpriseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfig"></a>

```go
func ServiceDirectoryConfig() GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference">GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference</a>

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appIdInput"></a>

```go
func AppIdInput() *f64
```

- *Type:* *f64

---

##### `AppInstallationIdInput`<sup>Optional</sup> <a name="AppInstallationIdInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appInstallationIdInput"></a>

```go
func AppInstallationIdInput() *f64
```

- *Type:* *f64

---

##### `AppSlugInput`<sup>Optional</sup> <a name="AppSlugInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appSlugInput"></a>

```go
func AppSlugInput() *string
```

- *Type:* *string

---

##### `HostUriInput`<sup>Optional</sup> <a name="HostUriInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.hostUriInput"></a>

```go
func HostUriInput() *string
```

- *Type:* *string

---

##### `PrivateKeySecretVersionInput`<sup>Optional</sup> <a name="PrivateKeySecretVersionInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersionInput"></a>

```go
func PrivateKeySecretVersionInput() *string
```

- *Type:* *string

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```go
func ServiceDirectoryConfigInput() GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---

##### `SslCaInput`<sup>Optional</sup> <a name="SslCaInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.sslCaInput"></a>

```go
func SslCaInput() *string
```

- *Type:* *string

---

##### `WebhookSecretSecretVersionInput`<sup>Optional</sup> <a name="WebhookSecretSecretVersionInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```go
func WebhookSecretSecretVersionInput() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appId"></a>

```go
func AppId() *f64
```

- *Type:* *f64

---

##### `AppInstallationId`<sup>Required</sup> <a name="AppInstallationId" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appInstallationId"></a>

```go
func AppInstallationId() *f64
```

- *Type:* *f64

---

##### `AppSlug`<sup>Required</sup> <a name="AppSlug" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appSlug"></a>

```go
func AppSlug() *string
```

- *Type:* *string

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.hostUri"></a>

```go
func HostUri() *string
```

- *Type:* *string

---

##### `PrivateKeySecretVersion`<sup>Required</sup> <a name="PrivateKeySecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersion"></a>

```go
func PrivateKeySecretVersion() *string
```

- *Type:* *string

---

##### `SslCa`<sup>Required</sup> <a name="SslCa" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.sslCa"></a>

```go
func SslCa() *string
```

- *Type:* *string

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersion"></a>

```go
func WebhookSecretSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildv2ConnectionGithubEnterpriseConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfig">GoogleCloudbuildv2ConnectionGithubEnterpriseConfig</a>

---


### GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference <a name="GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.NewGoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---


### GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference <a name="GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.NewGoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```go
func UserTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```go
func UserTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a>

---


### GoogleCloudbuildv2ConnectionGitlabConfigOutputReference <a name="GoogleCloudbuildv2ConnectionGitlabConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.NewGoogleCloudbuildv2ConnectionGitlabConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildv2ConnectionGitlabConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.putAuthorizerCredential">PutAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.putReadAuthorizerCredential">PutReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.resetHostUri">ResetHostUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.resetSslCa">ResetSslCa</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerCredential` <a name="PutAuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.putAuthorizerCredential"></a>

```go
func PutAuthorizerCredential(value GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a>

---

##### `PutReadAuthorizerCredential` <a name="PutReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.putReadAuthorizerCredential"></a>

```go
func PutReadAuthorizerCredential(value GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a>

---

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.putServiceDirectoryConfig"></a>

```go
func PutServiceDirectoryConfig(value GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a>

---

##### `ResetHostUri` <a name="ResetHostUri" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.resetHostUri"></a>

```go
func ResetHostUri()
```

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.resetServiceDirectoryConfig"></a>

```go
func ResetServiceDirectoryConfig()
```

##### `ResetSslCa` <a name="ResetSslCa" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.resetSslCa"></a>

```go
func ResetSslCa()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference">GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference">GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.serverVersion">ServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference">GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.authorizerCredentialInput">AuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.hostUriInput">HostUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.readAuthorizerCredentialInput">ReadAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.sslCaInput">SslCaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersionInput">WebhookSecretSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.hostUri">HostUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.sslCa">SslCa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfig">GoogleCloudbuildv2ConnectionGitlabConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.authorizerCredential"></a>

```go
func AuthorizerCredential() GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference">GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference</a>

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.readAuthorizerCredential"></a>

```go
func ReadAuthorizerCredential() GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference">GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference</a>

---

##### `ServerVersion`<sup>Required</sup> <a name="ServerVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.serverVersion"></a>

```go
func ServerVersion() *string
```

- *Type:* *string

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.serviceDirectoryConfig"></a>

```go
func ServiceDirectoryConfig() GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference">GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference</a>

---

##### `AuthorizerCredentialInput`<sup>Optional</sup> <a name="AuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.authorizerCredentialInput"></a>

```go
func AuthorizerCredentialInput() GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential">GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a>

---

##### `HostUriInput`<sup>Optional</sup> <a name="HostUriInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.hostUriInput"></a>

```go
func HostUriInput() *string
```

- *Type:* *string

---

##### `ReadAuthorizerCredentialInput`<sup>Optional</sup> <a name="ReadAuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```go
func ReadAuthorizerCredentialInput() GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a>

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```go
func ServiceDirectoryConfigInput() GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a>

---

##### `SslCaInput`<sup>Optional</sup> <a name="SslCaInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.sslCaInput"></a>

```go
func SslCaInput() *string
```

- *Type:* *string

---

##### `WebhookSecretSecretVersionInput`<sup>Optional</sup> <a name="WebhookSecretSecretVersionInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```go
func WebhookSecretSecretVersionInput() *string
```

- *Type:* *string

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.hostUri"></a>

```go
func HostUri() *string
```

- *Type:* *string

---

##### `SslCa`<sup>Required</sup> <a name="SslCa" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.sslCa"></a>

```go
func SslCa() *string
```

- *Type:* *string

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersion"></a>

```go
func WebhookSecretSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildv2ConnectionGitlabConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfig">GoogleCloudbuildv2ConnectionGitlabConfig</a>

---


### GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference <a name="GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.NewGoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```go
func UserTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```go
func UserTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a>

---


### GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference <a name="GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.NewGoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a>

---


### GoogleCloudbuildv2ConnectionInstallationStateList <a name="GoogleCloudbuildv2ConnectionInstallationStateList" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.NewGoogleCloudbuildv2ConnectionInstallationStateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudbuildv2ConnectionInstallationStateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.get"></a>

```go
func Get(index *f64) GoogleCloudbuildv2ConnectionInstallationStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleCloudbuildv2ConnectionInstallationStateOutputReference <a name="GoogleCloudbuildv2ConnectionInstallationStateOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.NewGoogleCloudbuildv2ConnectionInstallationStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudbuildv2ConnectionInstallationStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.property.actionUri">ActionUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.property.stage">Stage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationState">GoogleCloudbuildv2ConnectionInstallationState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionUri`<sup>Required</sup> <a name="ActionUri" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.property.actionUri"></a>

```go
func ActionUri() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.property.stage"></a>

```go
func Stage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationStateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildv2ConnectionInstallationState
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionInstallationState">GoogleCloudbuildv2ConnectionInstallationState</a>

---


### GoogleCloudbuildv2ConnectionTimeoutsOutputReference <a name="GoogleCloudbuildv2ConnectionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildv2connection"

googlecloudbuildv2connection.NewGoogleCloudbuildv2ConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildv2ConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildv2Connection.GoogleCloudbuildv2ConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



