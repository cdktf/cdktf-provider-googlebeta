# `googleCloudbuildTrigger` Submodule <a name="`googleCloudbuildTrigger` Submodule" id="@cdktf/provider-google-beta.googleCloudbuildTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudbuildTrigger <a name="GoogleCloudbuildTrigger" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger google_cloudbuild_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTrigger(scope Construct, id *string, config GoogleCloudbuildTriggerConfig) GoogleCloudbuildTrigger
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig">GoogleCloudbuildTriggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig">GoogleCloudbuildTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putApprovalConfig">PutApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putBitbucketServerTriggerConfig">PutBitbucketServerTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putBuildAttribute">PutBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putGitFileSource">PutGitFileSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putPubsubConfig">PutPubsubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putRepositoryEventConfig">PutRepositoryEventConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putSourceToBuild">PutSourceToBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putTriggerTemplate">PutTriggerTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putWebhookConfig">PutWebhookConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetApprovalConfig">ResetApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetBitbucketServerTriggerConfig">ResetBitbucketServerTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetBuildAttribute">ResetBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetFilename">ResetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetGitFileSource">ResetGitFileSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetIgnoredFiles">ResetIgnoredFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetIncludeBuildLogs">ResetIncludeBuildLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetIncludedFiles">ResetIncludedFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetPubsubConfig">ResetPubsubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetRepositoryEventConfig">ResetRepositoryEventConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetSourceToBuild">ResetSourceToBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetSubstitutions">ResetSubstitutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetTriggerTemplate">ResetTriggerTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetWebhookConfig">ResetWebhookConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApprovalConfig` <a name="PutApprovalConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putApprovalConfig"></a>

```go
func PutApprovalConfig(value GoogleCloudbuildTriggerApprovalConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putApprovalConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfig">GoogleCloudbuildTriggerApprovalConfig</a>

---

##### `PutBitbucketServerTriggerConfig` <a name="PutBitbucketServerTriggerConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putBitbucketServerTriggerConfig"></a>

```go
func PutBitbucketServerTriggerConfig(value GoogleCloudbuildTriggerBitbucketServerTriggerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putBitbucketServerTriggerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfig">GoogleCloudbuildTriggerBitbucketServerTriggerConfig</a>

---

##### `PutBuildAttribute` <a name="PutBuildAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putBuildAttribute"></a>

```go
func PutBuildAttribute(value GoogleCloudbuildTriggerBuild)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putBuildAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild">GoogleCloudbuildTriggerBuild</a>

---

##### `PutGitFileSource` <a name="PutGitFileSource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putGitFileSource"></a>

```go
func PutGitFileSource(value GoogleCloudbuildTriggerGitFileSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putGitFileSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource">GoogleCloudbuildTriggerGitFileSource</a>

---

##### `PutGithub` <a name="PutGithub" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putGithub"></a>

```go
func PutGithub(value GoogleCloudbuildTriggerGithub)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putGithub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithub">GoogleCloudbuildTriggerGithub</a>

---

##### `PutPubsubConfig` <a name="PutPubsubConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putPubsubConfig"></a>

```go
func PutPubsubConfig(value GoogleCloudbuildTriggerPubsubConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putPubsubConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfig">GoogleCloudbuildTriggerPubsubConfig</a>

---

##### `PutRepositoryEventConfig` <a name="PutRepositoryEventConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putRepositoryEventConfig"></a>

```go
func PutRepositoryEventConfig(value GoogleCloudbuildTriggerRepositoryEventConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putRepositoryEventConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfig">GoogleCloudbuildTriggerRepositoryEventConfig</a>

---

##### `PutSourceToBuild` <a name="PutSourceToBuild" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putSourceToBuild"></a>

```go
func PutSourceToBuild(value GoogleCloudbuildTriggerSourceToBuild)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putSourceToBuild.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuild">GoogleCloudbuildTriggerSourceToBuild</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCloudbuildTriggerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeouts">GoogleCloudbuildTriggerTimeouts</a>

---

##### `PutTriggerTemplate` <a name="PutTriggerTemplate" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putTriggerTemplate"></a>

```go
func PutTriggerTemplate(value GoogleCloudbuildTriggerTriggerTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putTriggerTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate">GoogleCloudbuildTriggerTriggerTemplate</a>

---

##### `PutWebhookConfig` <a name="PutWebhookConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putWebhookConfig"></a>

```go
func PutWebhookConfig(value GoogleCloudbuildTriggerWebhookConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.putWebhookConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfig">GoogleCloudbuildTriggerWebhookConfig</a>

---

##### `ResetApprovalConfig` <a name="ResetApprovalConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetApprovalConfig"></a>

```go
func ResetApprovalConfig()
```

##### `ResetBitbucketServerTriggerConfig` <a name="ResetBitbucketServerTriggerConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetBitbucketServerTriggerConfig"></a>

```go
func ResetBitbucketServerTriggerConfig()
```

##### `ResetBuildAttribute` <a name="ResetBuildAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetBuildAttribute"></a>

```go
func ResetBuildAttribute()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetFilename` <a name="ResetFilename" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetFilename"></a>

```go
func ResetFilename()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetGitFileSource` <a name="ResetGitFileSource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetGitFileSource"></a>

```go
func ResetGitFileSource()
```

##### `ResetGithub` <a name="ResetGithub" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetGithub"></a>

```go
func ResetGithub()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoredFiles` <a name="ResetIgnoredFiles" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetIgnoredFiles"></a>

```go
func ResetIgnoredFiles()
```

##### `ResetIncludeBuildLogs` <a name="ResetIncludeBuildLogs" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetIncludeBuildLogs"></a>

```go
func ResetIncludeBuildLogs()
```

##### `ResetIncludedFiles` <a name="ResetIncludedFiles" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetIncludedFiles"></a>

```go
func ResetIncludedFiles()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetName"></a>

```go
func ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPubsubConfig` <a name="ResetPubsubConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetPubsubConfig"></a>

```go
func ResetPubsubConfig()
```

##### `ResetRepositoryEventConfig` <a name="ResetRepositoryEventConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetRepositoryEventConfig"></a>

```go
func ResetRepositoryEventConfig()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetSourceToBuild` <a name="ResetSourceToBuild" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetSourceToBuild"></a>

```go
func ResetSourceToBuild()
```

##### `ResetSubstitutions` <a name="ResetSubstitutions" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetSubstitutions"></a>

```go
func ResetSubstitutions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTriggerTemplate` <a name="ResetTriggerTemplate" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetTriggerTemplate"></a>

```go
func ResetTriggerTemplate()
```

##### `ResetWebhookConfig` <a name="ResetWebhookConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.resetWebhookConfig"></a>

```go
func ResetWebhookConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudbuildTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.GoogleCloudbuildTrigger_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.GoogleCloudbuildTrigger_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.GoogleCloudbuildTrigger_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.GoogleCloudbuildTrigger_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleCloudbuildTrigger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleCloudbuildTrigger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleCloudbuildTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudbuildTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.approvalConfig">ApprovalConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference">GoogleCloudbuildTriggerApprovalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.bitbucketServerTriggerConfig">BitbucketServerTriggerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference">GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.buildAttribute">BuildAttribute</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference">GoogleCloudbuildTriggerBuildOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.gitFileSource">GitFileSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference">GoogleCloudbuildTriggerGitFileSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.github">Github</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference">GoogleCloudbuildTriggerGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.pubsubConfig">PubsubConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference">GoogleCloudbuildTriggerPubsubConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.repositoryEventConfig">RepositoryEventConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference">GoogleCloudbuildTriggerRepositoryEventConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.sourceToBuild">SourceToBuild</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference">GoogleCloudbuildTriggerSourceToBuildOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference">GoogleCloudbuildTriggerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.triggerId">TriggerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.triggerTemplate">TriggerTemplate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference">GoogleCloudbuildTriggerTriggerTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.webhookConfig">WebhookConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference">GoogleCloudbuildTriggerWebhookConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.approvalConfigInput">ApprovalConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfig">GoogleCloudbuildTriggerApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.bitbucketServerTriggerConfigInput">BitbucketServerTriggerConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfig">GoogleCloudbuildTriggerBitbucketServerTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.buildAttributeInput">BuildAttributeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild">GoogleCloudbuildTriggerBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.filenameInput">FilenameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.gitFileSourceInput">GitFileSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource">GoogleCloudbuildTriggerGitFileSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.githubInput">GithubInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithub">GoogleCloudbuildTriggerGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.ignoredFilesInput">IgnoredFilesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.includeBuildLogsInput">IncludeBuildLogsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.includedFilesInput">IncludedFilesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.pubsubConfigInput">PubsubConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfig">GoogleCloudbuildTriggerPubsubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.repositoryEventConfigInput">RepositoryEventConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfig">GoogleCloudbuildTriggerRepositoryEventConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.sourceToBuildInput">SourceToBuildInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuild">GoogleCloudbuildTriggerSourceToBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.substitutionsInput">SubstitutionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.triggerTemplateInput">TriggerTemplateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate">GoogleCloudbuildTriggerTriggerTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.webhookConfigInput">WebhookConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfig">GoogleCloudbuildTriggerWebhookConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.filename">Filename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.ignoredFiles">IgnoredFiles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.includeBuildLogs">IncludeBuildLogs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.includedFiles">IncludedFiles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.substitutions">Substitutions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApprovalConfig`<sup>Required</sup> <a name="ApprovalConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.approvalConfig"></a>

```go
func ApprovalConfig() GoogleCloudbuildTriggerApprovalConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference">GoogleCloudbuildTriggerApprovalConfigOutputReference</a>

---

##### `BitbucketServerTriggerConfig`<sup>Required</sup> <a name="BitbucketServerTriggerConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.bitbucketServerTriggerConfig"></a>

```go
func BitbucketServerTriggerConfig() GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference">GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference</a>

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.buildAttribute"></a>

```go
func BuildAttribute() GoogleCloudbuildTriggerBuildOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference">GoogleCloudbuildTriggerBuildOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `GitFileSource`<sup>Required</sup> <a name="GitFileSource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.gitFileSource"></a>

```go
func GitFileSource() GoogleCloudbuildTriggerGitFileSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference">GoogleCloudbuildTriggerGitFileSourceOutputReference</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.github"></a>

```go
func Github() GoogleCloudbuildTriggerGithubOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference">GoogleCloudbuildTriggerGithubOutputReference</a>

---

##### `PubsubConfig`<sup>Required</sup> <a name="PubsubConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.pubsubConfig"></a>

```go
func PubsubConfig() GoogleCloudbuildTriggerPubsubConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference">GoogleCloudbuildTriggerPubsubConfigOutputReference</a>

---

##### `RepositoryEventConfig`<sup>Required</sup> <a name="RepositoryEventConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.repositoryEventConfig"></a>

```go
func RepositoryEventConfig() GoogleCloudbuildTriggerRepositoryEventConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference">GoogleCloudbuildTriggerRepositoryEventConfigOutputReference</a>

---

##### `SourceToBuild`<sup>Required</sup> <a name="SourceToBuild" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.sourceToBuild"></a>

```go
func SourceToBuild() GoogleCloudbuildTriggerSourceToBuildOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference">GoogleCloudbuildTriggerSourceToBuildOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.timeouts"></a>

```go
func Timeouts() GoogleCloudbuildTriggerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference">GoogleCloudbuildTriggerTimeoutsOutputReference</a>

---

##### `TriggerId`<sup>Required</sup> <a name="TriggerId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.triggerId"></a>

```go
func TriggerId() *string
```

- *Type:* *string

---

##### `TriggerTemplate`<sup>Required</sup> <a name="TriggerTemplate" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.triggerTemplate"></a>

```go
func TriggerTemplate() GoogleCloudbuildTriggerTriggerTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference">GoogleCloudbuildTriggerTriggerTemplateOutputReference</a>

---

##### `WebhookConfig`<sup>Required</sup> <a name="WebhookConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.webhookConfig"></a>

```go
func WebhookConfig() GoogleCloudbuildTriggerWebhookConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference">GoogleCloudbuildTriggerWebhookConfigOutputReference</a>

---

##### `ApprovalConfigInput`<sup>Optional</sup> <a name="ApprovalConfigInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.approvalConfigInput"></a>

```go
func ApprovalConfigInput() GoogleCloudbuildTriggerApprovalConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfig">GoogleCloudbuildTriggerApprovalConfig</a>

---

##### `BitbucketServerTriggerConfigInput`<sup>Optional</sup> <a name="BitbucketServerTriggerConfigInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.bitbucketServerTriggerConfigInput"></a>

```go
func BitbucketServerTriggerConfigInput() GoogleCloudbuildTriggerBitbucketServerTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfig">GoogleCloudbuildTriggerBitbucketServerTriggerConfig</a>

---

##### `BuildAttributeInput`<sup>Optional</sup> <a name="BuildAttributeInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.buildAttributeInput"></a>

```go
func BuildAttributeInput() GoogleCloudbuildTriggerBuild
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild">GoogleCloudbuildTriggerBuild</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.filenameInput"></a>

```go
func FilenameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `GitFileSourceInput`<sup>Optional</sup> <a name="GitFileSourceInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.gitFileSourceInput"></a>

```go
func GitFileSourceInput() GoogleCloudbuildTriggerGitFileSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource">GoogleCloudbuildTriggerGitFileSource</a>

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.githubInput"></a>

```go
func GithubInput() GoogleCloudbuildTriggerGithub
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithub">GoogleCloudbuildTriggerGithub</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoredFilesInput`<sup>Optional</sup> <a name="IgnoredFilesInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.ignoredFilesInput"></a>

```go
func IgnoredFilesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeBuildLogsInput`<sup>Optional</sup> <a name="IncludeBuildLogsInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.includeBuildLogsInput"></a>

```go
func IncludeBuildLogsInput() *string
```

- *Type:* *string

---

##### `IncludedFilesInput`<sup>Optional</sup> <a name="IncludedFilesInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.includedFilesInput"></a>

```go
func IncludedFilesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PubsubConfigInput`<sup>Optional</sup> <a name="PubsubConfigInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.pubsubConfigInput"></a>

```go
func PubsubConfigInput() GoogleCloudbuildTriggerPubsubConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfig">GoogleCloudbuildTriggerPubsubConfig</a>

---

##### `RepositoryEventConfigInput`<sup>Optional</sup> <a name="RepositoryEventConfigInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.repositoryEventConfigInput"></a>

```go
func RepositoryEventConfigInput() GoogleCloudbuildTriggerRepositoryEventConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfig">GoogleCloudbuildTriggerRepositoryEventConfig</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `SourceToBuildInput`<sup>Optional</sup> <a name="SourceToBuildInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.sourceToBuildInput"></a>

```go
func SourceToBuildInput() GoogleCloudbuildTriggerSourceToBuild
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuild">GoogleCloudbuildTriggerSourceToBuild</a>

---

##### `SubstitutionsInput`<sup>Optional</sup> <a name="SubstitutionsInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.substitutionsInput"></a>

```go
func SubstitutionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TriggerTemplateInput`<sup>Optional</sup> <a name="TriggerTemplateInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.triggerTemplateInput"></a>

```go
func TriggerTemplateInput() GoogleCloudbuildTriggerTriggerTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate">GoogleCloudbuildTriggerTriggerTemplate</a>

---

##### `WebhookConfigInput`<sup>Optional</sup> <a name="WebhookConfigInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.webhookConfigInput"></a>

```go
func WebhookConfigInput() GoogleCloudbuildTriggerWebhookConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfig">GoogleCloudbuildTriggerWebhookConfig</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.filename"></a>

```go
func Filename() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoredFiles`<sup>Required</sup> <a name="IgnoredFiles" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.ignoredFiles"></a>

```go
func IgnoredFiles() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeBuildLogs`<sup>Required</sup> <a name="IncludeBuildLogs" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.includeBuildLogs"></a>

```go
func IncludeBuildLogs() *string
```

- *Type:* *string

---

##### `IncludedFiles`<sup>Required</sup> <a name="IncludedFiles" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.includedFiles"></a>

```go
func IncludedFiles() *[]*string
```

- *Type:* *[]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `Substitutions`<sup>Required</sup> <a name="Substitutions" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.substitutions"></a>

```go
func Substitutions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTrigger.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudbuildTriggerApprovalConfig <a name="GoogleCloudbuildTriggerApprovalConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerApprovalConfig {
	ApprovalRequired: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfig.property.approvalRequired">ApprovalRequired</a></code> | <code>interface{}</code> | Whether or not approval is needed. |

---

##### `ApprovalRequired`<sup>Optional</sup> <a name="ApprovalRequired" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfig.property.approvalRequired"></a>

```go
ApprovalRequired interface{}
```

- *Type:* interface{}

Whether or not approval is needed.

If this is set on a build, it will become pending when run,
and will need to be explicitly approved to start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#approval_required GoogleCloudbuildTrigger#approval_required}

---

### GoogleCloudbuildTriggerBitbucketServerTriggerConfig <a name="GoogleCloudbuildTriggerBitbucketServerTriggerConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfig {
	BitbucketServerConfigResource: *string,
	ProjectKey: *string,
	RepoSlug: *string,
	PullRequest: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest,
	Push: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfig.property.bitbucketServerConfigResource">BitbucketServerConfigResource</a></code> | <code>*string</code> | The Bitbucket server config resource that this trigger config maps to. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfig.property.projectKey">ProjectKey</a></code> | <code>*string</code> | Key of the project that the repo is in. For example: The key for https://mybitbucket.server/projects/TEST/repos/test-repo is "TEST". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfig.property.repoSlug">RepoSlug</a></code> | <code>*string</code> | Slug of the repository. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfig.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest">GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a></code> | pull_request block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfig.property.push">Push</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush">GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush</a></code> | push block. |

---

##### `BitbucketServerConfigResource`<sup>Required</sup> <a name="BitbucketServerConfigResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfig.property.bitbucketServerConfigResource"></a>

```go
BitbucketServerConfigResource *string
```

- *Type:* *string

The Bitbucket server config resource that this trigger config maps to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#bitbucket_server_config_resource GoogleCloudbuildTrigger#bitbucket_server_config_resource}

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfig.property.projectKey"></a>

```go
ProjectKey *string
```

- *Type:* *string

Key of the project that the repo is in. For example: The key for https://mybitbucket.server/projects/TEST/repos/test-repo is "TEST".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#project_key GoogleCloudbuildTrigger#project_key}

---

##### `RepoSlug`<sup>Required</sup> <a name="RepoSlug" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfig.property.repoSlug"></a>

```go
RepoSlug *string
```

- *Type:* *string

Slug of the repository.

A repository slug is a URL-friendly version of a repository name, automatically generated by Bitbucket for use in the URL.
For example, if the repository name is 'test repo', in the URL it would become 'test-repo' as in https://mybitbucket.server/projects/TEST/repos/test-repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#repo_slug GoogleCloudbuildTrigger#repo_slug}

---

##### `PullRequest`<sup>Optional</sup> <a name="PullRequest" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfig.property.pullRequest"></a>

```go
PullRequest GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest">GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a>

pull_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#pull_request GoogleCloudbuildTrigger#pull_request}

---

##### `Push`<sup>Optional</sup> <a name="Push" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfig.property.push"></a>

```go
Push GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush">GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush</a>

push block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#push GoogleCloudbuildTrigger#push}

---

### GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest <a name="GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest {
	Branch: *string,
	CommentControl: *string,
	InvertRegex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.branch">Branch</a></code> | <code>*string</code> | Regex of branches to match. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.commentControl">CommentControl</a></code> | <code>*string</code> | Configure builds to run whether a repository owner or collaborator need to comment /gcbrun. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | If true, branches that do NOT match the git_ref will trigger a build. |

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

Regex of branches to match.

The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#branch GoogleCloudbuildTrigger#branch}

---

##### `CommentControl`<sup>Optional</sup> <a name="CommentControl" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.commentControl"></a>

```go
CommentControl *string
```

- *Type:* *string

Configure builds to run whether a repository owner or collaborator need to comment /gcbrun. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#comment_control GoogleCloudbuildTrigger#comment_control}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.invertRegex"></a>

```go
InvertRegex interface{}
```

- *Type:* interface{}

If true, branches that do NOT match the git_ref will trigger a build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#invert_regex GoogleCloudbuildTrigger#invert_regex}

---

### GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush <a name="GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush {
	Branch: *string,
	InvertRegex: interface{},
	Tag: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush.property.branch">Branch</a></code> | <code>*string</code> | Regex of branches to match.  Specify only one of branch or tag. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | When true, only trigger a build if the revision regex does NOT match the gitRef regex. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush.property.tag">Tag</a></code> | <code>*string</code> | Regex of tags to match.  Specify only one of branch or tag. |

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

Regex of branches to match.  Specify only one of branch or tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#branch GoogleCloudbuildTrigger#branch}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush.property.invertRegex"></a>

```go
InvertRegex interface{}
```

- *Type:* interface{}

When true, only trigger a build if the revision regex does NOT match the gitRef regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#invert_regex GoogleCloudbuildTrigger#invert_regex}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

Regex of tags to match.  Specify only one of branch or tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#tag GoogleCloudbuildTrigger#tag}

---

### GoogleCloudbuildTriggerBuild <a name="GoogleCloudbuildTriggerBuild" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerBuild {
	Step: interface{},
	Artifacts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifacts,
	AvailableSecrets: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecrets,
	Images: *[]*string,
	LogsBucket: *string,
	Options: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions,
	QueueTtl: *string,
	Secret: interface{},
	Source: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSource,
	Substitutions: *map[string]*string,
	Tags: *[]*string,
	Timeout: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.step">Step</a></code> | <code>interface{}</code> | step block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.artifacts">Artifacts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifacts">GoogleCloudbuildTriggerBuildArtifacts</a></code> | artifacts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.availableSecrets">AvailableSecrets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecrets">GoogleCloudbuildTriggerBuildAvailableSecrets</a></code> | available_secrets block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.images">Images</a></code> | <code>*[]*string</code> | A list of images to be pushed upon the successful completion of all build steps. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.logsBucket">LogsBucket</a></code> | <code>*string</code> | Google Cloud Storage bucket where logs should be written. Logs file names will be of the format ${logsBucket}/log-${build_id}.txt. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.options">Options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions">GoogleCloudbuildTriggerBuildOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.queueTtl">QueueTtl</a></code> | <code>*string</code> | TTL in queue for this build. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.secret">Secret</a></code> | <code>interface{}</code> | secret block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.source">Source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSource">GoogleCloudbuildTriggerBuildSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.substitutions">Substitutions</a></code> | <code>*map[string]*string</code> | Substitutions data for Build resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.tags">Tags</a></code> | <code>*[]*string</code> | Tags for annotation of a Build. These are not docker tags. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.timeout">Timeout</a></code> | <code>*string</code> | Amount of time that this build should be allowed to run, to second granularity. |

---

##### `Step`<sup>Required</sup> <a name="Step" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.step"></a>

```go
Step interface{}
```

- *Type:* interface{}

step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#step GoogleCloudbuildTrigger#step}

---

##### `Artifacts`<sup>Optional</sup> <a name="Artifacts" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.artifacts"></a>

```go
Artifacts GoogleCloudbuildTriggerBuildArtifacts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifacts">GoogleCloudbuildTriggerBuildArtifacts</a>

artifacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#artifacts GoogleCloudbuildTrigger#artifacts}

---

##### `AvailableSecrets`<sup>Optional</sup> <a name="AvailableSecrets" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.availableSecrets"></a>

```go
AvailableSecrets GoogleCloudbuildTriggerBuildAvailableSecrets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecrets">GoogleCloudbuildTriggerBuildAvailableSecrets</a>

available_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#available_secrets GoogleCloudbuildTrigger#available_secrets}

---

##### `Images`<sup>Optional</sup> <a name="Images" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.images"></a>

```go
Images *[]*string
```

- *Type:* *[]*string

A list of images to be pushed upon the successful completion of all build steps.

The images are pushed using the builder service account's credentials.
The digests of the pushed images will be stored in the Build resource's results field.
If any of the images fail to be pushed, the build status is marked FAILURE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#images GoogleCloudbuildTrigger#images}

---

##### `LogsBucket`<sup>Optional</sup> <a name="LogsBucket" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.logsBucket"></a>

```go
LogsBucket *string
```

- *Type:* *string

Google Cloud Storage bucket where logs should be written. Logs file names will be of the format ${logsBucket}/log-${build_id}.txt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#logs_bucket GoogleCloudbuildTrigger#logs_bucket}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.options"></a>

```go
Options GoogleCloudbuildTriggerBuildOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions">GoogleCloudbuildTriggerBuildOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#options GoogleCloudbuildTrigger#options}

---

##### `QueueTtl`<sup>Optional</sup> <a name="QueueTtl" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.queueTtl"></a>

```go
QueueTtl *string
```

- *Type:* *string

TTL in queue for this build.

If provided and the build is enqueued longer than this value,
the build will expire and the build status will be EXPIRED.
The TTL starts ticking from createTime.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#queue_ttl GoogleCloudbuildTrigger#queue_ttl}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.secret"></a>

```go
Secret interface{}
```

- *Type:* interface{}

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#secret GoogleCloudbuildTrigger#secret}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.source"></a>

```go
Source GoogleCloudbuildTriggerBuildSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSource">GoogleCloudbuildTriggerBuildSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#source GoogleCloudbuildTrigger#source}

---

##### `Substitutions`<sup>Optional</sup> <a name="Substitutions" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.substitutions"></a>

```go
Substitutions *map[string]*string
```

- *Type:* *map[string]*string

Substitutions data for Build resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#substitutions GoogleCloudbuildTrigger#substitutions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Tags for annotation of a Build. These are not docker tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#tags GoogleCloudbuildTrigger#tags}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Amount of time that this build should be allowed to run, to second granularity.

If this amount of time elapses, work on the build will cease and the build status will be TIMEOUT.
This timeout must be equal to or greater than the sum of the timeouts for build steps within the build.
The expected format is the number of seconds followed by s.
Default time is ten minutes (600s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#timeout GoogleCloudbuildTrigger#timeout}

---

### GoogleCloudbuildTriggerBuildArtifacts <a name="GoogleCloudbuildTriggerBuildArtifacts" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifacts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerBuildArtifacts {
	Images: *[]*string,
	MavenArtifacts: interface{},
	NpmPackages: interface{},
	Objects: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjects,
	PythonPackages: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifacts.property.images">Images</a></code> | <code>*[]*string</code> | A list of images to be pushed upon the successful completion of all build steps. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifacts.property.mavenArtifacts">MavenArtifacts</a></code> | <code>interface{}</code> | maven_artifacts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifacts.property.npmPackages">NpmPackages</a></code> | <code>interface{}</code> | npm_packages block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifacts.property.objects">Objects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjects">GoogleCloudbuildTriggerBuildArtifactsObjects</a></code> | objects block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifacts.property.pythonPackages">PythonPackages</a></code> | <code>interface{}</code> | python_packages block. |

---

##### `Images`<sup>Optional</sup> <a name="Images" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifacts.property.images"></a>

```go
Images *[]*string
```

- *Type:* *[]*string

A list of images to be pushed upon the successful completion of all build steps.

The images will be pushed using the builder service account's credentials.

The digests of the pushed images will be stored in the Build resource's results field.

If any of the images fail to be pushed, the build is marked FAILURE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#images GoogleCloudbuildTrigger#images}

---

##### `MavenArtifacts`<sup>Optional</sup> <a name="MavenArtifacts" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifacts.property.mavenArtifacts"></a>

```go
MavenArtifacts interface{}
```

- *Type:* interface{}

maven_artifacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#maven_artifacts GoogleCloudbuildTrigger#maven_artifacts}

---

##### `NpmPackages`<sup>Optional</sup> <a name="NpmPackages" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifacts.property.npmPackages"></a>

```go
NpmPackages interface{}
```

- *Type:* interface{}

npm_packages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#npm_packages GoogleCloudbuildTrigger#npm_packages}

---

##### `Objects`<sup>Optional</sup> <a name="Objects" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifacts.property.objects"></a>

```go
Objects GoogleCloudbuildTriggerBuildArtifactsObjects
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjects">GoogleCloudbuildTriggerBuildArtifactsObjects</a>

objects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#objects GoogleCloudbuildTrigger#objects}

---

##### `PythonPackages`<sup>Optional</sup> <a name="PythonPackages" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifacts.property.pythonPackages"></a>

```go
PythonPackages interface{}
```

- *Type:* interface{}

python_packages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#python_packages GoogleCloudbuildTrigger#python_packages}

---

### GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts <a name="GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts {
	ArtifactId: *string,
	GroupId: *string,
	Path: *string,
	Repository: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts.property.artifactId">ArtifactId</a></code> | <code>*string</code> | Maven artifactId value used when uploading the artifact to Artifact Registry. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts.property.groupId">GroupId</a></code> | <code>*string</code> | Maven groupId value used when uploading the artifact to Artifact Registry. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts.property.path">Path</a></code> | <code>*string</code> | Path to an artifact in the build's workspace to be uploaded to Artifact Registry. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts.property.repository">Repository</a></code> | <code>*string</code> | Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts.property.version">Version</a></code> | <code>*string</code> | Maven version value used when uploading the artifact to Artifact Registry. |

---

##### `ArtifactId`<sup>Optional</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts.property.artifactId"></a>

```go
ArtifactId *string
```

- *Type:* *string

Maven artifactId value used when uploading the artifact to Artifact Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#artifact_id GoogleCloudbuildTrigger#artifact_id}

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

Maven groupId value used when uploading the artifact to Artifact Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#group_id GoogleCloudbuildTrigger#group_id}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path to an artifact in the build's workspace to be uploaded to Artifact Registry.

This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#path GoogleCloudbuildTrigger#path}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY".

Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#repository GoogleCloudbuildTrigger#repository}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts.property.version"></a>

```go
Version *string
```

- *Type:* *string

Maven version value used when uploading the artifact to Artifact Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#version GoogleCloudbuildTrigger#version}

---

### GoogleCloudbuildTriggerBuildArtifactsNpmPackages <a name="GoogleCloudbuildTriggerBuildArtifactsNpmPackages" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackages {
	PackagePath: *string,
	Repository: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackages.property.packagePath">PackagePath</a></code> | <code>*string</code> | Path to the package.json. e.g. workspace/path/to/package. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackages.property.repository">Repository</a></code> | <code>*string</code> | Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY". |

---

##### `PackagePath`<sup>Optional</sup> <a name="PackagePath" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackages.property.packagePath"></a>

```go
PackagePath *string
```

- *Type:* *string

Path to the package.json. e.g. workspace/path/to/package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#package_path GoogleCloudbuildTrigger#package_path}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackages.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY".

Npm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#repository GoogleCloudbuildTrigger#repository}

---

### GoogleCloudbuildTriggerBuildArtifactsObjects <a name="GoogleCloudbuildTriggerBuildArtifactsObjects" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjects.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerBuildArtifactsObjects {
	Location: *string,
	Paths: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjects.property.location">Location</a></code> | <code>*string</code> | Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjects.property.paths">Paths</a></code> | <code>*[]*string</code> | Path globs used to match files in the build's workspace. |

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjects.property.location"></a>

```go
Location *string
```

- *Type:* *string

Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/".

Files in the workspace matching any path pattern will be uploaded to Cloud Storage with
this location as a prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#location GoogleCloudbuildTrigger#location}

---

##### `Paths`<sup>Optional</sup> <a name="Paths" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjects.property.paths"></a>

```go
Paths *[]*string
```

- *Type:* *[]*string

Path globs used to match files in the build's workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#paths GoogleCloudbuildTrigger#paths}

---

### GoogleCloudbuildTriggerBuildArtifactsObjectsTiming <a name="GoogleCloudbuildTriggerBuildArtifactsObjectsTiming" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTiming"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTiming.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTiming {

}
```


### GoogleCloudbuildTriggerBuildArtifactsPythonPackages <a name="GoogleCloudbuildTriggerBuildArtifactsPythonPackages" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackages {
	Paths: *[]*string,
	Repository: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackages.property.paths">Paths</a></code> | <code>*[]*string</code> | Path globs used to match files in the build's workspace. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackages.property.repository">Repository</a></code> | <code>*string</code> | Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY". |

---

##### `Paths`<sup>Optional</sup> <a name="Paths" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackages.property.paths"></a>

```go
Paths *[]*string
```

- *Type:* *[]*string

Path globs used to match files in the build's workspace.

For Python/ Twine, this is usually dist/*, and sometimes additionally an .asc file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#paths GoogleCloudbuildTrigger#paths}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackages.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY".

Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#repository GoogleCloudbuildTrigger#repository}

---

### GoogleCloudbuildTriggerBuildAvailableSecrets <a name="GoogleCloudbuildTriggerBuildAvailableSecrets" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecrets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerBuildAvailableSecrets {
	SecretManager: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecrets.property.secretManager">SecretManager</a></code> | <code>interface{}</code> | secret_manager block. |

---

##### `SecretManager`<sup>Required</sup> <a name="SecretManager" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecrets.property.secretManager"></a>

```go
SecretManager interface{}
```

- *Type:* interface{}

secret_manager block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#secret_manager GoogleCloudbuildTrigger#secret_manager}

---

### GoogleCloudbuildTriggerBuildAvailableSecretsSecretManager <a name="GoogleCloudbuildTriggerBuildAvailableSecretsSecretManager" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManager"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManager.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManager {
	Env: *string,
	VersionName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManager.property.env">Env</a></code> | <code>*string</code> | Environment variable name to associate with the secret. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManager.property.versionName">VersionName</a></code> | <code>*string</code> | Resource name of the SecretVersion. In format: projects/* /secrets/* /versions/*. |

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManager.property.env"></a>

```go
Env *string
```

- *Type:* *string

Environment variable name to associate with the secret.

Secret environment
variables must be unique across all of a build's secrets, and must be used
by at least one build step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#env GoogleCloudbuildTrigger#env}

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManager.property.versionName"></a>

```go
VersionName *string
```

- *Type:* *string

Resource name of the SecretVersion. In format: projects/* /secrets/* /versions/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#version_name GoogleCloudbuildTrigger#version_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleCloudbuildTriggerBuildOptions <a name="GoogleCloudbuildTriggerBuildOptions" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerBuildOptions {
	DiskSizeGb: *f64,
	DynamicSubstitutions: interface{},
	Env: *[]*string,
	Logging: *string,
	LogStreamingOption: *string,
	MachineType: *string,
	RequestedVerifyOption: *string,
	SecretEnv: *[]*string,
	SourceProvenanceHash: *[]*string,
	SubstitutionOption: *string,
	Volumes: interface{},
	WorkerPool: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | Requested disk size for the VM that runs the build. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.dynamicSubstitutions">DynamicSubstitutions</a></code> | <code>interface{}</code> | Option to specify whether or not to apply bash style string operations to the substitutions. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.env">Env</a></code> | <code>*[]*string</code> | A list of global environment variable definitions that will exist for all build steps in this build. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.logging">Logging</a></code> | <code>*string</code> | Option to specify the logging mode, which determines if and where build logs are stored. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.logStreamingOption">LogStreamingOption</a></code> | <code>*string</code> | Option to define build log streaming behavior to Google Cloud Storage. Possible values: ["STREAM_DEFAULT", "STREAM_ON", "STREAM_OFF"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.machineType">MachineType</a></code> | <code>*string</code> | Compute Engine machine type on which to run the build. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.requestedVerifyOption">RequestedVerifyOption</a></code> | <code>*string</code> | Requested verifiability options. Possible values: ["NOT_VERIFIED", "VERIFIED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.secretEnv">SecretEnv</a></code> | <code>*[]*string</code> | A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.sourceProvenanceHash">SourceProvenanceHash</a></code> | <code>*[]*string</code> | Requested hash for SourceProvenance. Possible values: ["NONE", "SHA256", "MD5"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.substitutionOption">SubstitutionOption</a></code> | <code>*string</code> | Option to specify behavior when there is an error in the substitution checks. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.volumes">Volumes</a></code> | <code>interface{}</code> | volumes block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.workerPool">WorkerPool</a></code> | <code>*string</code> | Option to specify a WorkerPool for the build. Format projects/{project}/workerPools/{workerPool}. |

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.diskSizeGb"></a>

```go
DiskSizeGb *f64
```

- *Type:* *f64

Requested disk size for the VM that runs the build.

Note that this is NOT "disk free";
some of the space will be used by the operating system and build utilities.
Also note that this is the minimum disk size that will be allocated for the build --
the build may run with a larger disk than requested. At present, the maximum disk size
is 1000GB; builds that request more than the maximum are rejected with an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#disk_size_gb GoogleCloudbuildTrigger#disk_size_gb}

---

##### `DynamicSubstitutions`<sup>Optional</sup> <a name="DynamicSubstitutions" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.dynamicSubstitutions"></a>

```go
DynamicSubstitutions interface{}
```

- *Type:* interface{}

Option to specify whether or not to apply bash style string operations to the substitutions.

NOTE this is always enabled for triggered builds and cannot be overridden in the build configuration file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#dynamic_substitutions GoogleCloudbuildTrigger#dynamic_substitutions}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.env"></a>

```go
Env *[]*string
```

- *Type:* *[]*string

A list of global environment variable definitions that will exist for all build steps in this build.

If a variable is defined in both globally and in a build step,
the variable will use the build step value.

The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#env GoogleCloudbuildTrigger#env}

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.logging"></a>

```go
Logging *string
```

- *Type:* *string

Option to specify the logging mode, which determines if and where build logs are stored.

Possible values: ["LOGGING_UNSPECIFIED", "LEGACY", "GCS_ONLY", "STACKDRIVER_ONLY", "CLOUD_LOGGING_ONLY", "NONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#logging GoogleCloudbuildTrigger#logging}

---

##### `LogStreamingOption`<sup>Optional</sup> <a name="LogStreamingOption" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.logStreamingOption"></a>

```go
LogStreamingOption *string
```

- *Type:* *string

Option to define build log streaming behavior to Google Cloud Storage. Possible values: ["STREAM_DEFAULT", "STREAM_ON", "STREAM_OFF"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#log_streaming_option GoogleCloudbuildTrigger#log_streaming_option}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

Compute Engine machine type on which to run the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#machine_type GoogleCloudbuildTrigger#machine_type}

---

##### `RequestedVerifyOption`<sup>Optional</sup> <a name="RequestedVerifyOption" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.requestedVerifyOption"></a>

```go
RequestedVerifyOption *string
```

- *Type:* *string

Requested verifiability options. Possible values: ["NOT_VERIFIED", "VERIFIED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#requested_verify_option GoogleCloudbuildTrigger#requested_verify_option}

---

##### `SecretEnv`<sup>Optional</sup> <a name="SecretEnv" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.secretEnv"></a>

```go
SecretEnv *[]*string
```

- *Type:* *[]*string

A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key.

These values must be specified in the build's Secret. These variables
will be available to all build steps in this build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#secret_env GoogleCloudbuildTrigger#secret_env}

---

##### `SourceProvenanceHash`<sup>Optional</sup> <a name="SourceProvenanceHash" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.sourceProvenanceHash"></a>

```go
SourceProvenanceHash *[]*string
```

- *Type:* *[]*string

Requested hash for SourceProvenance. Possible values: ["NONE", "SHA256", "MD5"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#source_provenance_hash GoogleCloudbuildTrigger#source_provenance_hash}

---

##### `SubstitutionOption`<sup>Optional</sup> <a name="SubstitutionOption" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.substitutionOption"></a>

```go
SubstitutionOption *string
```

- *Type:* *string

Option to specify behavior when there is an error in the substitution checks.

NOTE this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden
in the build configuration file. Possible values: ["MUST_MATCH", "ALLOW_LOOSE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#substitution_option GoogleCloudbuildTrigger#substitution_option}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.volumes"></a>

```go
Volumes interface{}
```

- *Type:* interface{}

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#volumes GoogleCloudbuildTrigger#volumes}

---

##### `WorkerPool`<sup>Optional</sup> <a name="WorkerPool" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions.property.workerPool"></a>

```go
WorkerPool *string
```

- *Type:* *string

Option to specify a WorkerPool for the build. Format projects/{project}/workerPools/{workerPool}.

This field is experimental.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#worker_pool GoogleCloudbuildTrigger#worker_pool}

---

### GoogleCloudbuildTriggerBuildOptionsVolumes <a name="GoogleCloudbuildTriggerBuildOptionsVolumes" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerBuildOptionsVolumes {
	Name: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumes.property.name">Name</a></code> | <code>*string</code> | Name of the volume to mount. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumes.property.path">Path</a></code> | <code>*string</code> | Path at which to mount the volume. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the volume to mount.

Volume names must be unique per build step and must be valid names for Docker volumes.
Each named volume must be used by at least two build steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#name GoogleCloudbuildTrigger#name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumes.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path at which to mount the volume.

Paths must be absolute and cannot conflict with other volume paths on the same
build step or with certain reserved volume paths.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#path GoogleCloudbuildTrigger#path}

---

### GoogleCloudbuildTriggerBuildSecret <a name="GoogleCloudbuildTriggerBuildSecret" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerBuildSecret {
	KmsKeyName: *string,
	SecretEnv: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecret.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Cloud KMS key name to use to decrypt these envs. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecret.property.secretEnv">SecretEnv</a></code> | <code>*map[string]*string</code> | Map of environment variable name to its encrypted value. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecret.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Cloud KMS key name to use to decrypt these envs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#kms_key_name GoogleCloudbuildTrigger#kms_key_name}

---

##### `SecretEnv`<sup>Optional</sup> <a name="SecretEnv" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecret.property.secretEnv"></a>

```go
SecretEnv *map[string]*string
```

- *Type:* *map[string]*string

Map of environment variable name to its encrypted value.

Secret environment variables must be unique across all of a build's secrets,
and must be used by at least one build step. Values can be at most 64 KB in size.
There can be at most 100 secret values across all of a build's secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#secret_env GoogleCloudbuildTrigger#secret_env}

---

### GoogleCloudbuildTriggerBuildSource <a name="GoogleCloudbuildTriggerBuildSource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerBuildSource {
	RepoSource: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource,
	StorageSource: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSource.property.repoSource">RepoSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource">GoogleCloudbuildTriggerBuildSourceRepoSource</a></code> | repo_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSource.property.storageSource">StorageSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSource">GoogleCloudbuildTriggerBuildSourceStorageSource</a></code> | storage_source block. |

---

##### `RepoSource`<sup>Optional</sup> <a name="RepoSource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSource.property.repoSource"></a>

```go
RepoSource GoogleCloudbuildTriggerBuildSourceRepoSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource">GoogleCloudbuildTriggerBuildSourceRepoSource</a>

repo_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#repo_source GoogleCloudbuildTrigger#repo_source}

---

##### `StorageSource`<sup>Optional</sup> <a name="StorageSource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSource.property.storageSource"></a>

```go
StorageSource GoogleCloudbuildTriggerBuildSourceStorageSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSource">GoogleCloudbuildTriggerBuildSourceStorageSource</a>

storage_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#storage_source GoogleCloudbuildTrigger#storage_source}

---

### GoogleCloudbuildTriggerBuildSourceRepoSource <a name="GoogleCloudbuildTriggerBuildSourceRepoSource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerBuildSourceRepoSource {
	RepoName: *string,
	BranchName: *string,
	CommitSha: *string,
	Dir: *string,
	InvertRegex: interface{},
	ProjectId: *string,
	Substitutions: *map[string]*string,
	TagName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource.property.repoName">RepoName</a></code> | <code>*string</code> | Name of the Cloud Source Repository. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource.property.branchName">BranchName</a></code> | <code>*string</code> | Regex matching branches to build. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource.property.commitSha">CommitSha</a></code> | <code>*string</code> | Explicit commit SHA to build. Exactly one a of branch name, tag, or commit SHA must be provided. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource.property.dir">Dir</a></code> | <code>*string</code> | Directory, relative to the source root, in which to run the build. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | Only trigger a build if the revision regex does NOT match the revision regex. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource.property.projectId">ProjectId</a></code> | <code>*string</code> | ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource.property.substitutions">Substitutions</a></code> | <code>*map[string]*string</code> | Substitutions to use in a triggered build. Should only be used with triggers.run. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource.property.tagName">TagName</a></code> | <code>*string</code> | Regex matching tags to build. |

---

##### `RepoName`<sup>Required</sup> <a name="RepoName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource.property.repoName"></a>

```go
RepoName *string
```

- *Type:* *string

Name of the Cloud Source Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#repo_name GoogleCloudbuildTrigger#repo_name}

---

##### `BranchName`<sup>Optional</sup> <a name="BranchName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource.property.branchName"></a>

```go
BranchName *string
```

- *Type:* *string

Regex matching branches to build.

Exactly one a of branch name, tag, or commit SHA must be provided.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and
described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#branch_name GoogleCloudbuildTrigger#branch_name}

---

##### `CommitSha`<sup>Optional</sup> <a name="CommitSha" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource.property.commitSha"></a>

```go
CommitSha *string
```

- *Type:* *string

Explicit commit SHA to build. Exactly one a of branch name, tag, or commit SHA must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#commit_sha GoogleCloudbuildTrigger#commit_sha}

---

##### `Dir`<sup>Optional</sup> <a name="Dir" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource.property.dir"></a>

```go
Dir *string
```

- *Type:* *string

Directory, relative to the source root, in which to run the build.

This must be a relative path. If a step's dir is specified and is an absolute path,
this value is ignored for that step's execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#dir GoogleCloudbuildTrigger#dir}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource.property.invertRegex"></a>

```go
InvertRegex interface{}
```

- *Type:* interface{}

Only trigger a build if the revision regex does NOT match the revision regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#invert_regex GoogleCloudbuildTrigger#invert_regex}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#project_id GoogleCloudbuildTrigger#project_id}

---

##### `Substitutions`<sup>Optional</sup> <a name="Substitutions" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource.property.substitutions"></a>

```go
Substitutions *map[string]*string
```

- *Type:* *map[string]*string

Substitutions to use in a triggered build. Should only be used with triggers.run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#substitutions GoogleCloudbuildTrigger#substitutions}

---

##### `TagName`<sup>Optional</sup> <a name="TagName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource.property.tagName"></a>

```go
TagName *string
```

- *Type:* *string

Regex matching tags to build.

Exactly one a of branch name, tag, or commit SHA must be provided.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and
described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#tag_name GoogleCloudbuildTrigger#tag_name}

---

### GoogleCloudbuildTriggerBuildSourceStorageSource <a name="GoogleCloudbuildTriggerBuildSourceStorageSource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerBuildSourceStorageSource {
	Bucket: *string,
	Object: *string,
	Generation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSource.property.bucket">Bucket</a></code> | <code>*string</code> | Google Cloud Storage bucket containing the source. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSource.property.object">Object</a></code> | <code>*string</code> | Google Cloud Storage object containing the source. This object must be a gzipped archive file (.tar.gz) containing source to build. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSource.property.generation">Generation</a></code> | <code>*string</code> | Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSource.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Google Cloud Storage bucket containing the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#bucket GoogleCloudbuildTrigger#bucket}

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSource.property.object"></a>

```go
Object *string
```

- *Type:* *string

Google Cloud Storage object containing the source. This object must be a gzipped archive file (.tar.gz) containing source to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#object GoogleCloudbuildTrigger#object}

---

##### `Generation`<sup>Optional</sup> <a name="Generation" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSource.property.generation"></a>

```go
Generation *string
```

- *Type:* *string

Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#generation GoogleCloudbuildTrigger#generation}

---

### GoogleCloudbuildTriggerBuildStep <a name="GoogleCloudbuildTriggerBuildStep" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerBuildStep {
	Name: *string,
	AllowExitCodes: *[]*f64,
	AllowFailure: interface{},
	Args: *[]*string,
	Dir: *string,
	Entrypoint: *string,
	Env: *[]*string,
	Id: *string,
	Script: *string,
	SecretEnv: *[]*string,
	Timeout: *string,
	Timing: *string,
	Volumes: interface{},
	WaitFor: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.name">Name</a></code> | <code>*string</code> | The name of the container image that will run this particular build step. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.allowExitCodes">AllowExitCodes</a></code> | <code>*[]*f64</code> | Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.allowFailure">AllowFailure</a></code> | <code>interface{}</code> | Allow this build step to fail without failing the entire build. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.args">Args</a></code> | <code>*[]*string</code> | A list of arguments that will be presented to the step when it is started. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.dir">Dir</a></code> | <code>*string</code> | Working directory to use when running this step's container. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.entrypoint">Entrypoint</a></code> | <code>*string</code> | Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.env">Env</a></code> | <code>*[]*string</code> | A list of environment variable definitions to be used when running a step. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.id">Id</a></code> | <code>*string</code> | Unique identifier for this build step, used in 'wait_for' to reference this build step as a dependency. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.script">Script</a></code> | <code>*string</code> | A shell script to be executed in the step. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.secretEnv">SecretEnv</a></code> | <code>*[]*string</code> | A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.timeout">Timeout</a></code> | <code>*string</code> | Time limit for executing this build step. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.timing">Timing</a></code> | <code>*string</code> | Output only. Stores timing information for executing this build step. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.volumes">Volumes</a></code> | <code>interface{}</code> | volumes block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.waitFor">WaitFor</a></code> | <code>*[]*string</code> | The ID(s) of the step(s) that this build step depends on. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the container image that will run this particular build step.

If the image is available in the host's Docker daemon's cache, it will be
run directly. If not, the host will attempt to pull the image first, using
the builder service account's credentials if necessary.

The Docker daemon's cache will already have the latest versions of all of
the officially supported build steps (see https://github.com/GoogleCloudPlatform/cloud-builders
for images and examples).
The Docker daemon will also have cached many of the layers for some popular
images, like "ubuntu", "debian", but they will be refreshed at the time
you attempt to use them.

If you built an image in a previous build step, it will be stored in the
host's Docker daemon's cache and is available to use as the name for a
later build step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#name GoogleCloudbuildTrigger#name}

---

##### `AllowExitCodes`<sup>Optional</sup> <a name="AllowExitCodes" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.allowExitCodes"></a>

```go
AllowExitCodes *[]*f64
```

- *Type:* *[]*f64

Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes.

If 'allowFailure' is also specified, this field will take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#allow_exit_codes GoogleCloudbuildTrigger#allow_exit_codes}

---

##### `AllowFailure`<sup>Optional</sup> <a name="AllowFailure" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.allowFailure"></a>

```go
AllowFailure interface{}
```

- *Type:* interface{}

Allow this build step to fail without failing the entire build.

If false, the entire build will fail if this step fails. Otherwise, the
build will succeed, but this step will still have a failure status.
Error information will be reported in the 'failureDetail' field.

'allowExitCodes' takes precedence over this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#allow_failure GoogleCloudbuildTrigger#allow_failure}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

A list of arguments that will be presented to the step when it is started.

If the image used to run the step's container has an entrypoint, the args
are used as arguments to that entrypoint. If the image does not define an
entrypoint, the first element in args is used as the entrypoint, and the
remainder will be used as arguments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#args GoogleCloudbuildTrigger#args}

---

##### `Dir`<sup>Optional</sup> <a name="Dir" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.dir"></a>

```go
Dir *string
```

- *Type:* *string

Working directory to use when running this step's container.

If this value is a relative path, it is relative to the build's working
directory. If this value is absolute, it may be outside the build's working
directory, in which case the contents of the path may not be persisted
across build step executions, unless a 'volume' for that path is specified.

If the build specifies a 'RepoSource' with 'dir' and a step with a
'dir',
which specifies an absolute path, the 'RepoSource' 'dir' is ignored
for the step's execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#dir GoogleCloudbuildTrigger#dir}

---

##### `Entrypoint`<sup>Optional</sup> <a name="Entrypoint" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.entrypoint"></a>

```go
Entrypoint *string
```

- *Type:* *string

Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#entrypoint GoogleCloudbuildTrigger#entrypoint}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.env"></a>

```go
Env *[]*string
```

- *Type:* *[]*string

A list of environment variable definitions to be used when running a step.

The elements are of the form "KEY=VALUE" for the environment variable
"KEY" being given the value "VALUE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#env GoogleCloudbuildTrigger#env}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.id"></a>

```go
Id *string
```

- *Type:* *string

Unique identifier for this build step, used in 'wait_for' to reference this build step as a dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#id GoogleCloudbuildTrigger#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.script"></a>

```go
Script *string
```

- *Type:* *string

A shell script to be executed in the step.

When script is provided, the user cannot specify the entrypoint or args.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#script GoogleCloudbuildTrigger#script}

---

##### `SecretEnv`<sup>Optional</sup> <a name="SecretEnv" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.secretEnv"></a>

```go
SecretEnv *[]*string
```

- *Type:* *[]*string

A list of environment variables which are encrypted using a Cloud Key Management Service crypto key.

These values must be specified in
the build's 'Secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#secret_env GoogleCloudbuildTrigger#secret_env}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Time limit for executing this build step.

If not defined,
the step has no
time limit and will be allowed to continue to run until either it
completes or the build itself times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#timeout GoogleCloudbuildTrigger#timeout}

---

##### `Timing`<sup>Optional</sup> <a name="Timing" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.timing"></a>

```go
Timing *string
```

- *Type:* *string

Output only. Stores timing information for executing this build step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#timing GoogleCloudbuildTrigger#timing}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.volumes"></a>

```go
Volumes interface{}
```

- *Type:* interface{}

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#volumes GoogleCloudbuildTrigger#volumes}

---

##### `WaitFor`<sup>Optional</sup> <a name="WaitFor" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStep.property.waitFor"></a>

```go
WaitFor *[]*string
```

- *Type:* *[]*string

The ID(s) of the step(s) that this build step depends on.

This build step will not start until all the build steps in 'wait_for'
have completed successfully. If 'wait_for' is empty, this build step
will start when all previous build steps in the 'Build.Steps' list
have completed successfully.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#wait_for GoogleCloudbuildTrigger#wait_for}

---

### GoogleCloudbuildTriggerBuildStepVolumes <a name="GoogleCloudbuildTriggerBuildStepVolumes" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerBuildStepVolumes {
	Name: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumes.property.name">Name</a></code> | <code>*string</code> | Name of the volume to mount. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumes.property.path">Path</a></code> | <code>*string</code> | Path at which to mount the volume. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the volume to mount.

Volume names must be unique per build step and must be valid names for
Docker volumes. Each named volume must be used by at least two build steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#name GoogleCloudbuildTrigger#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumes.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path at which to mount the volume.

Paths must be absolute and cannot conflict with other volume paths on
the same build step or with certain reserved volume paths.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#path GoogleCloudbuildTrigger#path}

---

### GoogleCloudbuildTriggerConfig <a name="GoogleCloudbuildTriggerConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApprovalConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfig,
	BitbucketServerTriggerConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfig,
	BuildAttribute: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild,
	Description: *string,
	Disabled: interface{},
	Filename: *string,
	Filter: *string,
	GitFileSource: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource,
	Github: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithub,
	Id: *string,
	IgnoredFiles: *[]*string,
	IncludeBuildLogs: *string,
	IncludedFiles: *[]*string,
	Location: *string,
	Name: *string,
	Project: *string,
	PubsubConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfig,
	RepositoryEventConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfig,
	ServiceAccount: *string,
	SourceToBuild: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuild,
	Substitutions: *map[string]*string,
	Tags: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeouts,
	TriggerTemplate: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate,
	WebhookConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.approvalConfig">ApprovalConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfig">GoogleCloudbuildTriggerApprovalConfig</a></code> | approval_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.bitbucketServerTriggerConfig">BitbucketServerTriggerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfig">GoogleCloudbuildTriggerBitbucketServerTriggerConfig</a></code> | bitbucket_server_trigger_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.buildAttribute">BuildAttribute</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild">GoogleCloudbuildTriggerBuild</a></code> | build block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.description">Description</a></code> | <code>*string</code> | Human-readable description of the trigger. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the trigger is disabled or not. If true, the trigger will never result in a build. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.filename">Filename</a></code> | <code>*string</code> | Path, from the source root, to a file whose contents is used for the template. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.filter">Filter</a></code> | <code>*string</code> | A Common Expression Language string. Used only with Pub/Sub and Webhook. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.gitFileSource">GitFileSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource">GoogleCloudbuildTriggerGitFileSource</a></code> | git_file_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.github">Github</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithub">GoogleCloudbuildTriggerGithub</a></code> | github block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#id GoogleCloudbuildTrigger#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.ignoredFiles">IgnoredFiles</a></code> | <code>*[]*string</code> | ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.includeBuildLogs">IncludeBuildLogs</a></code> | <code>*string</code> | Build logs will be sent back to GitHub as part of the checkrun result. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.includedFiles">IncludedFiles</a></code> | <code>*[]*string</code> | ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.location">Location</a></code> | <code>*string</code> | The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.name">Name</a></code> | <code>*string</code> | Name of the trigger. Must be unique within the project. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#project GoogleCloudbuildTrigger#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.pubsubConfig">PubsubConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfig">GoogleCloudbuildTriggerPubsubConfig</a></code> | pubsub_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.repositoryEventConfig">RepositoryEventConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfig">GoogleCloudbuildTriggerRepositoryEventConfig</a></code> | repository_event_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The service account used for all user-controlled operations including triggers.patch, triggers.run, builds.create, and builds.cancel. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.sourceToBuild">SourceToBuild</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuild">GoogleCloudbuildTriggerSourceToBuild</a></code> | source_to_build block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.substitutions">Substitutions</a></code> | <code>*map[string]*string</code> | Substitutions data for Build resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Tags for annotation of a BuildTrigger. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeouts">GoogleCloudbuildTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.triggerTemplate">TriggerTemplate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate">GoogleCloudbuildTriggerTriggerTemplate</a></code> | trigger_template block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.webhookConfig">WebhookConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfig">GoogleCloudbuildTriggerWebhookConfig</a></code> | webhook_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApprovalConfig`<sup>Optional</sup> <a name="ApprovalConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.approvalConfig"></a>

```go
ApprovalConfig GoogleCloudbuildTriggerApprovalConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfig">GoogleCloudbuildTriggerApprovalConfig</a>

approval_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#approval_config GoogleCloudbuildTrigger#approval_config}

---

##### `BitbucketServerTriggerConfig`<sup>Optional</sup> <a name="BitbucketServerTriggerConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.bitbucketServerTriggerConfig"></a>

```go
BitbucketServerTriggerConfig GoogleCloudbuildTriggerBitbucketServerTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfig">GoogleCloudbuildTriggerBitbucketServerTriggerConfig</a>

bitbucket_server_trigger_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#bitbucket_server_trigger_config GoogleCloudbuildTrigger#bitbucket_server_trigger_config}

---

##### `BuildAttribute`<sup>Optional</sup> <a name="BuildAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.buildAttribute"></a>

```go
BuildAttribute GoogleCloudbuildTriggerBuild
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild">GoogleCloudbuildTriggerBuild</a>

build block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#build GoogleCloudbuildTrigger#build}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-readable description of the trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#description GoogleCloudbuildTrigger#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the trigger is disabled or not. If true, the trigger will never result in a build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#disabled GoogleCloudbuildTrigger#disabled}

---

##### `Filename`<sup>Optional</sup> <a name="Filename" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.filename"></a>

```go
Filename *string
```

- *Type:* *string

Path, from the source root, to a file whose contents is used for the template.

Either a filename or build template must be provided. Set this only when using trigger_template or github.
When using Pub/Sub, Webhook or Manual set the file name using git_file_source instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#filename GoogleCloudbuildTrigger#filename}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

A Common Expression Language string. Used only with Pub/Sub and Webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#filter GoogleCloudbuildTrigger#filter}

---

##### `GitFileSource`<sup>Optional</sup> <a name="GitFileSource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.gitFileSource"></a>

```go
GitFileSource GoogleCloudbuildTriggerGitFileSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource">GoogleCloudbuildTriggerGitFileSource</a>

git_file_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#git_file_source GoogleCloudbuildTrigger#git_file_source}

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.github"></a>

```go
Github GoogleCloudbuildTriggerGithub
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithub">GoogleCloudbuildTriggerGithub</a>

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#github GoogleCloudbuildTrigger#github}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#id GoogleCloudbuildTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoredFiles`<sup>Optional</sup> <a name="IgnoredFiles" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.ignoredFiles"></a>

```go
IgnoredFiles *[]*string
```

- *Type:* *[]*string

ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'.

If ignoredFiles and changed files are both empty, then they are not
used to determine whether or not to trigger a build.

If ignoredFiles is not empty, then we ignore any files that match any
of the ignored_file globs. If the change has no files that are outside
of the ignoredFiles globs, then we do not trigger a build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#ignored_files GoogleCloudbuildTrigger#ignored_files}

---

##### `IncludeBuildLogs`<sup>Optional</sup> <a name="IncludeBuildLogs" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.includeBuildLogs"></a>

```go
IncludeBuildLogs *string
```

- *Type:* *string

Build logs will be sent back to GitHub as part of the checkrun result.

Values can be INCLUDE_BUILD_LOGS_UNSPECIFIED or
INCLUDE_BUILD_LOGS_WITH_STATUS Possible values: ["INCLUDE_BUILD_LOGS_UNSPECIFIED", "INCLUDE_BUILD_LOGS_WITH_STATUS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#include_build_logs GoogleCloudbuildTrigger#include_build_logs}

---

##### `IncludedFiles`<sup>Optional</sup> <a name="IncludedFiles" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.includedFiles"></a>

```go
IncludedFiles *[]*string
```

- *Type:* *[]*string

ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'.

If any of the files altered in the commit pass the ignoredFiles filter
and includedFiles is empty, then as far as this filter is concerned, we
should trigger the build.

If any of the files altered in the commit pass the ignoredFiles filter
and includedFiles is not empty, then we make sure that at least one of
those files matches a includedFiles glob. If not, then we do not trigger
a build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#included_files GoogleCloudbuildTrigger#included_files}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#location GoogleCloudbuildTrigger#location}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the trigger. Must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#name GoogleCloudbuildTrigger#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#project GoogleCloudbuildTrigger#project}.

---

##### `PubsubConfig`<sup>Optional</sup> <a name="PubsubConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.pubsubConfig"></a>

```go
PubsubConfig GoogleCloudbuildTriggerPubsubConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfig">GoogleCloudbuildTriggerPubsubConfig</a>

pubsub_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#pubsub_config GoogleCloudbuildTrigger#pubsub_config}

---

##### `RepositoryEventConfig`<sup>Optional</sup> <a name="RepositoryEventConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.repositoryEventConfig"></a>

```go
RepositoryEventConfig GoogleCloudbuildTriggerRepositoryEventConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfig">GoogleCloudbuildTriggerRepositoryEventConfig</a>

repository_event_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#repository_event_config GoogleCloudbuildTrigger#repository_event_config}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The service account used for all user-controlled operations including triggers.patch, triggers.run, builds.create, and builds.cancel.

If no service account is set, then the standard Cloud Build service account
([PROJECT_NUM]@system.gserviceaccount.com) will be used instead.

Format: projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#service_account GoogleCloudbuildTrigger#service_account}

---

##### `SourceToBuild`<sup>Optional</sup> <a name="SourceToBuild" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.sourceToBuild"></a>

```go
SourceToBuild GoogleCloudbuildTriggerSourceToBuild
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuild">GoogleCloudbuildTriggerSourceToBuild</a>

source_to_build block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#source_to_build GoogleCloudbuildTrigger#source_to_build}

---

##### `Substitutions`<sup>Optional</sup> <a name="Substitutions" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.substitutions"></a>

```go
Substitutions *map[string]*string
```

- *Type:* *map[string]*string

Substitutions data for Build resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#substitutions GoogleCloudbuildTrigger#substitutions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Tags for annotation of a BuildTrigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#tags GoogleCloudbuildTrigger#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.timeouts"></a>

```go
Timeouts GoogleCloudbuildTriggerTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeouts">GoogleCloudbuildTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#timeouts GoogleCloudbuildTrigger#timeouts}

---

##### `TriggerTemplate`<sup>Optional</sup> <a name="TriggerTemplate" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.triggerTemplate"></a>

```go
TriggerTemplate GoogleCloudbuildTriggerTriggerTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate">GoogleCloudbuildTriggerTriggerTemplate</a>

trigger_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#trigger_template GoogleCloudbuildTrigger#trigger_template}

---

##### `WebhookConfig`<sup>Optional</sup> <a name="WebhookConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerConfig.property.webhookConfig"></a>

```go
WebhookConfig GoogleCloudbuildTriggerWebhookConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfig">GoogleCloudbuildTriggerWebhookConfig</a>

webhook_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#webhook_config GoogleCloudbuildTrigger#webhook_config}

---

### GoogleCloudbuildTriggerGitFileSource <a name="GoogleCloudbuildTriggerGitFileSource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerGitFileSource {
	Path: *string,
	RepoType: *string,
	BitbucketServerConfig: *string,
	GithubEnterpriseConfig: *string,
	Repository: *string,
	Revision: *string,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource.property.path">Path</a></code> | <code>*string</code> | The path of the file, with the repo root as the root of the path. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource.property.repoType">RepoType</a></code> | <code>*string</code> | The type of the repo, since it may not be explicit from the repo field (e.g from a URL). Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource.property.bitbucketServerConfig">BitbucketServerConfig</a></code> | <code>*string</code> | The full resource name of the bitbucket server config. Format: projects/{project}/locations/{location}/bitbucketServerConfigs/{id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code>*string</code> | The full resource name of the github enterprise config. Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource.property.repository">Repository</a></code> | <code>*string</code> | The fully qualified resource name of the Repo API repository. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource.property.revision">Revision</a></code> | <code>*string</code> | The branch, tag, arbitrary ref, or SHA version of the repo to use when resolving the filename (optional). |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource.property.uri">Uri</a></code> | <code>*string</code> | The URI of the repo (optional). |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource.property.path"></a>

```go
Path *string
```

- *Type:* *string

The path of the file, with the repo root as the root of the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#path GoogleCloudbuildTrigger#path}

---

##### `RepoType`<sup>Required</sup> <a name="RepoType" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource.property.repoType"></a>

```go
RepoType *string
```

- *Type:* *string

The type of the repo, since it may not be explicit from the repo field (e.g from a URL). Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#repo_type GoogleCloudbuildTrigger#repo_type}

---

##### `BitbucketServerConfig`<sup>Optional</sup> <a name="BitbucketServerConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource.property.bitbucketServerConfig"></a>

```go
BitbucketServerConfig *string
```

- *Type:* *string

The full resource name of the bitbucket server config. Format: projects/{project}/locations/{location}/bitbucketServerConfigs/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#bitbucket_server_config GoogleCloudbuildTrigger#bitbucket_server_config}

---

##### `GithubEnterpriseConfig`<sup>Optional</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource.property.githubEnterpriseConfig"></a>

```go
GithubEnterpriseConfig *string
```

- *Type:* *string

The full resource name of the github enterprise config. Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#github_enterprise_config GoogleCloudbuildTrigger#github_enterprise_config}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The fully qualified resource name of the Repo API repository.

The fully qualified resource name of the Repo API repository.
If unspecified, the repo from which the trigger invocation originated is assumed to be the repo from which to read the specified path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#repository GoogleCloudbuildTrigger#repository}

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource.property.revision"></a>

```go
Revision *string
```

- *Type:* *string

The branch, tag, arbitrary ref, or SHA version of the repo to use when resolving the filename (optional).

This field respects the same syntax/resolution as described here: https://git-scm.com/docs/gitrevisions
If unspecified, the revision from which the trigger invocation originated is assumed to be the revision from which to read the specified path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#revision GoogleCloudbuildTrigger#revision}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The URI of the repo (optional).

If unspecified, the repo from which the trigger
invocation originated is assumed to be the repo from which to read the specified path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#uri GoogleCloudbuildTrigger#uri}

---

### GoogleCloudbuildTriggerGithub <a name="GoogleCloudbuildTriggerGithub" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithub.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerGithub {
	EnterpriseConfigResourceName: *string,
	Name: *string,
	Owner: *string,
	PullRequest: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequest,
	Push: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPush,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithub.property.enterpriseConfigResourceName">EnterpriseConfigResourceName</a></code> | <code>*string</code> | The resource name of the github enterprise config that should be applied to this installation. For example: "projects/{$projectId}/locations/{$locationId}/githubEnterpriseConfigs/{$configId}". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithub.property.name">Name</a></code> | <code>*string</code> | Name of the repository. For example: The name for https://github.com/googlecloudplatform/cloud-builders is "cloud-builders". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithub.property.owner">Owner</a></code> | <code>*string</code> | Owner of the repository. For example: The owner for https://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithub.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequest">GoogleCloudbuildTriggerGithubPullRequest</a></code> | pull_request block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithub.property.push">Push</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPush">GoogleCloudbuildTriggerGithubPush</a></code> | push block. |

---

##### `EnterpriseConfigResourceName`<sup>Optional</sup> <a name="EnterpriseConfigResourceName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithub.property.enterpriseConfigResourceName"></a>

```go
EnterpriseConfigResourceName *string
```

- *Type:* *string

The resource name of the github enterprise config that should be applied to this installation. For example: "projects/{$projectId}/locations/{$locationId}/githubEnterpriseConfigs/{$configId}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#enterprise_config_resource_name GoogleCloudbuildTrigger#enterprise_config_resource_name}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithub.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the repository. For example: The name for https://github.com/googlecloudplatform/cloud-builders is "cloud-builders".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#name GoogleCloudbuildTrigger#name}

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithub.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Owner of the repository. For example: The owner for https://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#owner GoogleCloudbuildTrigger#owner}

---

##### `PullRequest`<sup>Optional</sup> <a name="PullRequest" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithub.property.pullRequest"></a>

```go
PullRequest GoogleCloudbuildTriggerGithubPullRequest
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequest">GoogleCloudbuildTriggerGithubPullRequest</a>

pull_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#pull_request GoogleCloudbuildTrigger#pull_request}

---

##### `Push`<sup>Optional</sup> <a name="Push" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithub.property.push"></a>

```go
Push GoogleCloudbuildTriggerGithubPush
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPush">GoogleCloudbuildTriggerGithubPush</a>

push block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#push GoogleCloudbuildTrigger#push}

---

### GoogleCloudbuildTriggerGithubPullRequest <a name="GoogleCloudbuildTriggerGithubPullRequest" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerGithubPullRequest {
	Branch: *string,
	CommentControl: *string,
	InvertRegex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequest.property.branch">Branch</a></code> | <code>*string</code> | Regex of branches to match. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequest.property.commentControl">CommentControl</a></code> | <code>*string</code> | Whether to block builds on a "/gcbrun" comment from a repository owner or collaborator. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequest.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | If true, branches that do NOT match the git_ref will trigger a build. |

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequest.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

Regex of branches to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#branch GoogleCloudbuildTrigger#branch}

---

##### `CommentControl`<sup>Optional</sup> <a name="CommentControl" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequest.property.commentControl"></a>

```go
CommentControl *string
```

- *Type:* *string

Whether to block builds on a "/gcbrun" comment from a repository owner or collaborator. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#comment_control GoogleCloudbuildTrigger#comment_control}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequest.property.invertRegex"></a>

```go
InvertRegex interface{}
```

- *Type:* interface{}

If true, branches that do NOT match the git_ref will trigger a build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#invert_regex GoogleCloudbuildTrigger#invert_regex}

---

### GoogleCloudbuildTriggerGithubPush <a name="GoogleCloudbuildTriggerGithubPush" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPush.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerGithubPush {
	Branch: *string,
	InvertRegex: interface{},
	Tag: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPush.property.branch">Branch</a></code> | <code>*string</code> | Regex of branches to match.  Specify only one of branch or tag. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPush.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | When true, only trigger a build if the revision regex does NOT match the git_ref regex. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPush.property.tag">Tag</a></code> | <code>*string</code> | Regex of tags to match.  Specify only one of branch or tag. |

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPush.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

Regex of branches to match.  Specify only one of branch or tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#branch GoogleCloudbuildTrigger#branch}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPush.property.invertRegex"></a>

```go
InvertRegex interface{}
```

- *Type:* interface{}

When true, only trigger a build if the revision regex does NOT match the git_ref regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#invert_regex GoogleCloudbuildTrigger#invert_regex}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPush.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

Regex of tags to match.  Specify only one of branch or tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#tag GoogleCloudbuildTrigger#tag}

---

### GoogleCloudbuildTriggerPubsubConfig <a name="GoogleCloudbuildTriggerPubsubConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerPubsubConfig {
	Topic: *string,
	ServiceAccountEmail: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfig.property.topic">Topic</a></code> | <code>*string</code> | The name of the topic from which this subscription is receiving messages. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | Service account that will make the push request. |

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfig.property.topic"></a>

```go
Topic *string
```

- *Type:* *string

The name of the topic from which this subscription is receiving messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#topic GoogleCloudbuildTrigger#topic}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfig.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

Service account that will make the push request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#service_account_email GoogleCloudbuildTrigger#service_account_email}

---

### GoogleCloudbuildTriggerRepositoryEventConfig <a name="GoogleCloudbuildTriggerRepositoryEventConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerRepositoryEventConfig {
	PullRequest: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequest,
	Push: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPush,
	Repository: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfig.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequest">GoogleCloudbuildTriggerRepositoryEventConfigPullRequest</a></code> | pull_request block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfig.property.push">Push</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPush">GoogleCloudbuildTriggerRepositoryEventConfigPush</a></code> | push block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfig.property.repository">Repository</a></code> | <code>*string</code> | The resource name of the Repo API resource. |

---

##### `PullRequest`<sup>Optional</sup> <a name="PullRequest" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfig.property.pullRequest"></a>

```go
PullRequest GoogleCloudbuildTriggerRepositoryEventConfigPullRequest
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequest">GoogleCloudbuildTriggerRepositoryEventConfigPullRequest</a>

pull_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#pull_request GoogleCloudbuildTrigger#pull_request}

---

##### `Push`<sup>Optional</sup> <a name="Push" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfig.property.push"></a>

```go
Push GoogleCloudbuildTriggerRepositoryEventConfigPush
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPush">GoogleCloudbuildTriggerRepositoryEventConfigPush</a>

push block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#push GoogleCloudbuildTrigger#push}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The resource name of the Repo API resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#repository GoogleCloudbuildTrigger#repository}

---

### GoogleCloudbuildTriggerRepositoryEventConfigPullRequest <a name="GoogleCloudbuildTriggerRepositoryEventConfigPullRequest" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequest {
	Branch: *string,
	CommentControl: *string,
	InvertRegex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequest.property.branch">Branch</a></code> | <code>*string</code> | Regex of branches to match. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequest.property.commentControl">CommentControl</a></code> | <code>*string</code> | Configure builds to run whether a repository owner or collaborator need to comment '/gcbrun'. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequest.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | If true, branches that do NOT match the git_ref will trigger a build. |

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequest.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

Regex of branches to match.

The syntax of the regular expressions accepted is the syntax accepted by
RE2 and described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#branch GoogleCloudbuildTrigger#branch}

---

##### `CommentControl`<sup>Optional</sup> <a name="CommentControl" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequest.property.commentControl"></a>

```go
CommentControl *string
```

- *Type:* *string

Configure builds to run whether a repository owner or collaborator need to comment '/gcbrun'. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#comment_control GoogleCloudbuildTrigger#comment_control}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequest.property.invertRegex"></a>

```go
InvertRegex interface{}
```

- *Type:* interface{}

If true, branches that do NOT match the git_ref will trigger a build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#invert_regex GoogleCloudbuildTrigger#invert_regex}

---

### GoogleCloudbuildTriggerRepositoryEventConfigPush <a name="GoogleCloudbuildTriggerRepositoryEventConfigPush" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPush.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerRepositoryEventConfigPush {
	Branch: *string,
	InvertRegex: interface{},
	Tag: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPush.property.branch">Branch</a></code> | <code>*string</code> | Regex of branches to match. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPush.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | If true, only trigger a build if the revision regex does NOT match the git_ref regex. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPush.property.tag">Tag</a></code> | <code>*string</code> | Regex of tags to match. |

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPush.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

Regex of branches to match.

The syntax of the regular expressions accepted is the syntax accepted by
RE2 and described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#branch GoogleCloudbuildTrigger#branch}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPush.property.invertRegex"></a>

```go
InvertRegex interface{}
```

- *Type:* interface{}

If true, only trigger a build if the revision regex does NOT match the git_ref regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#invert_regex GoogleCloudbuildTrigger#invert_regex}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPush.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

Regex of tags to match.

The syntax of the regular expressions accepted is the syntax accepted by
RE2 and described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#tag GoogleCloudbuildTrigger#tag}

---

### GoogleCloudbuildTriggerSourceToBuild <a name="GoogleCloudbuildTriggerSourceToBuild" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuild"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuild.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerSourceToBuild {
	Ref: *string,
	RepoType: *string,
	BitbucketServerConfig: *string,
	GithubEnterpriseConfig: *string,
	Repository: *string,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuild.property.ref">Ref</a></code> | <code>*string</code> | The branch or tag to use. Must start with "refs/" (required). |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuild.property.repoType">RepoType</a></code> | <code>*string</code> | The type of the repo, since it may not be explicit from the repo field (e.g from a URL). Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuild.property.bitbucketServerConfig">BitbucketServerConfig</a></code> | <code>*string</code> | The full resource name of the bitbucket server config. Format: projects/{project}/locations/{location}/bitbucketServerConfigs/{id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuild.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code>*string</code> | The full resource name of the github enterprise config. Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuild.property.repository">Repository</a></code> | <code>*string</code> | The qualified resource name of the Repo API repository. Either uri or repository can be specified and is required. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuild.property.uri">Uri</a></code> | <code>*string</code> | The URI of the repo. |

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuild.property.ref"></a>

```go
Ref *string
```

- *Type:* *string

The branch or tag to use. Must start with "refs/" (required).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#ref GoogleCloudbuildTrigger#ref}

---

##### `RepoType`<sup>Required</sup> <a name="RepoType" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuild.property.repoType"></a>

```go
RepoType *string
```

- *Type:* *string

The type of the repo, since it may not be explicit from the repo field (e.g from a URL). Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#repo_type GoogleCloudbuildTrigger#repo_type}

---

##### `BitbucketServerConfig`<sup>Optional</sup> <a name="BitbucketServerConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuild.property.bitbucketServerConfig"></a>

```go
BitbucketServerConfig *string
```

- *Type:* *string

The full resource name of the bitbucket server config. Format: projects/{project}/locations/{location}/bitbucketServerConfigs/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#bitbucket_server_config GoogleCloudbuildTrigger#bitbucket_server_config}

---

##### `GithubEnterpriseConfig`<sup>Optional</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuild.property.githubEnterpriseConfig"></a>

```go
GithubEnterpriseConfig *string
```

- *Type:* *string

The full resource name of the github enterprise config. Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#github_enterprise_config GoogleCloudbuildTrigger#github_enterprise_config}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuild.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The qualified resource name of the Repo API repository. Either uri or repository can be specified and is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#repository GoogleCloudbuildTrigger#repository}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuild.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The URI of the repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#uri GoogleCloudbuildTrigger#uri}

---

### GoogleCloudbuildTriggerTimeouts <a name="GoogleCloudbuildTriggerTimeouts" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#create GoogleCloudbuildTrigger#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#delete GoogleCloudbuildTrigger#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#update GoogleCloudbuildTrigger#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#create GoogleCloudbuildTrigger#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#delete GoogleCloudbuildTrigger#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#update GoogleCloudbuildTrigger#update}.

---

### GoogleCloudbuildTriggerTriggerTemplate <a name="GoogleCloudbuildTriggerTriggerTemplate" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerTriggerTemplate {
	BranchName: *string,
	CommitSha: *string,
	Dir: *string,
	InvertRegex: interface{},
	ProjectId: *string,
	RepoName: *string,
	TagName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate.property.branchName">BranchName</a></code> | <code>*string</code> | Name of the branch to build. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate.property.commitSha">CommitSha</a></code> | <code>*string</code> | Explicit commit SHA to build. Exactly one of a branch name, tag, or commit SHA must be provided. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate.property.dir">Dir</a></code> | <code>*string</code> | Directory, relative to the source root, in which to run the build. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | Only trigger a build if the revision regex does NOT match the revision regex. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate.property.projectId">ProjectId</a></code> | <code>*string</code> | ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate.property.repoName">RepoName</a></code> | <code>*string</code> | Name of the Cloud Source Repository. If omitted, the name "default" is assumed. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate.property.tagName">TagName</a></code> | <code>*string</code> | Name of the tag to build. |

---

##### `BranchName`<sup>Optional</sup> <a name="BranchName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate.property.branchName"></a>

```go
BranchName *string
```

- *Type:* *string

Name of the branch to build.

Exactly one a of branch name, tag, or commit SHA must be provided.
This field is a regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#branch_name GoogleCloudbuildTrigger#branch_name}

---

##### `CommitSha`<sup>Optional</sup> <a name="CommitSha" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate.property.commitSha"></a>

```go
CommitSha *string
```

- *Type:* *string

Explicit commit SHA to build. Exactly one of a branch name, tag, or commit SHA must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#commit_sha GoogleCloudbuildTrigger#commit_sha}

---

##### `Dir`<sup>Optional</sup> <a name="Dir" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate.property.dir"></a>

```go
Dir *string
```

- *Type:* *string

Directory, relative to the source root, in which to run the build.

This must be a relative path. If a step's dir is specified and
is an absolute path, this value is ignored for that step's
execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#dir GoogleCloudbuildTrigger#dir}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate.property.invertRegex"></a>

```go
InvertRegex interface{}
```

- *Type:* interface{}

Only trigger a build if the revision regex does NOT match the revision regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#invert_regex GoogleCloudbuildTrigger#invert_regex}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#project_id GoogleCloudbuildTrigger#project_id}

---

##### `RepoName`<sup>Optional</sup> <a name="RepoName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate.property.repoName"></a>

```go
RepoName *string
```

- *Type:* *string

Name of the Cloud Source Repository. If omitted, the name "default" is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#repo_name GoogleCloudbuildTrigger#repo_name}

---

##### `TagName`<sup>Optional</sup> <a name="TagName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate.property.tagName"></a>

```go
TagName *string
```

- *Type:* *string

Name of the tag to build.

Exactly one of a branch name, tag, or commit SHA must be provided.
This field is a regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#tag_name GoogleCloudbuildTrigger#tag_name}

---

### GoogleCloudbuildTriggerWebhookConfig <a name="GoogleCloudbuildTriggerWebhookConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

&googlecloudbuildtrigger.GoogleCloudbuildTriggerWebhookConfig {
	Secret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfig.property.secret">Secret</a></code> | <code>*string</code> | Resource name for the secret required as a URL parameter. |

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfig.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

Resource name for the secret required as a URL parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuild_trigger#secret GoogleCloudbuildTrigger#secret}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudbuildTriggerApprovalConfigOutputReference <a name="GoogleCloudbuildTriggerApprovalConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerApprovalConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerApprovalConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.resetApprovalRequired">ResetApprovalRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApprovalRequired` <a name="ResetApprovalRequired" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.resetApprovalRequired"></a>

```go
func ResetApprovalRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.property.approvalRequiredInput">ApprovalRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.property.approvalRequired">ApprovalRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfig">GoogleCloudbuildTriggerApprovalConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApprovalRequiredInput`<sup>Optional</sup> <a name="ApprovalRequiredInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.property.approvalRequiredInput"></a>

```go
func ApprovalRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `ApprovalRequired`<sup>Required</sup> <a name="ApprovalRequired" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.property.approvalRequired"></a>

```go
func ApprovalRequired() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerApprovalConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerApprovalConfig">GoogleCloudbuildTriggerApprovalConfig</a>

---


### GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference <a name="GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPullRequest">PutPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPush">PutPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resetPullRequest">ResetPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resetPush">ResetPush</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPullRequest` <a name="PutPullRequest" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPullRequest"></a>

```go
func PutPullRequest(value GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPullRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest">GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a>

---

##### `PutPush` <a name="PutPush" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPush"></a>

```go
func PutPush(value GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPush.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush">GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush</a>

---

##### `ResetPullRequest` <a name="ResetPullRequest" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resetPullRequest"></a>

```go
func ResetPullRequest()
```

##### `ResetPush` <a name="ResetPush" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resetPush"></a>

```go
func ResetPush()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference">GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.push">Push</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference">GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.bitbucketServerConfigResourceInput">BitbucketServerConfigResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.projectKeyInput">ProjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pullRequestInput">PullRequestInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest">GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pushInput">PushInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush">GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.repoSlugInput">RepoSlugInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.bitbucketServerConfigResource">BitbucketServerConfigResource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.projectKey">ProjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.repoSlug">RepoSlug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfig">GoogleCloudbuildTriggerBitbucketServerTriggerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PullRequest`<sup>Required</sup> <a name="PullRequest" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pullRequest"></a>

```go
func PullRequest() GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference">GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference</a>

---

##### `Push`<sup>Required</sup> <a name="Push" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.push"></a>

```go
func Push() GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference">GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference</a>

---

##### `BitbucketServerConfigResourceInput`<sup>Optional</sup> <a name="BitbucketServerConfigResourceInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.bitbucketServerConfigResourceInput"></a>

```go
func BitbucketServerConfigResourceInput() *string
```

- *Type:* *string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.projectKeyInput"></a>

```go
func ProjectKeyInput() *string
```

- *Type:* *string

---

##### `PullRequestInput`<sup>Optional</sup> <a name="PullRequestInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pullRequestInput"></a>

```go
func PullRequestInput() GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest">GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a>

---

##### `PushInput`<sup>Optional</sup> <a name="PushInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pushInput"></a>

```go
func PushInput() GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush">GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush</a>

---

##### `RepoSlugInput`<sup>Optional</sup> <a name="RepoSlugInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.repoSlugInput"></a>

```go
func RepoSlugInput() *string
```

- *Type:* *string

---

##### `BitbucketServerConfigResource`<sup>Required</sup> <a name="BitbucketServerConfigResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.bitbucketServerConfigResource"></a>

```go
func BitbucketServerConfigResource() *string
```

- *Type:* *string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.projectKey"></a>

```go
func ProjectKey() *string
```

- *Type:* *string

---

##### `RepoSlug`<sup>Required</sup> <a name="RepoSlug" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.repoSlug"></a>

```go
func RepoSlug() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerBitbucketServerTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfig">GoogleCloudbuildTriggerBitbucketServerTriggerConfig</a>

---


### GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference <a name="GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resetCommentControl">ResetCommentControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommentControl` <a name="ResetCommentControl" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resetCommentControl"></a>

```go
func ResetCommentControl()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resetInvertRegex"></a>

```go
func ResetInvertRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.commentControlInput">CommentControlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.commentControl">CommentControl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest">GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `CommentControlInput`<sup>Optional</sup> <a name="CommentControlInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.commentControlInput"></a>

```go
func CommentControlInput() *string
```

- *Type:* *string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.invertRegexInput"></a>

```go
func InvertRegexInput() interface{}
```

- *Type:* interface{}

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `CommentControl`<sup>Required</sup> <a name="CommentControl" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.commentControl"></a>

```go
func CommentControl() *string
```

- *Type:* *string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.invertRegex"></a>

```go
func InvertRegex() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest">GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a>

---


### GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference <a name="GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetBranch"></a>

```go
func ResetBranch()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetInvertRegex"></a>

```go
func ResetInvertRegex()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetTag"></a>

```go
func ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush">GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.invertRegexInput"></a>

```go
func InvertRegexInput() interface{}
```

- *Type:* interface{}

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.invertRegex"></a>

```go
func InvertRegex() interface{}
```

- *Type:* interface{}

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush">GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush</a>

---


### GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList <a name="GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.get"></a>

```go
func Get(index *f64) GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference <a name="GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetArtifactId">ResetArtifactId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArtifactId` <a name="ResetArtifactId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetArtifactId"></a>

```go
func ResetArtifactId()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetRepository"></a>

```go
func ResetRepository()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.artifactIdInput">ArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactIdInput`<sup>Optional</sup> <a name="ArtifactIdInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.artifactIdInput"></a>

```go
func ArtifactIdInput() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList <a name="GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.get"></a>

```go
func Get(index *f64) GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference <a name="GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resetPackagePath">ResetPackagePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPackagePath` <a name="ResetPackagePath" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resetPackagePath"></a>

```go
func ResetPackagePath()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resetRepository"></a>

```go
func ResetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.packagePathInput">PackagePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.packagePath">PackagePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PackagePathInput`<sup>Optional</sup> <a name="PackagePathInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.packagePathInput"></a>

```go
func PackagePathInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `PackagePath`<sup>Required</sup> <a name="PackagePath" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.packagePath"></a>

```go
func PackagePath() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference <a name="GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.resetPaths">ResetPaths</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetPaths` <a name="ResetPaths" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.resetPaths"></a>

```go
func ResetPaths()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.timing">Timing</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList">GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.pathsInput">PathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.paths">Paths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjects">GoogleCloudbuildTriggerBuildArtifactsObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Timing`<sup>Required</sup> <a name="Timing" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.timing"></a>

```go
func Timing() GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList">GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.pathsInput"></a>

```go
func PathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.paths"></a>

```go
func Paths() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerBuildArtifactsObjects
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjects">GoogleCloudbuildTriggerBuildArtifactsObjects</a>

---


### GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList <a name="GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.get"></a>

```go
func Get(index *f64) GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference <a name="GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTiming">GoogleCloudbuildTriggerBuildArtifactsObjectsTiming</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerBuildArtifactsObjectsTiming
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsTiming">GoogleCloudbuildTriggerBuildArtifactsObjectsTiming</a>

---


### GoogleCloudbuildTriggerBuildArtifactsOutputReference <a name="GoogleCloudbuildTriggerBuildArtifactsOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildArtifactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerBuildArtifactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.putMavenArtifacts">PutMavenArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.putNpmPackages">PutNpmPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.putObjects">PutObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.putPythonPackages">PutPythonPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.resetImages">ResetImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.resetMavenArtifacts">ResetMavenArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.resetNpmPackages">ResetNpmPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.resetObjects">ResetObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.resetPythonPackages">ResetPythonPackages</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMavenArtifacts` <a name="PutMavenArtifacts" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.putMavenArtifacts"></a>

```go
func PutMavenArtifacts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.putMavenArtifacts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNpmPackages` <a name="PutNpmPackages" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.putNpmPackages"></a>

```go
func PutNpmPackages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.putNpmPackages.parameter.value"></a>

- *Type:* interface{}

---

##### `PutObjects` <a name="PutObjects" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.putObjects"></a>

```go
func PutObjects(value GoogleCloudbuildTriggerBuildArtifactsObjects)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.putObjects.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjects">GoogleCloudbuildTriggerBuildArtifactsObjects</a>

---

##### `PutPythonPackages` <a name="PutPythonPackages" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.putPythonPackages"></a>

```go
func PutPythonPackages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.putPythonPackages.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetImages` <a name="ResetImages" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.resetImages"></a>

```go
func ResetImages()
```

##### `ResetMavenArtifacts` <a name="ResetMavenArtifacts" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.resetMavenArtifacts"></a>

```go
func ResetMavenArtifacts()
```

##### `ResetNpmPackages` <a name="ResetNpmPackages" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.resetNpmPackages"></a>

```go
func ResetNpmPackages()
```

##### `ResetObjects` <a name="ResetObjects" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.resetObjects"></a>

```go
func ResetObjects()
```

##### `ResetPythonPackages` <a name="ResetPythonPackages" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.resetPythonPackages"></a>

```go
func ResetPythonPackages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.mavenArtifacts">MavenArtifacts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList">GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.npmPackages">NpmPackages</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList">GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.objects">Objects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference">GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.pythonPackages">PythonPackages</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList">GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.imagesInput">ImagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.mavenArtifactsInput">MavenArtifactsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.npmPackagesInput">NpmPackagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.objectsInput">ObjectsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjects">GoogleCloudbuildTriggerBuildArtifactsObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.pythonPackagesInput">PythonPackagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.images">Images</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifacts">GoogleCloudbuildTriggerBuildArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MavenArtifacts`<sup>Required</sup> <a name="MavenArtifacts" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.mavenArtifacts"></a>

```go
func MavenArtifacts() GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList">GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList</a>

---

##### `NpmPackages`<sup>Required</sup> <a name="NpmPackages" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.npmPackages"></a>

```go
func NpmPackages() GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList">GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList</a>

---

##### `Objects`<sup>Required</sup> <a name="Objects" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.objects"></a>

```go
func Objects() GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference">GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference</a>

---

##### `PythonPackages`<sup>Required</sup> <a name="PythonPackages" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.pythonPackages"></a>

```go
func PythonPackages() GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList">GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList</a>

---

##### `ImagesInput`<sup>Optional</sup> <a name="ImagesInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.imagesInput"></a>

```go
func ImagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `MavenArtifactsInput`<sup>Optional</sup> <a name="MavenArtifactsInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.mavenArtifactsInput"></a>

```go
func MavenArtifactsInput() interface{}
```

- *Type:* interface{}

---

##### `NpmPackagesInput`<sup>Optional</sup> <a name="NpmPackagesInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.npmPackagesInput"></a>

```go
func NpmPackagesInput() interface{}
```

- *Type:* interface{}

---

##### `ObjectsInput`<sup>Optional</sup> <a name="ObjectsInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.objectsInput"></a>

```go
func ObjectsInput() GoogleCloudbuildTriggerBuildArtifactsObjects
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsObjects">GoogleCloudbuildTriggerBuildArtifactsObjects</a>

---

##### `PythonPackagesInput`<sup>Optional</sup> <a name="PythonPackagesInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.pythonPackagesInput"></a>

```go
func PythonPackagesInput() interface{}
```

- *Type:* interface{}

---

##### `Images`<sup>Required</sup> <a name="Images" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.images"></a>

```go
func Images() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerBuildArtifacts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifacts">GoogleCloudbuildTriggerBuildArtifacts</a>

---


### GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList <a name="GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.get"></a>

```go
func Get(index *f64) GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference <a name="GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resetPaths">ResetPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPaths` <a name="ResetPaths" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resetPaths"></a>

```go
func ResetPaths()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resetRepository"></a>

```go
func ResetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.pathsInput">PathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.paths">Paths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.pathsInput"></a>

```go
func PathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.paths"></a>

```go
func Paths() *[]*string
```

- *Type:* *[]*string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference <a name="GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.putSecretManager">PutSecretManager</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretManager` <a name="PutSecretManager" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.putSecretManager"></a>

```go
func PutSecretManager(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.putSecretManager.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManager">SecretManager</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList">GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManagerInput">SecretManagerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecrets">GoogleCloudbuildTriggerBuildAvailableSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretManager`<sup>Required</sup> <a name="SecretManager" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManager"></a>

```go
func SecretManager() GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList">GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList</a>

---

##### `SecretManagerInput`<sup>Optional</sup> <a name="SecretManagerInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManagerInput"></a>

```go
func SecretManagerInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerBuildAvailableSecrets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecrets">GoogleCloudbuildTriggerBuildAvailableSecrets</a>

---


### GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList <a name="GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.get"></a>

```go
func Get(index *f64) GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference <a name="GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.envInput">EnvInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionNameInput">VersionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.env">Env</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionName">VersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.envInput"></a>

```go
func EnvInput() *string
```

- *Type:* *string

---

##### `VersionNameInput`<sup>Optional</sup> <a name="VersionNameInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionNameInput"></a>

```go
func VersionNameInput() *string
```

- *Type:* *string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.env"></a>

```go
func Env() *string
```

- *Type:* *string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionName"></a>

```go
func VersionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudbuildTriggerBuildOptionsOutputReference <a name="GoogleCloudbuildTriggerBuildOptionsOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerBuildOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetDynamicSubstitutions">ResetDynamicSubstitutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetLogStreamingOption">ResetLogStreamingOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetRequestedVerifyOption">ResetRequestedVerifyOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetSecretEnv">ResetSecretEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetSourceProvenanceHash">ResetSourceProvenanceHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetSubstitutionOption">ResetSubstitutionOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetWorkerPool">ResetWorkerPool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVolumes` <a name="PutVolumes" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.putVolumes"></a>

```go
func PutVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.putVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetDiskSizeGb"></a>

```go
func ResetDiskSizeGb()
```

##### `ResetDynamicSubstitutions` <a name="ResetDynamicSubstitutions" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetDynamicSubstitutions"></a>

```go
func ResetDynamicSubstitutions()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetEnv"></a>

```go
func ResetEnv()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetLogging"></a>

```go
func ResetLogging()
```

##### `ResetLogStreamingOption` <a name="ResetLogStreamingOption" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetLogStreamingOption"></a>

```go
func ResetLogStreamingOption()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetMachineType"></a>

```go
func ResetMachineType()
```

##### `ResetRequestedVerifyOption` <a name="ResetRequestedVerifyOption" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetRequestedVerifyOption"></a>

```go
func ResetRequestedVerifyOption()
```

##### `ResetSecretEnv` <a name="ResetSecretEnv" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetSecretEnv"></a>

```go
func ResetSecretEnv()
```

##### `ResetSourceProvenanceHash` <a name="ResetSourceProvenanceHash" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetSourceProvenanceHash"></a>

```go
func ResetSourceProvenanceHash()
```

##### `ResetSubstitutionOption` <a name="ResetSubstitutionOption" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetSubstitutionOption"></a>

```go
func ResetSubstitutionOption()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetVolumes"></a>

```go
func ResetVolumes()
```

##### `ResetWorkerPool` <a name="ResetWorkerPool" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.resetWorkerPool"></a>

```go
func ResetWorkerPool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList">GoogleCloudbuildTriggerBuildOptionsVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutionsInput">DynamicSubstitutionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.envInput">EnvInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.loggingInput">LoggingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOptionInput">LogStreamingOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOptionInput">RequestedVerifyOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.secretEnvInput">SecretEnvInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHashInput">SourceProvenanceHashInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.substitutionOptionInput">SubstitutionOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.volumesInput">VolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.workerPoolInput">WorkerPoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutions">DynamicSubstitutions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.env">Env</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.logging">Logging</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOption">LogStreamingOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOption">RequestedVerifyOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.secretEnv">SecretEnv</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHash">SourceProvenanceHash</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.substitutionOption">SubstitutionOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.workerPool">WorkerPool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions">GoogleCloudbuildTriggerBuildOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.volumes"></a>

```go
func Volumes() GoogleCloudbuildTriggerBuildOptionsVolumesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList">GoogleCloudbuildTriggerBuildOptionsVolumesList</a>

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `DynamicSubstitutionsInput`<sup>Optional</sup> <a name="DynamicSubstitutionsInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutionsInput"></a>

```go
func DynamicSubstitutionsInput() interface{}
```

- *Type:* interface{}

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.envInput"></a>

```go
func EnvInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.loggingInput"></a>

```go
func LoggingInput() *string
```

- *Type:* *string

---

##### `LogStreamingOptionInput`<sup>Optional</sup> <a name="LogStreamingOptionInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOptionInput"></a>

```go
func LogStreamingOptionInput() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `RequestedVerifyOptionInput`<sup>Optional</sup> <a name="RequestedVerifyOptionInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOptionInput"></a>

```go
func RequestedVerifyOptionInput() *string
```

- *Type:* *string

---

##### `SecretEnvInput`<sup>Optional</sup> <a name="SecretEnvInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.secretEnvInput"></a>

```go
func SecretEnvInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceProvenanceHashInput`<sup>Optional</sup> <a name="SourceProvenanceHashInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHashInput"></a>

```go
func SourceProvenanceHashInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubstitutionOptionInput`<sup>Optional</sup> <a name="SubstitutionOptionInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.substitutionOptionInput"></a>

```go
func SubstitutionOptionInput() *string
```

- *Type:* *string

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.volumesInput"></a>

```go
func VolumesInput() interface{}
```

- *Type:* interface{}

---

##### `WorkerPoolInput`<sup>Optional</sup> <a name="WorkerPoolInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.workerPoolInput"></a>

```go
func WorkerPoolInput() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `DynamicSubstitutions`<sup>Required</sup> <a name="DynamicSubstitutions" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutions"></a>

```go
func DynamicSubstitutions() interface{}
```

- *Type:* interface{}

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.env"></a>

```go
func Env() *[]*string
```

- *Type:* *[]*string

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.logging"></a>

```go
func Logging() *string
```

- *Type:* *string

---

##### `LogStreamingOption`<sup>Required</sup> <a name="LogStreamingOption" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOption"></a>

```go
func LogStreamingOption() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `RequestedVerifyOption`<sup>Required</sup> <a name="RequestedVerifyOption" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOption"></a>

```go
func RequestedVerifyOption() *string
```

- *Type:* *string

---

##### `SecretEnv`<sup>Required</sup> <a name="SecretEnv" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.secretEnv"></a>

```go
func SecretEnv() *[]*string
```

- *Type:* *[]*string

---

##### `SourceProvenanceHash`<sup>Required</sup> <a name="SourceProvenanceHash" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHash"></a>

```go
func SourceProvenanceHash() *[]*string
```

- *Type:* *[]*string

---

##### `SubstitutionOption`<sup>Required</sup> <a name="SubstitutionOption" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.substitutionOption"></a>

```go
func SubstitutionOption() *string
```

- *Type:* *string

---

##### `WorkerPool`<sup>Required</sup> <a name="WorkerPool" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.workerPool"></a>

```go
func WorkerPool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerBuildOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions">GoogleCloudbuildTriggerBuildOptions</a>

---


### GoogleCloudbuildTriggerBuildOptionsVolumesList <a name="GoogleCloudbuildTriggerBuildOptionsVolumesList" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildOptionsVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudbuildTriggerBuildOptionsVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.get"></a>

```go
func Get(index *f64) GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference <a name="GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudbuildTriggerBuildOutputReference <a name="GoogleCloudbuildTriggerBuildOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerBuildOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.putArtifacts">PutArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.putAvailableSecrets">PutAvailableSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.putStep">PutStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resetArtifacts">ResetArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resetAvailableSecrets">ResetAvailableSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resetImages">ResetImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resetLogsBucket">ResetLogsBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resetQueueTtl">ResetQueueTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resetSubstitutions">ResetSubstitutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutArtifacts` <a name="PutArtifacts" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.putArtifacts"></a>

```go
func PutArtifacts(value GoogleCloudbuildTriggerBuildArtifacts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.putArtifacts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifacts">GoogleCloudbuildTriggerBuildArtifacts</a>

---

##### `PutAvailableSecrets` <a name="PutAvailableSecrets" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.putAvailableSecrets"></a>

```go
func PutAvailableSecrets(value GoogleCloudbuildTriggerBuildAvailableSecrets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.putAvailableSecrets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecrets">GoogleCloudbuildTriggerBuildAvailableSecrets</a>

---

##### `PutOptions` <a name="PutOptions" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.putOptions"></a>

```go
func PutOptions(value GoogleCloudbuildTriggerBuildOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions">GoogleCloudbuildTriggerBuildOptions</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.putSecret"></a>

```go
func PutSecret(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.putSecret.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.putSource"></a>

```go
func PutSource(value GoogleCloudbuildTriggerBuildSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSource">GoogleCloudbuildTriggerBuildSource</a>

---

##### `PutStep` <a name="PutStep" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.putStep"></a>

```go
func PutStep(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.putStep.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArtifacts` <a name="ResetArtifacts" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resetArtifacts"></a>

```go
func ResetArtifacts()
```

##### `ResetAvailableSecrets` <a name="ResetAvailableSecrets" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resetAvailableSecrets"></a>

```go
func ResetAvailableSecrets()
```

##### `ResetImages` <a name="ResetImages" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resetImages"></a>

```go
func ResetImages()
```

##### `ResetLogsBucket` <a name="ResetLogsBucket" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resetLogsBucket"></a>

```go
func ResetLogsBucket()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetQueueTtl` <a name="ResetQueueTtl" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resetQueueTtl"></a>

```go
func ResetQueueTtl()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resetSecret"></a>

```go
func ResetSecret()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resetSource"></a>

```go
func ResetSource()
```

##### `ResetSubstitutions` <a name="ResetSubstitutions" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resetSubstitutions"></a>

```go
func ResetSubstitutions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.artifacts">Artifacts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference">GoogleCloudbuildTriggerBuildArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.availableSecrets">AvailableSecrets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference">GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.options">Options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference">GoogleCloudbuildTriggerBuildOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList">GoogleCloudbuildTriggerBuildSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference">GoogleCloudbuildTriggerBuildSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.step">Step</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList">GoogleCloudbuildTriggerBuildStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.artifactsInput">ArtifactsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifacts">GoogleCloudbuildTriggerBuildArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.availableSecretsInput">AvailableSecretsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecrets">GoogleCloudbuildTriggerBuildAvailableSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.imagesInput">ImagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.logsBucketInput">LogsBucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.optionsInput">OptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions">GoogleCloudbuildTriggerBuildOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.queueTtlInput">QueueTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.secretInput">SecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSource">GoogleCloudbuildTriggerBuildSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.stepInput">StepInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.substitutionsInput">SubstitutionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.images">Images</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.logsBucket">LogsBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.queueTtl">QueueTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.substitutions">Substitutions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild">GoogleCloudbuildTriggerBuild</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Artifacts`<sup>Required</sup> <a name="Artifacts" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.artifacts"></a>

```go
func Artifacts() GoogleCloudbuildTriggerBuildArtifactsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifactsOutputReference">GoogleCloudbuildTriggerBuildArtifactsOutputReference</a>

---

##### `AvailableSecrets`<sup>Required</sup> <a name="AvailableSecrets" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.availableSecrets"></a>

```go
func AvailableSecrets() GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference">GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference</a>

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.options"></a>

```go
func Options() GoogleCloudbuildTriggerBuildOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptionsOutputReference">GoogleCloudbuildTriggerBuildOptionsOutputReference</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.secret"></a>

```go
func Secret() GoogleCloudbuildTriggerBuildSecretList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList">GoogleCloudbuildTriggerBuildSecretList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.source"></a>

```go
func Source() GoogleCloudbuildTriggerBuildSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference">GoogleCloudbuildTriggerBuildSourceOutputReference</a>

---

##### `Step`<sup>Required</sup> <a name="Step" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.step"></a>

```go
func Step() GoogleCloudbuildTriggerBuildStepList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList">GoogleCloudbuildTriggerBuildStepList</a>

---

##### `ArtifactsInput`<sup>Optional</sup> <a name="ArtifactsInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.artifactsInput"></a>

```go
func ArtifactsInput() GoogleCloudbuildTriggerBuildArtifacts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildArtifacts">GoogleCloudbuildTriggerBuildArtifacts</a>

---

##### `AvailableSecretsInput`<sup>Optional</sup> <a name="AvailableSecretsInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.availableSecretsInput"></a>

```go
func AvailableSecretsInput() GoogleCloudbuildTriggerBuildAvailableSecrets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildAvailableSecrets">GoogleCloudbuildTriggerBuildAvailableSecrets</a>

---

##### `ImagesInput`<sup>Optional</sup> <a name="ImagesInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.imagesInput"></a>

```go
func ImagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LogsBucketInput`<sup>Optional</sup> <a name="LogsBucketInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.logsBucketInput"></a>

```go
func LogsBucketInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.optionsInput"></a>

```go
func OptionsInput() GoogleCloudbuildTriggerBuildOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOptions">GoogleCloudbuildTriggerBuildOptions</a>

---

##### `QueueTtlInput`<sup>Optional</sup> <a name="QueueTtlInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.queueTtlInput"></a>

```go
func QueueTtlInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.secretInput"></a>

```go
func SecretInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.sourceInput"></a>

```go
func SourceInput() GoogleCloudbuildTriggerBuildSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSource">GoogleCloudbuildTriggerBuildSource</a>

---

##### `StepInput`<sup>Optional</sup> <a name="StepInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.stepInput"></a>

```go
func StepInput() interface{}
```

- *Type:* interface{}

---

##### `SubstitutionsInput`<sup>Optional</sup> <a name="SubstitutionsInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.substitutionsInput"></a>

```go
func SubstitutionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `Images`<sup>Required</sup> <a name="Images" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.images"></a>

```go
func Images() *[]*string
```

- *Type:* *[]*string

---

##### `LogsBucket`<sup>Required</sup> <a name="LogsBucket" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.logsBucket"></a>

```go
func LogsBucket() *string
```

- *Type:* *string

---

##### `QueueTtl`<sup>Required</sup> <a name="QueueTtl" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.queueTtl"></a>

```go
func QueueTtl() *string
```

- *Type:* *string

---

##### `Substitutions`<sup>Required</sup> <a name="Substitutions" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.substitutions"></a>

```go
func Substitutions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerBuild
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuild">GoogleCloudbuildTriggerBuild</a>

---


### GoogleCloudbuildTriggerBuildSecretList <a name="GoogleCloudbuildTriggerBuildSecretList" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildSecretList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudbuildTriggerBuildSecretList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.get"></a>

```go
func Get(index *f64) GoogleCloudbuildTriggerBuildSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudbuildTriggerBuildSecretOutputReference <a name="GoogleCloudbuildTriggerBuildSecretOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudbuildTriggerBuildSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.resetSecretEnv">ResetSecretEnv</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretEnv` <a name="ResetSecretEnv" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.resetSecretEnv"></a>

```go
func ResetSecretEnv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.property.secretEnvInput">SecretEnvInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.property.secretEnv">SecretEnv</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `SecretEnvInput`<sup>Optional</sup> <a name="SecretEnvInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.property.secretEnvInput"></a>

```go
func SecretEnvInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `SecretEnv`<sup>Required</sup> <a name="SecretEnv" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.property.secretEnv"></a>

```go
func SecretEnv() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudbuildTriggerBuildSourceOutputReference <a name="GoogleCloudbuildTriggerBuildSourceOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerBuildSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.putRepoSource">PutRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.putStorageSource">PutStorageSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.resetRepoSource">ResetRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.resetStorageSource">ResetStorageSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRepoSource` <a name="PutRepoSource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.putRepoSource"></a>

```go
func PutRepoSource(value GoogleCloudbuildTriggerBuildSourceRepoSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.putRepoSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource">GoogleCloudbuildTriggerBuildSourceRepoSource</a>

---

##### `PutStorageSource` <a name="PutStorageSource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.putStorageSource"></a>

```go
func PutStorageSource(value GoogleCloudbuildTriggerBuildSourceStorageSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.putStorageSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSource">GoogleCloudbuildTriggerBuildSourceStorageSource</a>

---

##### `ResetRepoSource` <a name="ResetRepoSource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.resetRepoSource"></a>

```go
func ResetRepoSource()
```

##### `ResetStorageSource` <a name="ResetStorageSource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.resetStorageSource"></a>

```go
func ResetStorageSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.property.repoSource">RepoSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference">GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.property.storageSource">StorageSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference">GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.property.repoSourceInput">RepoSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource">GoogleCloudbuildTriggerBuildSourceRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.property.storageSourceInput">StorageSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSource">GoogleCloudbuildTriggerBuildSourceStorageSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSource">GoogleCloudbuildTriggerBuildSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepoSource`<sup>Required</sup> <a name="RepoSource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.property.repoSource"></a>

```go
func RepoSource() GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference">GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference</a>

---

##### `StorageSource`<sup>Required</sup> <a name="StorageSource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.property.storageSource"></a>

```go
func StorageSource() GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference">GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference</a>

---

##### `RepoSourceInput`<sup>Optional</sup> <a name="RepoSourceInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.property.repoSourceInput"></a>

```go
func RepoSourceInput() GoogleCloudbuildTriggerBuildSourceRepoSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource">GoogleCloudbuildTriggerBuildSourceRepoSource</a>

---

##### `StorageSourceInput`<sup>Optional</sup> <a name="StorageSourceInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.property.storageSourceInput"></a>

```go
func StorageSourceInput() GoogleCloudbuildTriggerBuildSourceStorageSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSource">GoogleCloudbuildTriggerBuildSourceStorageSource</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerBuildSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSource">GoogleCloudbuildTriggerBuildSource</a>

---


### GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference <a name="GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resetBranchName">ResetBranchName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resetCommitSha">ResetCommitSha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resetDir">ResetDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resetSubstitutions">ResetSubstitutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resetTagName">ResetTagName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranchName` <a name="ResetBranchName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resetBranchName"></a>

```go
func ResetBranchName()
```

##### `ResetCommitSha` <a name="ResetCommitSha" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resetCommitSha"></a>

```go
func ResetCommitSha()
```

##### `ResetDir` <a name="ResetDir" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resetDir"></a>

```go
func ResetDir()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resetInvertRegex"></a>

```go
func ResetInvertRegex()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetSubstitutions` <a name="ResetSubstitutions" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resetSubstitutions"></a>

```go
func ResetSubstitutions()
```

##### `ResetTagName` <a name="ResetTagName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resetTagName"></a>

```go
func ResetTagName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchNameInput">BranchNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitShaInput">CommitShaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dirInput">DirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoNameInput">RepoNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutionsInput">SubstitutionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagNameInput">TagNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchName">BranchName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitSha">CommitSha</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dir">Dir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoName">RepoName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutions">Substitutions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagName">TagName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource">GoogleCloudbuildTriggerBuildSourceRepoSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchNameInput`<sup>Optional</sup> <a name="BranchNameInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchNameInput"></a>

```go
func BranchNameInput() *string
```

- *Type:* *string

---

##### `CommitShaInput`<sup>Optional</sup> <a name="CommitShaInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitShaInput"></a>

```go
func CommitShaInput() *string
```

- *Type:* *string

---

##### `DirInput`<sup>Optional</sup> <a name="DirInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dirInput"></a>

```go
func DirInput() *string
```

- *Type:* *string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegexInput"></a>

```go
func InvertRegexInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RepoNameInput`<sup>Optional</sup> <a name="RepoNameInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoNameInput"></a>

```go
func RepoNameInput() *string
```

- *Type:* *string

---

##### `SubstitutionsInput`<sup>Optional</sup> <a name="SubstitutionsInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutionsInput"></a>

```go
func SubstitutionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagNameInput`<sup>Optional</sup> <a name="TagNameInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagNameInput"></a>

```go
func TagNameInput() *string
```

- *Type:* *string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchName"></a>

```go
func BranchName() *string
```

- *Type:* *string

---

##### `CommitSha`<sup>Required</sup> <a name="CommitSha" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitSha"></a>

```go
func CommitSha() *string
```

- *Type:* *string

---

##### `Dir`<sup>Required</sup> <a name="Dir" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dir"></a>

```go
func Dir() *string
```

- *Type:* *string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegex"></a>

```go
func InvertRegex() interface{}
```

- *Type:* interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `RepoName`<sup>Required</sup> <a name="RepoName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoName"></a>

```go
func RepoName() *string
```

- *Type:* *string

---

##### `Substitutions`<sup>Required</sup> <a name="Substitutions" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutions"></a>

```go
func Substitutions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagName`<sup>Required</sup> <a name="TagName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagName"></a>

```go
func TagName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerBuildSourceRepoSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceRepoSource">GoogleCloudbuildTriggerBuildSourceRepoSource</a>

---


### GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference <a name="GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.resetGeneration">ResetGeneration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGeneration` <a name="ResetGeneration" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.resetGeneration"></a>

```go
func ResetGeneration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generationInput">GenerationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generation">Generation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSource">GoogleCloudbuildTriggerBuildSourceStorageSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `GenerationInput`<sup>Optional</sup> <a name="GenerationInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generationInput"></a>

```go
func GenerationInput() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generation"></a>

```go
func Generation() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerBuildSourceStorageSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildSourceStorageSource">GoogleCloudbuildTriggerBuildSourceStorageSource</a>

---


### GoogleCloudbuildTriggerBuildStepList <a name="GoogleCloudbuildTriggerBuildStepList" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildStepList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudbuildTriggerBuildStepList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.get"></a>

```go
func Get(index *f64) GoogleCloudbuildTriggerBuildStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudbuildTriggerBuildStepOutputReference <a name="GoogleCloudbuildTriggerBuildStepOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildStepOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudbuildTriggerBuildStepOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetAllowExitCodes">ResetAllowExitCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetAllowFailure">ResetAllowFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetDir">ResetDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetEntrypoint">ResetEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetScript">ResetScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetSecretEnv">ResetSecretEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetTiming">ResetTiming</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetWaitFor">ResetWaitFor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVolumes` <a name="PutVolumes" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.putVolumes"></a>

```go
func PutVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.putVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowExitCodes` <a name="ResetAllowExitCodes" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetAllowExitCodes"></a>

```go
func ResetAllowExitCodes()
```

##### `ResetAllowFailure` <a name="ResetAllowFailure" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetAllowFailure"></a>

```go
func ResetAllowFailure()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetDir` <a name="ResetDir" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetDir"></a>

```go
func ResetDir()
```

##### `ResetEntrypoint` <a name="ResetEntrypoint" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetEntrypoint"></a>

```go
func ResetEntrypoint()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetEnv"></a>

```go
func ResetEnv()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetScript` <a name="ResetScript" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetScript"></a>

```go
func ResetScript()
```

##### `ResetSecretEnv` <a name="ResetSecretEnv" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetSecretEnv"></a>

```go
func ResetSecretEnv()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetTiming` <a name="ResetTiming" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetTiming"></a>

```go
func ResetTiming()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetVolumes"></a>

```go
func ResetVolumes()
```

##### `ResetWaitFor` <a name="ResetWaitFor" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.resetWaitFor"></a>

```go
func ResetWaitFor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList">GoogleCloudbuildTriggerBuildStepVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.allowExitCodesInput">AllowExitCodesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.allowFailureInput">AllowFailureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.dirInput">DirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.entrypointInput">EntrypointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.envInput">EnvInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.scriptInput">ScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.secretEnvInput">SecretEnvInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.timingInput">TimingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.volumesInput">VolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.waitForInput">WaitForInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.allowExitCodes">AllowExitCodes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.allowFailure">AllowFailure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.dir">Dir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.entrypoint">Entrypoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.env">Env</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.script">Script</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.secretEnv">SecretEnv</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.timing">Timing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.waitFor">WaitFor</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.volumes"></a>

```go
func Volumes() GoogleCloudbuildTriggerBuildStepVolumesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList">GoogleCloudbuildTriggerBuildStepVolumesList</a>

---

##### `AllowExitCodesInput`<sup>Optional</sup> <a name="AllowExitCodesInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.allowExitCodesInput"></a>

```go
func AllowExitCodesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `AllowFailureInput`<sup>Optional</sup> <a name="AllowFailureInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.allowFailureInput"></a>

```go
func AllowFailureInput() interface{}
```

- *Type:* interface{}

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DirInput`<sup>Optional</sup> <a name="DirInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.dirInput"></a>

```go
func DirInput() *string
```

- *Type:* *string

---

##### `EntrypointInput`<sup>Optional</sup> <a name="EntrypointInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.entrypointInput"></a>

```go
func EntrypointInput() *string
```

- *Type:* *string

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.envInput"></a>

```go
func EnvInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.scriptInput"></a>

```go
func ScriptInput() *string
```

- *Type:* *string

---

##### `SecretEnvInput`<sup>Optional</sup> <a name="SecretEnvInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.secretEnvInput"></a>

```go
func SecretEnvInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `TimingInput`<sup>Optional</sup> <a name="TimingInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.timingInput"></a>

```go
func TimingInput() *string
```

- *Type:* *string

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.volumesInput"></a>

```go
func VolumesInput() interface{}
```

- *Type:* interface{}

---

##### `WaitForInput`<sup>Optional</sup> <a name="WaitForInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.waitForInput"></a>

```go
func WaitForInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowExitCodes`<sup>Required</sup> <a name="AllowExitCodes" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.allowExitCodes"></a>

```go
func AllowExitCodes() *[]*f64
```

- *Type:* *[]*f64

---

##### `AllowFailure`<sup>Required</sup> <a name="AllowFailure" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.allowFailure"></a>

```go
func AllowFailure() interface{}
```

- *Type:* interface{}

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `Dir`<sup>Required</sup> <a name="Dir" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.dir"></a>

```go
func Dir() *string
```

- *Type:* *string

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.entrypoint"></a>

```go
func Entrypoint() *string
```

- *Type:* *string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.env"></a>

```go
func Env() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.script"></a>

```go
func Script() *string
```

- *Type:* *string

---

##### `SecretEnv`<sup>Required</sup> <a name="SecretEnv" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.secretEnv"></a>

```go
func SecretEnv() *[]*string
```

- *Type:* *[]*string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `Timing`<sup>Required</sup> <a name="Timing" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.timing"></a>

```go
func Timing() *string
```

- *Type:* *string

---

##### `WaitFor`<sup>Required</sup> <a name="WaitFor" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.waitFor"></a>

```go
func WaitFor() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudbuildTriggerBuildStepVolumesList <a name="GoogleCloudbuildTriggerBuildStepVolumesList" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildStepVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudbuildTriggerBuildStepVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.get"></a>

```go
func Get(index *f64) GoogleCloudbuildTriggerBuildStepVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudbuildTriggerBuildStepVolumesOutputReference <a name="GoogleCloudbuildTriggerBuildStepVolumesOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerBuildStepVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudbuildTriggerBuildStepVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudbuildTriggerGitFileSourceOutputReference <a name="GoogleCloudbuildTriggerGitFileSourceOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerGitFileSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerGitFileSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.resetBitbucketServerConfig">ResetBitbucketServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.resetGithubEnterpriseConfig">ResetGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBitbucketServerConfig` <a name="ResetBitbucketServerConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.resetBitbucketServerConfig"></a>

```go
func ResetBitbucketServerConfig()
```

##### `ResetGithubEnterpriseConfig` <a name="ResetGithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.resetGithubEnterpriseConfig"></a>

```go
func ResetGithubEnterpriseConfig()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.resetRepository"></a>

```go
func ResetRepository()
```

##### `ResetRevision` <a name="ResetRevision" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.resetRevision"></a>

```go
func ResetRevision()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.resetUri"></a>

```go
func ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.bitbucketServerConfigInput">BitbucketServerConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfigInput">GithubEnterpriseConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.repoTypeInput">RepoTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.revisionInput">RevisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.bitbucketServerConfig">BitbucketServerConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.repoType">RepoType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.revision">Revision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource">GoogleCloudbuildTriggerGitFileSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BitbucketServerConfigInput`<sup>Optional</sup> <a name="BitbucketServerConfigInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.bitbucketServerConfigInput"></a>

```go
func BitbucketServerConfigInput() *string
```

- *Type:* *string

---

##### `GithubEnterpriseConfigInput`<sup>Optional</sup> <a name="GithubEnterpriseConfigInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfigInput"></a>

```go
func GithubEnterpriseConfigInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `RepoTypeInput`<sup>Optional</sup> <a name="RepoTypeInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.repoTypeInput"></a>

```go
func RepoTypeInput() *string
```

- *Type:* *string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.revisionInput"></a>

```go
func RevisionInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `BitbucketServerConfig`<sup>Required</sup> <a name="BitbucketServerConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.bitbucketServerConfig"></a>

```go
func BitbucketServerConfig() *string
```

- *Type:* *string

---

##### `GithubEnterpriseConfig`<sup>Required</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfig"></a>

```go
func GithubEnterpriseConfig() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `RepoType`<sup>Required</sup> <a name="RepoType" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.repoType"></a>

```go
func RepoType() *string
```

- *Type:* *string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.revision"></a>

```go
func Revision() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerGitFileSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGitFileSource">GoogleCloudbuildTriggerGitFileSource</a>

---


### GoogleCloudbuildTriggerGithubOutputReference <a name="GoogleCloudbuildTriggerGithubOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerGithubOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerGithubOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.putPullRequest">PutPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.putPush">PutPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.resetEnterpriseConfigResourceName">ResetEnterpriseConfigResourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.resetPullRequest">ResetPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.resetPush">ResetPush</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPullRequest` <a name="PutPullRequest" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.putPullRequest"></a>

```go
func PutPullRequest(value GoogleCloudbuildTriggerGithubPullRequest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.putPullRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequest">GoogleCloudbuildTriggerGithubPullRequest</a>

---

##### `PutPush` <a name="PutPush" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.putPush"></a>

```go
func PutPush(value GoogleCloudbuildTriggerGithubPush)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.putPush.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPush">GoogleCloudbuildTriggerGithubPush</a>

---

##### `ResetEnterpriseConfigResourceName` <a name="ResetEnterpriseConfigResourceName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.resetEnterpriseConfigResourceName"></a>

```go
func ResetEnterpriseConfigResourceName()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetPullRequest` <a name="ResetPullRequest" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.resetPullRequest"></a>

```go
func ResetPullRequest()
```

##### `ResetPush` <a name="ResetPush" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.resetPush"></a>

```go
func ResetPush()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference">GoogleCloudbuildTriggerGithubPullRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.push">Push</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference">GoogleCloudbuildTriggerGithubPushOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.enterpriseConfigResourceNameInput">EnterpriseConfigResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.pullRequestInput">PullRequestInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequest">GoogleCloudbuildTriggerGithubPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.pushInput">PushInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPush">GoogleCloudbuildTriggerGithubPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.enterpriseConfigResourceName">EnterpriseConfigResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithub">GoogleCloudbuildTriggerGithub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PullRequest`<sup>Required</sup> <a name="PullRequest" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.pullRequest"></a>

```go
func PullRequest() GoogleCloudbuildTriggerGithubPullRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference">GoogleCloudbuildTriggerGithubPullRequestOutputReference</a>

---

##### `Push`<sup>Required</sup> <a name="Push" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.push"></a>

```go
func Push() GoogleCloudbuildTriggerGithubPushOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference">GoogleCloudbuildTriggerGithubPushOutputReference</a>

---

##### `EnterpriseConfigResourceNameInput`<sup>Optional</sup> <a name="EnterpriseConfigResourceNameInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.enterpriseConfigResourceNameInput"></a>

```go
func EnterpriseConfigResourceNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `PullRequestInput`<sup>Optional</sup> <a name="PullRequestInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.pullRequestInput"></a>

```go
func PullRequestInput() GoogleCloudbuildTriggerGithubPullRequest
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequest">GoogleCloudbuildTriggerGithubPullRequest</a>

---

##### `PushInput`<sup>Optional</sup> <a name="PushInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.pushInput"></a>

```go
func PushInput() GoogleCloudbuildTriggerGithubPush
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPush">GoogleCloudbuildTriggerGithubPush</a>

---

##### `EnterpriseConfigResourceName`<sup>Required</sup> <a name="EnterpriseConfigResourceName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.enterpriseConfigResourceName"></a>

```go
func EnterpriseConfigResourceName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerGithub
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithub">GoogleCloudbuildTriggerGithub</a>

---


### GoogleCloudbuildTriggerGithubPullRequestOutputReference <a name="GoogleCloudbuildTriggerGithubPullRequestOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerGithubPullRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerGithubPullRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.resetCommentControl">ResetCommentControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommentControl` <a name="ResetCommentControl" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.resetCommentControl"></a>

```go
func ResetCommentControl()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.resetInvertRegex"></a>

```go
func ResetInvertRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.property.commentControlInput">CommentControlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.property.commentControl">CommentControl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequest">GoogleCloudbuildTriggerGithubPullRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `CommentControlInput`<sup>Optional</sup> <a name="CommentControlInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.property.commentControlInput"></a>

```go
func CommentControlInput() *string
```

- *Type:* *string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.property.invertRegexInput"></a>

```go
func InvertRegexInput() interface{}
```

- *Type:* interface{}

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `CommentControl`<sup>Required</sup> <a name="CommentControl" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.property.commentControl"></a>

```go
func CommentControl() *string
```

- *Type:* *string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.property.invertRegex"></a>

```go
func InvertRegex() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerGithubPullRequest
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPullRequest">GoogleCloudbuildTriggerGithubPullRequest</a>

---


### GoogleCloudbuildTriggerGithubPushOutputReference <a name="GoogleCloudbuildTriggerGithubPushOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerGithubPushOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerGithubPushOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.resetBranch"></a>

```go
func ResetBranch()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.resetInvertRegex"></a>

```go
func ResetInvertRegex()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.resetTag"></a>

```go
func ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPush">GoogleCloudbuildTriggerGithubPush</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.property.invertRegexInput"></a>

```go
func InvertRegexInput() interface{}
```

- *Type:* interface{}

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.property.invertRegex"></a>

```go
func InvertRegex() interface{}
```

- *Type:* interface{}

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPushOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerGithubPush
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerGithubPush">GoogleCloudbuildTriggerGithubPush</a>

---


### GoogleCloudbuildTriggerPubsubConfigOutputReference <a name="GoogleCloudbuildTriggerPubsubConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerPubsubConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerPubsubConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.property.subscription">Subscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.property.topicInput">TopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfig">GoogleCloudbuildTriggerPubsubConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.property.subscription"></a>

```go
func Subscription() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.property.topicInput"></a>

```go
func TopicInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerPubsubConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerPubsubConfig">GoogleCloudbuildTriggerPubsubConfig</a>

---


### GoogleCloudbuildTriggerRepositoryEventConfigOutputReference <a name="GoogleCloudbuildTriggerRepositoryEventConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerRepositoryEventConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerRepositoryEventConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.putPullRequest">PutPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.putPush">PutPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.resetPullRequest">ResetPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.resetPush">ResetPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPullRequest` <a name="PutPullRequest" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.putPullRequest"></a>

```go
func PutPullRequest(value GoogleCloudbuildTriggerRepositoryEventConfigPullRequest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.putPullRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequest">GoogleCloudbuildTriggerRepositoryEventConfigPullRequest</a>

---

##### `PutPush` <a name="PutPush" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.putPush"></a>

```go
func PutPush(value GoogleCloudbuildTriggerRepositoryEventConfigPush)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.putPush.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPush">GoogleCloudbuildTriggerRepositoryEventConfigPush</a>

---

##### `ResetPullRequest` <a name="ResetPullRequest" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.resetPullRequest"></a>

```go
func ResetPullRequest()
```

##### `ResetPush` <a name="ResetPush" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.resetPush"></a>

```go
func ResetPush()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.resetRepository"></a>

```go
func ResetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference">GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.push">Push</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference">GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.pullRequestInput">PullRequestInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequest">GoogleCloudbuildTriggerRepositoryEventConfigPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.pushInput">PushInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPush">GoogleCloudbuildTriggerRepositoryEventConfigPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfig">GoogleCloudbuildTriggerRepositoryEventConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PullRequest`<sup>Required</sup> <a name="PullRequest" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.pullRequest"></a>

```go
func PullRequest() GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference">GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference</a>

---

##### `Push`<sup>Required</sup> <a name="Push" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.push"></a>

```go
func Push() GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference">GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference</a>

---

##### `PullRequestInput`<sup>Optional</sup> <a name="PullRequestInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.pullRequestInput"></a>

```go
func PullRequestInput() GoogleCloudbuildTriggerRepositoryEventConfigPullRequest
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequest">GoogleCloudbuildTriggerRepositoryEventConfigPullRequest</a>

---

##### `PushInput`<sup>Optional</sup> <a name="PushInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.pushInput"></a>

```go
func PushInput() GoogleCloudbuildTriggerRepositoryEventConfigPush
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPush">GoogleCloudbuildTriggerRepositoryEventConfigPush</a>

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerRepositoryEventConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfig">GoogleCloudbuildTriggerRepositoryEventConfig</a>

---


### GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference <a name="GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resetCommentControl">ResetCommentControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resetBranch"></a>

```go
func ResetBranch()
```

##### `ResetCommentControl` <a name="ResetCommentControl" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resetCommentControl"></a>

```go
func ResetCommentControl()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resetInvertRegex"></a>

```go
func ResetInvertRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.commentControlInput">CommentControlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.commentControl">CommentControl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequest">GoogleCloudbuildTriggerRepositoryEventConfigPullRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `CommentControlInput`<sup>Optional</sup> <a name="CommentControlInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.commentControlInput"></a>

```go
func CommentControlInput() *string
```

- *Type:* *string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.invertRegexInput"></a>

```go
func InvertRegexInput() interface{}
```

- *Type:* interface{}

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `CommentControl`<sup>Required</sup> <a name="CommentControl" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.commentControl"></a>

```go
func CommentControl() *string
```

- *Type:* *string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.invertRegex"></a>

```go
func InvertRegex() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerRepositoryEventConfigPullRequest
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPullRequest">GoogleCloudbuildTriggerRepositoryEventConfigPullRequest</a>

---


### GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference <a name="GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.resetBranch"></a>

```go
func ResetBranch()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.resetInvertRegex"></a>

```go
func ResetInvertRegex()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.resetTag"></a>

```go
func ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPush">GoogleCloudbuildTriggerRepositoryEventConfigPush</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.invertRegexInput"></a>

```go
func InvertRegexInput() interface{}
```

- *Type:* interface{}

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.invertRegex"></a>

```go
func InvertRegex() interface{}
```

- *Type:* interface{}

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerRepositoryEventConfigPush
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerRepositoryEventConfigPush">GoogleCloudbuildTriggerRepositoryEventConfigPush</a>

---


### GoogleCloudbuildTriggerSourceToBuildOutputReference <a name="GoogleCloudbuildTriggerSourceToBuildOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerSourceToBuildOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerSourceToBuildOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.resetBitbucketServerConfig">ResetBitbucketServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.resetGithubEnterpriseConfig">ResetGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBitbucketServerConfig` <a name="ResetBitbucketServerConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.resetBitbucketServerConfig"></a>

```go
func ResetBitbucketServerConfig()
```

##### `ResetGithubEnterpriseConfig` <a name="ResetGithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.resetGithubEnterpriseConfig"></a>

```go
func ResetGithubEnterpriseConfig()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.resetRepository"></a>

```go
func ResetRepository()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.resetUri"></a>

```go
func ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.bitbucketServerConfigInput">BitbucketServerConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfigInput">GithubEnterpriseConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.refInput">RefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.repoTypeInput">RepoTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.bitbucketServerConfig">BitbucketServerConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.repoType">RepoType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuild">GoogleCloudbuildTriggerSourceToBuild</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BitbucketServerConfigInput`<sup>Optional</sup> <a name="BitbucketServerConfigInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.bitbucketServerConfigInput"></a>

```go
func BitbucketServerConfigInput() *string
```

- *Type:* *string

---

##### `GithubEnterpriseConfigInput`<sup>Optional</sup> <a name="GithubEnterpriseConfigInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfigInput"></a>

```go
func GithubEnterpriseConfigInput() *string
```

- *Type:* *string

---

##### `RefInput`<sup>Optional</sup> <a name="RefInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.refInput"></a>

```go
func RefInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `RepoTypeInput`<sup>Optional</sup> <a name="RepoTypeInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.repoTypeInput"></a>

```go
func RepoTypeInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `BitbucketServerConfig`<sup>Required</sup> <a name="BitbucketServerConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.bitbucketServerConfig"></a>

```go
func BitbucketServerConfig() *string
```

- *Type:* *string

---

##### `GithubEnterpriseConfig`<sup>Required</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfig"></a>

```go
func GithubEnterpriseConfig() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `RepoType`<sup>Required</sup> <a name="RepoType" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.repoType"></a>

```go
func RepoType() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuildOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerSourceToBuild
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerSourceToBuild">GoogleCloudbuildTriggerSourceToBuild</a>

---


### GoogleCloudbuildTriggerTimeoutsOutputReference <a name="GoogleCloudbuildTriggerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudbuildTriggerTriggerTemplateOutputReference <a name="GoogleCloudbuildTriggerTriggerTemplateOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerTriggerTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerTriggerTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.resetBranchName">ResetBranchName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.resetCommitSha">ResetCommitSha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.resetDir">ResetDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.resetRepoName">ResetRepoName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.resetTagName">ResetTagName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranchName` <a name="ResetBranchName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.resetBranchName"></a>

```go
func ResetBranchName()
```

##### `ResetCommitSha` <a name="ResetCommitSha" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.resetCommitSha"></a>

```go
func ResetCommitSha()
```

##### `ResetDir` <a name="ResetDir" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.resetDir"></a>

```go
func ResetDir()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.resetInvertRegex"></a>

```go
func ResetInvertRegex()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetRepoName` <a name="ResetRepoName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.resetRepoName"></a>

```go
func ResetRepoName()
```

##### `ResetTagName` <a name="ResetTagName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.resetTagName"></a>

```go
func ResetTagName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.branchNameInput">BranchNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.commitShaInput">CommitShaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.dirInput">DirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.repoNameInput">RepoNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.tagNameInput">TagNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.branchName">BranchName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.commitSha">CommitSha</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.dir">Dir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.repoName">RepoName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.tagName">TagName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate">GoogleCloudbuildTriggerTriggerTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchNameInput`<sup>Optional</sup> <a name="BranchNameInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.branchNameInput"></a>

```go
func BranchNameInput() *string
```

- *Type:* *string

---

##### `CommitShaInput`<sup>Optional</sup> <a name="CommitShaInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.commitShaInput"></a>

```go
func CommitShaInput() *string
```

- *Type:* *string

---

##### `DirInput`<sup>Optional</sup> <a name="DirInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.dirInput"></a>

```go
func DirInput() *string
```

- *Type:* *string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.invertRegexInput"></a>

```go
func InvertRegexInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RepoNameInput`<sup>Optional</sup> <a name="RepoNameInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.repoNameInput"></a>

```go
func RepoNameInput() *string
```

- *Type:* *string

---

##### `TagNameInput`<sup>Optional</sup> <a name="TagNameInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.tagNameInput"></a>

```go
func TagNameInput() *string
```

- *Type:* *string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.branchName"></a>

```go
func BranchName() *string
```

- *Type:* *string

---

##### `CommitSha`<sup>Required</sup> <a name="CommitSha" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.commitSha"></a>

```go
func CommitSha() *string
```

- *Type:* *string

---

##### `Dir`<sup>Required</sup> <a name="Dir" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.dir"></a>

```go
func Dir() *string
```

- *Type:* *string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.invertRegex"></a>

```go
func InvertRegex() interface{}
```

- *Type:* interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `RepoName`<sup>Required</sup> <a name="RepoName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.repoName"></a>

```go
func RepoName() *string
```

- *Type:* *string

---

##### `TagName`<sup>Required</sup> <a name="TagName" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.tagName"></a>

```go
func TagName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerTriggerTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerTriggerTemplate">GoogleCloudbuildTriggerTriggerTemplate</a>

---


### GoogleCloudbuildTriggerWebhookConfigOutputReference <a name="GoogleCloudbuildTriggerWebhookConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildtrigger"

googlecloudbuildtrigger.NewGoogleCloudbuildTriggerWebhookConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildTriggerWebhookConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfig">GoogleCloudbuildTriggerWebhookConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildTriggerWebhookConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildTrigger.GoogleCloudbuildTriggerWebhookConfig">GoogleCloudbuildTriggerWebhookConfig</a>

---



