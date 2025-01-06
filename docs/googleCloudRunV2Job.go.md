# `googleCloudRunV2Job` Submodule <a name="`googleCloudRunV2Job` Submodule" id="@cdktf/provider-google-beta.googleCloudRunV2Job"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudRunV2Job <a name="GoogleCloudRunV2Job" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job google_cloud_run_v2_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2Job(scope Construct, id *string, config GoogleCloudRunV2JobConfig) GoogleCloudRunV2Job
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig">GoogleCloudRunV2JobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig">GoogleCloudRunV2JobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.putBinaryAuthorization">PutBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.putTemplate">PutTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetBinaryAuthorization">ResetBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetClient">ResetClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetClientVersion">ResetClientVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetLaunchStage">ResetLaunchStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetRunExecutionToken">ResetRunExecutionToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetStartExecutionToken">ResetStartExecutionToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBinaryAuthorization` <a name="PutBinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.putBinaryAuthorization"></a>

```go
func PutBinaryAuthorization(value GoogleCloudRunV2JobBinaryAuthorization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.putBinaryAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization">GoogleCloudRunV2JobBinaryAuthorization</a>

---

##### `PutTemplate` <a name="PutTemplate" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.putTemplate"></a>

```go
func PutTemplate(value GoogleCloudRunV2JobTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate">GoogleCloudRunV2JobTemplate</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCloudRunV2JobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts">GoogleCloudRunV2JobTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetBinaryAuthorization` <a name="ResetBinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetBinaryAuthorization"></a>

```go
func ResetBinaryAuthorization()
```

##### `ResetClient` <a name="ResetClient" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetClient"></a>

```go
func ResetClient()
```

##### `ResetClientVersion` <a name="ResetClientVersion" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetClientVersion"></a>

```go
func ResetClientVersion()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLaunchStage` <a name="ResetLaunchStage" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetLaunchStage"></a>

```go
func ResetLaunchStage()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRunExecutionToken` <a name="ResetRunExecutionToken" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetRunExecutionToken"></a>

```go
func ResetRunExecutionToken()
```

##### `ResetStartExecutionToken` <a name="ResetStartExecutionToken" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetStartExecutionToken"></a>

```go
func ResetStartExecutionToken()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudRunV2Job resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.GoogleCloudRunV2Job_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.GoogleCloudRunV2Job_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.GoogleCloudRunV2Job_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.GoogleCloudRunV2Job_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleCloudRunV2Job resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleCloudRunV2Job to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleCloudRunV2Job that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudRunV2Job to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.binaryAuthorization">BinaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference">GoogleCloudRunV2JobBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList">GoogleCloudRunV2JobConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.executionCount">ExecutionCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.generation">Generation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.lastModifier">LastModifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.latestCreatedExecution">LatestCreatedExecution</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList">GoogleCloudRunV2JobLatestCreatedExecutionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.observedGeneration">ObservedGeneration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.template">Template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference">GoogleCloudRunV2JobTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.terminalCondition">TerminalCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList">GoogleCloudRunV2JobTerminalConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference">GoogleCloudRunV2JobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.binaryAuthorizationInput">BinaryAuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization">GoogleCloudRunV2JobBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.clientInput">ClientInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.clientVersionInput">ClientVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.launchStageInput">LaunchStageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.runExecutionTokenInput">RunExecutionTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.startExecutionTokenInput">StartExecutionTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.templateInput">TemplateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate">GoogleCloudRunV2JobTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.client">Client</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.clientVersion">ClientVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.launchStage">LaunchStage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.runExecutionToken">RunExecutionToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.startExecutionToken">StartExecutionToken</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BinaryAuthorization`<sup>Required</sup> <a name="BinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.binaryAuthorization"></a>

```go
func BinaryAuthorization() GoogleCloudRunV2JobBinaryAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference">GoogleCloudRunV2JobBinaryAuthorizationOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.conditions"></a>

```go
func Conditions() GoogleCloudRunV2JobConditionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList">GoogleCloudRunV2JobConditionsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ExecutionCount`<sup>Required</sup> <a name="ExecutionCount" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.executionCount"></a>

```go
func ExecutionCount() *f64
```

- *Type:* *f64

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.generation"></a>

```go
func Generation() *string
```

- *Type:* *string

---

##### `LastModifier`<sup>Required</sup> <a name="LastModifier" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.lastModifier"></a>

```go
func LastModifier() *string
```

- *Type:* *string

---

##### `LatestCreatedExecution`<sup>Required</sup> <a name="LatestCreatedExecution" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.latestCreatedExecution"></a>

```go
func LatestCreatedExecution() GoogleCloudRunV2JobLatestCreatedExecutionList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList">GoogleCloudRunV2JobLatestCreatedExecutionList</a>

---

##### `ObservedGeneration`<sup>Required</sup> <a name="ObservedGeneration" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.observedGeneration"></a>

```go
func ObservedGeneration() *string
```

- *Type:* *string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.template"></a>

```go
func Template() GoogleCloudRunV2JobTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference">GoogleCloudRunV2JobTemplateOutputReference</a>

---

##### `TerminalCondition`<sup>Required</sup> <a name="TerminalCondition" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.terminalCondition"></a>

```go
func TerminalCondition() GoogleCloudRunV2JobTerminalConditionList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList">GoogleCloudRunV2JobTerminalConditionList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.timeouts"></a>

```go
func Timeouts() GoogleCloudRunV2JobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference">GoogleCloudRunV2JobTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BinaryAuthorizationInput`<sup>Optional</sup> <a name="BinaryAuthorizationInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.binaryAuthorizationInput"></a>

```go
func BinaryAuthorizationInput() GoogleCloudRunV2JobBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization">GoogleCloudRunV2JobBinaryAuthorization</a>

---

##### `ClientInput`<sup>Optional</sup> <a name="ClientInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.clientInput"></a>

```go
func ClientInput() *string
```

- *Type:* *string

---

##### `ClientVersionInput`<sup>Optional</sup> <a name="ClientVersionInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.clientVersionInput"></a>

```go
func ClientVersionInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LaunchStageInput`<sup>Optional</sup> <a name="LaunchStageInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.launchStageInput"></a>

```go
func LaunchStageInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RunExecutionTokenInput`<sup>Optional</sup> <a name="RunExecutionTokenInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.runExecutionTokenInput"></a>

```go
func RunExecutionTokenInput() *string
```

- *Type:* *string

---

##### `StartExecutionTokenInput`<sup>Optional</sup> <a name="StartExecutionTokenInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.startExecutionTokenInput"></a>

```go
func StartExecutionTokenInput() *string
```

- *Type:* *string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.templateInput"></a>

```go
func TemplateInput() GoogleCloudRunV2JobTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate">GoogleCloudRunV2JobTemplate</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Client`<sup>Required</sup> <a name="Client" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.client"></a>

```go
func Client() *string
```

- *Type:* *string

---

##### `ClientVersion`<sup>Required</sup> <a name="ClientVersion" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.clientVersion"></a>

```go
func ClientVersion() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LaunchStage`<sup>Required</sup> <a name="LaunchStage" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.launchStage"></a>

```go
func LaunchStage() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RunExecutionToken`<sup>Required</sup> <a name="RunExecutionToken" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.runExecutionToken"></a>

```go
func RunExecutionToken() *string
```

- *Type:* *string

---

##### `StartExecutionToken`<sup>Required</sup> <a name="StartExecutionToken" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.startExecutionToken"></a>

```go
func StartExecutionToken() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudRunV2JobBinaryAuthorization <a name="GoogleCloudRunV2JobBinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobBinaryAuthorization {
	BreakglassJustification: *string,
	Policy: *string,
	UseDefault: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization.property.breakglassJustification">BreakglassJustification</a></code> | <code>*string</code> | If present, indicates to use Breakglass using this justification. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization.property.policy">Policy</a></code> | <code>*string</code> | The path to a binary authorization policy. Format: projects/{project}/platforms/cloudRun/{policy-name}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization.property.useDefault">UseDefault</a></code> | <code>interface{}</code> | If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled. |

---

##### `BreakglassJustification`<sup>Optional</sup> <a name="BreakglassJustification" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization.property.breakglassJustification"></a>

```go
BreakglassJustification *string
```

- *Type:* *string

If present, indicates to use Breakglass using this justification.

If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#breakglass_justification GoogleCloudRunV2Job#breakglass_justification}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

The path to a binary authorization policy. Format: projects/{project}/platforms/cloudRun/{policy-name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#policy GoogleCloudRunV2Job#policy}

---

##### `UseDefault`<sup>Optional</sup> <a name="UseDefault" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization.property.useDefault"></a>

```go
UseDefault interface{}
```

- *Type:* interface{}

If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#use_default GoogleCloudRunV2Job#use_default}

---

### GoogleCloudRunV2JobConditions <a name="GoogleCloudRunV2JobConditions" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobConditions {

}
```


### GoogleCloudRunV2JobConfig <a name="GoogleCloudRunV2JobConfig" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	Template: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate,
	Annotations: *map[string]*string,
	BinaryAuthorization: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization,
	Client: *string,
	ClientVersion: *string,
	DeletionProtection: interface{},
	Id: *string,
	Labels: *map[string]*string,
	LaunchStage: *string,
	Project: *string,
	RunExecutionToken: *string,
	StartExecutionToken: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.location">Location</a></code> | <code>*string</code> | The location of the cloud run job. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.name">Name</a></code> | <code>*string</code> | Name of the Job. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.template">Template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate">GoogleCloudRunV2JobTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.binaryAuthorization">BinaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization">GoogleCloudRunV2JobBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.client">Client</a></code> | <code>*string</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.clientVersion">ClientVersion</a></code> | <code>*string</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Whether Terraform will be prevented from destroying the job. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#id GoogleCloudRunV2Job#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.launchStage">LaunchStage</a></code> | <code>*string</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#project GoogleCloudRunV2Job#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.runExecutionToken">RunExecutionToken</a></code> | <code>*string</code> | A unique string used as a suffix creating a new execution upon job create or update. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.startExecutionToken">StartExecutionToken</a></code> | <code>*string</code> | A unique string used as a suffix creating a new execution upon job create or update. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts">GoogleCloudRunV2JobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the cloud run job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#location GoogleCloudRunV2Job#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#name GoogleCloudRunV2Job#name}

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.template"></a>

```go
Template GoogleCloudRunV2JobTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate">GoogleCloudRunV2JobTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#template GoogleCloudRunV2Job#template}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected on new resources.
All system annotations in v1 now have a corresponding field in v2 Job.

This field follows Kubernetes annotations' namespacing, limits, and rules.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#annotations GoogleCloudRunV2Job#annotations}

---

##### `BinaryAuthorization`<sup>Optional</sup> <a name="BinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.binaryAuthorization"></a>

```go
BinaryAuthorization GoogleCloudRunV2JobBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization">GoogleCloudRunV2JobBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#binary_authorization GoogleCloudRunV2Job#binary_authorization}

---

##### `Client`<sup>Optional</sup> <a name="Client" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.client"></a>

```go
Client *string
```

- *Type:* *string

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#client GoogleCloudRunV2Job#client}

---

##### `ClientVersion`<sup>Optional</sup> <a name="ClientVersion" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.clientVersion"></a>

```go
ClientVersion *string
```

- *Type:* *string

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#client_version GoogleCloudRunV2Job#client_version}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Whether Terraform will be prevented from destroying the job.

Defaults to true.
When a'terraform destroy' or 'terraform apply' would delete the job,
the command will fail if this field is not set to false in Terraform state.
When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the job will fail.
When the field is set to false, deleting the job is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#deletion_protection GoogleCloudRunV2Job#deletion_protection}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#id GoogleCloudRunV2Job#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 Job.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#labels GoogleCloudRunV2Job#labels}

---

##### `LaunchStage`<sup>Optional</sup> <a name="LaunchStage" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.launchStage"></a>

```go
LaunchStage *string
```

- *Type:* *string

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.

For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#launch_stage GoogleCloudRunV2Job#launch_stage}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#project GoogleCloudRunV2Job#project}.

---

##### `RunExecutionToken`<sup>Optional</sup> <a name="RunExecutionToken" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.runExecutionToken"></a>

```go
RunExecutionToken *string
```

- *Type:* *string

A unique string used as a suffix creating a new execution upon job create or update.

The Job will become ready when the execution is successfully completed.
The sum of job name and token length must be fewer than 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#run_execution_token GoogleCloudRunV2Job#run_execution_token}

---

##### `StartExecutionToken`<sup>Optional</sup> <a name="StartExecutionToken" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.startExecutionToken"></a>

```go
StartExecutionToken *string
```

- *Type:* *string

A unique string used as a suffix creating a new execution upon job create or update.

The Job will become ready when the execution is successfully started.
The sum of job name and token length must be fewer than 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#start_execution_token GoogleCloudRunV2Job#start_execution_token}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.timeouts"></a>

```go
Timeouts GoogleCloudRunV2JobTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts">GoogleCloudRunV2JobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#timeouts GoogleCloudRunV2Job#timeouts}

---

### GoogleCloudRunV2JobLatestCreatedExecution <a name="GoogleCloudRunV2JobLatestCreatedExecution" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecution.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobLatestCreatedExecution {

}
```


### GoogleCloudRunV2JobTemplate <a name="GoogleCloudRunV2JobTemplate" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobTemplate {
	Template: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate,
	Annotations: *map[string]*string,
	Labels: *map[string]*string,
	Parallelism: *f64,
	TaskCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate.property.template">Template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate">GoogleCloudRunV2JobTemplateTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate.property.parallelism">Parallelism</a></code> | <code>*f64</code> | Specifies the maximum desired number of tasks the execution should run at given time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate.property.taskCount">TaskCount</a></code> | <code>*f64</code> | Specifies the desired number of tasks the execution should run. |

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate.property.template"></a>

```go
Template GoogleCloudRunV2JobTemplateTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate">GoogleCloudRunV2JobTemplateTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#template GoogleCloudRunV2Job#template}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system annotations in v1 now have a corresponding field in v2 ExecutionTemplate.

This field follows Kubernetes annotations' namespacing, limits, and rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#annotations GoogleCloudRunV2Job#annotations}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter,
or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or
https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 ExecutionTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#labels GoogleCloudRunV2Job#labels}

---

##### `Parallelism`<sup>Optional</sup> <a name="Parallelism" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate.property.parallelism"></a>

```go
Parallelism *f64
```

- *Type:* *f64

Specifies the maximum desired number of tasks the execution should run at given time.

Must be <= taskCount. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed remaining, i.e. when the work left to do is less than max parallelism.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#parallelism GoogleCloudRunV2Job#parallelism}

---

##### `TaskCount`<sup>Optional</sup> <a name="TaskCount" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate.property.taskCount"></a>

```go
TaskCount *f64
```

- *Type:* *f64

Specifies the desired number of tasks the execution should run.

Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#task_count GoogleCloudRunV2Job#task_count}

---

### GoogleCloudRunV2JobTemplateTemplate <a name="GoogleCloudRunV2JobTemplateTemplate" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobTemplateTemplate {
	Containers: interface{},
	EncryptionKey: *string,
	ExecutionEnvironment: *string,
	MaxRetries: *f64,
	ServiceAccount: *string,
	Timeout: *string,
	Volumes: interface{},
	VpcAccess: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.containers">Containers</a></code> | <code>interface{}</code> | containers block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.encryptionKey">EncryptionKey</a></code> | <code>*string</code> | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.executionEnvironment">ExecutionEnvironment</a></code> | <code>*string</code> | The execution environment being used to host this Task. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | Number of retries allowed per Task, before marking this Task failed. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Email address of the IAM service account associated with the Task of a Job. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.timeout">Timeout</a></code> | <code>*string</code> | Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.volumes">Volumes</a></code> | <code>interface{}</code> | volumes block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.vpcAccess">VpcAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess">GoogleCloudRunV2JobTemplateTemplateVpcAccess</a></code> | vpc_access block. |

---

##### `Containers`<sup>Optional</sup> <a name="Containers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.containers"></a>

```go
Containers interface{}
```

- *Type:* interface{}

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#containers GoogleCloudRunV2Job#containers}

---

##### `EncryptionKey`<sup>Optional</sup> <a name="EncryptionKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.encryptionKey"></a>

```go
EncryptionKey *string
```

- *Type:* *string

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#encryption_key GoogleCloudRunV2Job#encryption_key}

---

##### `ExecutionEnvironment`<sup>Optional</sup> <a name="ExecutionEnvironment" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.executionEnvironment"></a>

```go
ExecutionEnvironment *string
```

- *Type:* *string

The execution environment being used to host this Task. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#execution_environment GoogleCloudRunV2Job#execution_environment}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.maxRetries"></a>

```go
MaxRetries *f64
```

- *Type:* *f64

Number of retries allowed per Task, before marking this Task failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#max_retries GoogleCloudRunV2Job#max_retries}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Email address of the IAM service account associated with the Task of a Job.

The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#service_account GoogleCloudRunV2Job#service_account}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers.

This applies per attempt of a task, meaning each retry can run for the full timeout.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#timeout GoogleCloudRunV2Job#timeout}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.volumes"></a>

```go
Volumes interface{}
```

- *Type:* interface{}

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#volumes GoogleCloudRunV2Job#volumes}

---

##### `VpcAccess`<sup>Optional</sup> <a name="VpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.vpcAccess"></a>

```go
VpcAccess GoogleCloudRunV2JobTemplateTemplateVpcAccess
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess">GoogleCloudRunV2JobTemplateTemplateVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#vpc_access GoogleCloudRunV2Job#vpc_access}

---

### GoogleCloudRunV2JobTemplateTemplateContainers <a name="GoogleCloudRunV2JobTemplateTemplateContainers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobTemplateTemplateContainers {
	Image: *string,
	Args: *[]*string,
	Command: *[]*string,
	Env: interface{},
	Name: *string,
	Ports: interface{},
	Resources: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources,
	VolumeMounts: interface{},
	WorkingDir: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.image">Image</a></code> | <code>*string</code> | URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.args">Args</a></code> | <code>*[]*string</code> | Arguments to the entrypoint. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.command">Command</a></code> | <code>*[]*string</code> | Entrypoint array. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.env">Env</a></code> | <code>interface{}</code> | env block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.name">Name</a></code> | <code>*string</code> | Name of the container specified as a DNS_LABEL. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.ports">Ports</a></code> | <code>interface{}</code> | ports block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources">GoogleCloudRunV2JobTemplateTemplateContainersResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.volumeMounts">VolumeMounts</a></code> | <code>interface{}</code> | volume_mounts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.workingDir">WorkingDir</a></code> | <code>*string</code> | Container's working directory. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.image"></a>

```go
Image *string
```

- *Type:* *string

URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#image GoogleCloudRunV2Job#image}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

Arguments to the entrypoint.

The docker image's CMD is used if this is not provided. Variable references are not supported in Cloud Run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#args GoogleCloudRunV2Job#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

Entrypoint array.

Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#command GoogleCloudRunV2Job#command}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.env"></a>

```go
Env interface{}
```

- *Type:* interface{}

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#env GoogleCloudRunV2Job#env}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the container specified as a DNS_LABEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#name GoogleCloudRunV2Job#name}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.ports"></a>

```go
Ports interface{}
```

- *Type:* interface{}

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#ports GoogleCloudRunV2Job#ports}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.resources"></a>

```go
Resources GoogleCloudRunV2JobTemplateTemplateContainersResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources">GoogleCloudRunV2JobTemplateTemplateContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#resources GoogleCloudRunV2Job#resources}

---

##### `VolumeMounts`<sup>Optional</sup> <a name="VolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.volumeMounts"></a>

```go
VolumeMounts interface{}
```

- *Type:* interface{}

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#volume_mounts GoogleCloudRunV2Job#volume_mounts}

---

##### `WorkingDir`<sup>Optional</sup> <a name="WorkingDir" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.workingDir"></a>

```go
WorkingDir *string
```

- *Type:* *string

Container's working directory.

If not specified, the container runtime's default will be used, which might be configured in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#working_dir GoogleCloudRunV2Job#working_dir}

---

### GoogleCloudRunV2JobTemplateTemplateContainersEnv <a name="GoogleCloudRunV2JobTemplateTemplateContainersEnv" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobTemplateTemplateContainersEnv {
	Name: *string,
	Value: *string,
	ValueSource: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv.property.name">Name</a></code> | <code>*string</code> | Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv.property.value">Value</a></code> | <code>*string</code> | Literal value of the environment variable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv.property.valueSource">ValueSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource</a></code> | value_source block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#name GoogleCloudRunV2Job#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv.property.value"></a>

```go
Value *string
```

- *Type:* *string

Literal value of the environment variable.

Defaults to "" and the maximum allowed length is 32768 characters. Variable references are not supported in Cloud Run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#value GoogleCloudRunV2Job#value}

---

##### `ValueSource`<sup>Optional</sup> <a name="ValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv.property.valueSource"></a>

```go
ValueSource GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource</a>

value_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#value_source GoogleCloudRunV2Job#value_source}

---

### GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource <a name="GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource {
	SecretKeyRef: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `SecretKeyRef`<sup>Optional</sup> <a name="SecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource.property.secretKeyRef"></a>

```go
SecretKeyRef GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#secret_key_ref GoogleCloudRunV2Job#secret_key_ref}

---

### GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef <a name="GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef {
	Secret: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef.property.secret">Secret</a></code> | <code>*string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef.property.version">Version</a></code> | <code>*string</code> | The Cloud Secret Manager secret version. |

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#secret GoogleCloudRunV2Job#secret}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef.property.version"></a>

```go
Version *string
```

- *Type:* *string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#version GoogleCloudRunV2Job#version}

---

### GoogleCloudRunV2JobTemplateTemplateContainersPorts <a name="GoogleCloudRunV2JobTemplateTemplateContainersPorts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPorts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobTemplateTemplateContainersPorts {
	ContainerPort: *f64,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPorts.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPorts.property.name">Name</a></code> | <code>*string</code> | If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". |

---

##### `ContainerPort`<sup>Optional</sup> <a name="ContainerPort" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPorts.property.containerPort"></a>

```go
ContainerPort *f64
```

- *Type:* *f64

Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#container_port GoogleCloudRunV2Job#container_port}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPorts.property.name"></a>

```go
Name *string
```

- *Type:* *string

If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#name GoogleCloudRunV2Job#name}

---

### GoogleCloudRunV2JobTemplateTemplateContainersResources <a name="GoogleCloudRunV2JobTemplateTemplateContainersResources" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobTemplateTemplateContainersResources {
	Limits: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources.property.limits">Limits</a></code> | <code>*map[string]*string</code> | Only memory and CPU are supported. |

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources.property.limits"></a>

```go
Limits *map[string]*string
```

- *Type:* *map[string]*string

Only memory and CPU are supported.

Use key 'cpu' for CPU limit and 'memory' for memory limit. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#limits GoogleCloudRunV2Job#limits}

---

### GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts <a name="GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts {
	MountPath: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts.property.mountPath">MountPath</a></code> | <code>*string</code> | Path within the container at which the volume should be mounted. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts.property.name">Name</a></code> | <code>*string</code> | This must match the Name of a Volume. |

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts.property.mountPath"></a>

```go
MountPath *string
```

- *Type:* *string

Path within the container at which the volume should be mounted.

Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#mount_path GoogleCloudRunV2Job#mount_path}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts.property.name"></a>

```go
Name *string
```

- *Type:* *string

This must match the Name of a Volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#name GoogleCloudRunV2Job#name}

---

### GoogleCloudRunV2JobTemplateTemplateVolumes <a name="GoogleCloudRunV2JobTemplateTemplateVolumes" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobTemplateTemplateVolumes {
	Name: *string,
	CloudSqlInstance: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance,
	EmptyDir: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir,
	Gcs: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs,
	Nfs: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs,
	Secret: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.name">Name</a></code> | <code>*string</code> | Volume's name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a></code> | cloud_sql_instance block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.emptyDir">EmptyDir</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir">GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir</a></code> | empty_dir block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.gcs">Gcs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs">GoogleCloudRunV2JobTemplateTemplateVolumesGcs</a></code> | gcs block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.nfs">Nfs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs">GoogleCloudRunV2JobTemplateTemplateVolumesNfs</a></code> | nfs block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret">GoogleCloudRunV2JobTemplateTemplateVolumesSecret</a></code> | secret block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Volume's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#name GoogleCloudRunV2Job#name}

---

##### `CloudSqlInstance`<sup>Optional</sup> <a name="CloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.cloudSqlInstance"></a>

```go
CloudSqlInstance GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a>

cloud_sql_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#cloud_sql_instance GoogleCloudRunV2Job#cloud_sql_instance}

---

##### `EmptyDir`<sup>Optional</sup> <a name="EmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.emptyDir"></a>

```go
EmptyDir GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir">GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir</a>

empty_dir block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#empty_dir GoogleCloudRunV2Job#empty_dir}

---

##### `Gcs`<sup>Optional</sup> <a name="Gcs" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.gcs"></a>

```go
Gcs GoogleCloudRunV2JobTemplateTemplateVolumesGcs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs">GoogleCloudRunV2JobTemplateTemplateVolumesGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#gcs GoogleCloudRunV2Job#gcs}

---

##### `Nfs`<sup>Optional</sup> <a name="Nfs" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.nfs"></a>

```go
Nfs GoogleCloudRunV2JobTemplateTemplateVolumesNfs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs">GoogleCloudRunV2JobTemplateTemplateVolumesNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#nfs GoogleCloudRunV2Job#nfs}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.secret"></a>

```go
Secret GoogleCloudRunV2JobTemplateTemplateVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret">GoogleCloudRunV2JobTemplateTemplateVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#secret GoogleCloudRunV2Job#secret}

---

### GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance <a name="GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance {
	Instances: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance.property.instances">Instances</a></code> | <code>*[]*string</code> | The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}. |

---

##### `Instances`<sup>Optional</sup> <a name="Instances" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance.property.instances"></a>

```go
Instances *[]*string
```

- *Type:* *[]*string

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#instances GoogleCloudRunV2Job#instances}

---

### GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir <a name="GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir {
	Medium: *string,
	SizeLimit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir.property.medium">Medium</a></code> | <code>*string</code> | The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir.property.sizeLimit">SizeLimit</a></code> | <code>*string</code> | Limit on the storage usable by this EmptyDir volume. |

---

##### `Medium`<sup>Optional</sup> <a name="Medium" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir.property.medium"></a>

```go
Medium *string
```

- *Type:* *string

The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#medium GoogleCloudRunV2Job#medium}

---

##### `SizeLimit`<sup>Optional</sup> <a name="SizeLimit" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir.property.sizeLimit"></a>

```go
SizeLimit *string
```

- *Type:* *string

Limit on the storage usable by this EmptyDir volume.

The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#size_limit GoogleCloudRunV2Job#size_limit}

---

### GoogleCloudRunV2JobTemplateTemplateVolumesGcs <a name="GoogleCloudRunV2JobTemplateTemplateVolumesGcs" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs {
	Bucket: *string,
	MountOptions: *[]*string,
	ReadOnly: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs.property.bucket">Bucket</a></code> | <code>*string</code> | Name of the cloud storage bucket to back the volume. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs.property.mountOptions">MountOptions</a></code> | <code>*[]*string</code> | A list of flags to pass to the gcsfuse command for configuring this volume. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | If true, mount this volume as read-only in all mounts. If false, mount this volume as read-write. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Name of the cloud storage bucket to back the volume.

The resource service account must have permission to access the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#bucket GoogleCloudRunV2Job#bucket}

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs.property.mountOptions"></a>

```go
MountOptions *[]*string
```

- *Type:* *[]*string

A list of flags to pass to the gcsfuse command for configuring this volume.

Flags should be passed without leading dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#mount_options GoogleCloudRunV2Job#mount_options}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs.property.readOnly"></a>

```go
ReadOnly interface{}
```

- *Type:* interface{}

If true, mount this volume as read-only in all mounts. If false, mount this volume as read-write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#read_only GoogleCloudRunV2Job#read_only}

---

### GoogleCloudRunV2JobTemplateTemplateVolumesNfs <a name="GoogleCloudRunV2JobTemplateTemplateVolumesNfs" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs {
	Server: *string,
	Path: *string,
	ReadOnly: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs.property.server">Server</a></code> | <code>*string</code> | Hostname or IP address of the NFS server. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs.property.path">Path</a></code> | <code>*string</code> | Path that is exported by the NFS server. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | If true, mount this volume as read-only in all mounts. |

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs.property.server"></a>

```go
Server *string
```

- *Type:* *string

Hostname or IP address of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#server GoogleCloudRunV2Job#server}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path that is exported by the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#path GoogleCloudRunV2Job#path}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs.property.readOnly"></a>

```go
ReadOnly interface{}
```

- *Type:* interface{}

If true, mount this volume as read-only in all mounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#read_only GoogleCloudRunV2Job#read_only}

---

### GoogleCloudRunV2JobTemplateTemplateVolumesSecret <a name="GoogleCloudRunV2JobTemplateTemplateVolumesSecret" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret {
	Secret: *string,
	DefaultMode: *f64,
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret.property.secret">Secret</a></code> | <code>*string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret.property.defaultMode">DefaultMode</a></code> | <code>*f64</code> | Integer representation of mode bits to use on created files by default. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret.property.items">Items</a></code> | <code>interface{}</code> | items block. |

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#secret GoogleCloudRunV2Job#secret}

---

##### `DefaultMode`<sup>Optional</sup> <a name="DefaultMode" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret.property.defaultMode"></a>

```go
DefaultMode *f64
```

- *Type:* *f64

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#default_mode GoogleCloudRunV2Job#default_mode}

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#items GoogleCloudRunV2Job#items}

---

### GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems <a name="GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems {
	Path: *string,
	Version: *string,
	Mode: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems.property.path">Path</a></code> | <code>*string</code> | The relative path of the secret in the container. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems.property.version">Version</a></code> | <code>*string</code> | The Cloud Secret Manager secret version. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems.property.mode">Mode</a></code> | <code>*f64</code> | Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems.property.path"></a>

```go
Path *string
```

- *Type:* *string

The relative path of the secret in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#path GoogleCloudRunV2Job#path}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems.property.version"></a>

```go
Version *string
```

- *Type:* *string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#version GoogleCloudRunV2Job#version}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems.property.mode"></a>

```go
Mode *f64
```

- *Type:* *f64

Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal).

If 0 or not set, the Volume's default mode will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#mode GoogleCloudRunV2Job#mode}

---

### GoogleCloudRunV2JobTemplateTemplateVpcAccess <a name="GoogleCloudRunV2JobTemplateTemplateVpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobTemplateTemplateVpcAccess {
	Connector: *string,
	Egress: *string,
	NetworkInterfaces: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess.property.connector">Connector</a></code> | <code>*string</code> | VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess.property.egress">Egress</a></code> | <code>*string</code> | Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess.property.networkInterfaces">NetworkInterfaces</a></code> | <code>interface{}</code> | network_interfaces block. |

---

##### `Connector`<sup>Optional</sup> <a name="Connector" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess.property.connector"></a>

```go
Connector *string
```

- *Type:* *string

VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#connector GoogleCloudRunV2Job#connector}

---

##### `Egress`<sup>Optional</sup> <a name="Egress" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess.property.egress"></a>

```go
Egress *string
```

- *Type:* *string

Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#egress GoogleCloudRunV2Job#egress}

---

##### `NetworkInterfaces`<sup>Optional</sup> <a name="NetworkInterfaces" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess.property.networkInterfaces"></a>

```go
NetworkInterfaces interface{}
```

- *Type:* interface{}

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#network_interfaces GoogleCloudRunV2Job#network_interfaces}

---

### GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces <a name="GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces {
	Network: *string,
	Subnetwork: *string,
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces.property.network">Network</a></code> | <code>*string</code> | The VPC network that the Cloud Run resource will be able to send traffic to. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The VPC subnetwork that the Cloud Run resource will get IPs from. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces.property.tags">Tags</a></code> | <code>*[]*string</code> | Network tags applied to this Cloud Run job. |

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces.property.network"></a>

```go
Network *string
```

- *Type:* *string

The VPC network that the Cloud Run resource will be able to send traffic to.

At least one of network or subnetwork must be specified. If both
network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If network is not specified, it will be
looked up from the subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#network GoogleCloudRunV2Job#network}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The VPC subnetwork that the Cloud Run resource will get IPs from.

At least one of network or subnetwork must be specified. If both
network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If subnetwork is not specified, the
subnetwork with the same name with the network will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#subnetwork GoogleCloudRunV2Job#subnetwork}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Network tags applied to this Cloud Run job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#tags GoogleCloudRunV2Job#tags}

---

### GoogleCloudRunV2JobTerminalCondition <a name="GoogleCloudRunV2JobTerminalCondition" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobTerminalCondition {

}
```


### GoogleCloudRunV2JobTimeouts <a name="GoogleCloudRunV2JobTimeouts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

&googlecloudrunv2job.GoogleCloudRunV2JobTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#create GoogleCloudRunV2Job#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#delete GoogleCloudRunV2Job#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#update GoogleCloudRunV2Job#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#create GoogleCloudRunV2Job#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#delete GoogleCloudRunV2Job#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloud_run_v2_job#update GoogleCloudRunV2Job#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudRunV2JobBinaryAuthorizationOutputReference <a name="GoogleCloudRunV2JobBinaryAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobBinaryAuthorizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2JobBinaryAuthorizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.resetBreakglassJustification">ResetBreakglassJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.resetUseDefault">ResetUseDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBreakglassJustification` <a name="ResetBreakglassJustification" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.resetBreakglassJustification"></a>

```go
func ResetBreakglassJustification()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.resetPolicy"></a>

```go
func ResetPolicy()
```

##### `ResetUseDefault` <a name="ResetUseDefault" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.resetUseDefault"></a>

```go
func ResetUseDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.breakglassJustificationInput">BreakglassJustificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.useDefaultInput">UseDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.breakglassJustification">BreakglassJustification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.useDefault">UseDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization">GoogleCloudRunV2JobBinaryAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BreakglassJustificationInput`<sup>Optional</sup> <a name="BreakglassJustificationInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.breakglassJustificationInput"></a>

```go
func BreakglassJustificationInput() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `UseDefaultInput`<sup>Optional</sup> <a name="UseDefaultInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.useDefaultInput"></a>

```go
func UseDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `BreakglassJustification`<sup>Required</sup> <a name="BreakglassJustification" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.breakglassJustification"></a>

```go
func BreakglassJustification() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `UseDefault`<sup>Required</sup> <a name="UseDefault" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.useDefault"></a>

```go
func UseDefault() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2JobBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization">GoogleCloudRunV2JobBinaryAuthorization</a>

---


### GoogleCloudRunV2JobConditionsList <a name="GoogleCloudRunV2JobConditionsList" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2JobConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2JobConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleCloudRunV2JobConditionsOutputReference <a name="GoogleCloudRunV2JobConditionsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2JobConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.executionReason">ExecutionReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.revisionReason">RevisionReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditions">GoogleCloudRunV2JobConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExecutionReason`<sup>Required</sup> <a name="ExecutionReason" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.executionReason"></a>

```go
func ExecutionReason() *string
```

- *Type:* *string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.lastTransitionTime"></a>

```go
func LastTransitionTime() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `RevisionReason`<sup>Required</sup> <a name="RevisionReason" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.revisionReason"></a>

```go
func RevisionReason() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2JobConditions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditions">GoogleCloudRunV2JobConditions</a>

---


### GoogleCloudRunV2JobLatestCreatedExecutionList <a name="GoogleCloudRunV2JobLatestCreatedExecutionList" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobLatestCreatedExecutionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2JobLatestCreatedExecutionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2JobLatestCreatedExecutionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleCloudRunV2JobLatestCreatedExecutionOutputReference <a name="GoogleCloudRunV2JobLatestCreatedExecutionOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobLatestCreatedExecutionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2JobLatestCreatedExecutionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.completionTime">CompletionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecution">GoogleCloudRunV2JobLatestCreatedExecution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompletionTime`<sup>Required</sup> <a name="CompletionTime" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.completionTime"></a>

```go
func CompletionTime() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2JobLatestCreatedExecution
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecution">GoogleCloudRunV2JobLatestCreatedExecution</a>

---


### GoogleCloudRunV2JobTemplateOutputReference <a name="GoogleCloudRunV2JobTemplateOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2JobTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.putTemplate">PutTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.resetParallelism">ResetParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.resetTaskCount">ResetTaskCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTemplate` <a name="PutTemplate" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.putTemplate"></a>

```go
func PutTemplate(value GoogleCloudRunV2JobTemplateTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate">GoogleCloudRunV2JobTemplateTemplate</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetParallelism` <a name="ResetParallelism" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.resetParallelism"></a>

```go
func ResetParallelism()
```

##### `ResetTaskCount` <a name="ResetTaskCount" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.resetTaskCount"></a>

```go
func ResetTaskCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.template">Template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference">GoogleCloudRunV2JobTemplateTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.parallelismInput">ParallelismInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.taskCountInput">TaskCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.templateInput">TemplateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate">GoogleCloudRunV2JobTemplateTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.parallelism">Parallelism</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.taskCount">TaskCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate">GoogleCloudRunV2JobTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.template"></a>

```go
func Template() GoogleCloudRunV2JobTemplateTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference">GoogleCloudRunV2JobTemplateTemplateOutputReference</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ParallelismInput`<sup>Optional</sup> <a name="ParallelismInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.parallelismInput"></a>

```go
func ParallelismInput() *f64
```

- *Type:* *f64

---

##### `TaskCountInput`<sup>Optional</sup> <a name="TaskCountInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.taskCountInput"></a>

```go
func TaskCountInput() *f64
```

- *Type:* *f64

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.templateInput"></a>

```go
func TemplateInput() GoogleCloudRunV2JobTemplateTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate">GoogleCloudRunV2JobTemplateTemplate</a>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Parallelism`<sup>Required</sup> <a name="Parallelism" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.parallelism"></a>

```go
func Parallelism() *f64
```

- *Type:* *f64

---

##### `TaskCount`<sup>Required</sup> <a name="TaskCount" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.taskCount"></a>

```go
func TaskCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2JobTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate">GoogleCloudRunV2JobTemplate</a>

---


### GoogleCloudRunV2JobTemplateTemplateContainersEnvList <a name="GoogleCloudRunV2JobTemplateTemplateContainersEnvList" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateContainersEnvList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2JobTemplateTemplateContainersEnvList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.putValueSource">PutValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.resetValueSource">ResetValueSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueSource` <a name="PutValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.putValueSource"></a>

```go
func PutValueSource(value GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.putValueSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource</a>

---

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetValueSource` <a name="ResetValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.resetValueSource"></a>

```go
func ResetValueSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueSource">ValueSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueSourceInput">ValueSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueSource`<sup>Required</sup> <a name="ValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueSource"></a>

```go
func ValueSource() GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ValueSourceInput`<sup>Optional</sup> <a name="ValueSourceInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueSourceInput"></a>

```go
func ValueSourceInput() GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef">PutSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef">ResetSecretKeyRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretKeyRef` <a name="PutSecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef"></a>

```go
func PutSecretKeyRef(value GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `ResetSecretKeyRef` <a name="ResetSecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef"></a>

```go
func ResetSecretKeyRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput">SecretKeyRefInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretKeyRef`<sup>Required</sup> <a name="SecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef"></a>

```go
func SecretKeyRef() GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a>

---

##### `SecretKeyRefInput`<sup>Optional</sup> <a name="SecretKeyRefInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput"></a>

```go
func SecretKeyRefInput() GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource</a>

---


### GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a>

---


### GoogleCloudRunV2JobTemplateTemplateContainersList <a name="GoogleCloudRunV2JobTemplateTemplateContainersList" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateContainersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2JobTemplateTemplateContainersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2JobTemplateTemplateContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2JobTemplateTemplateContainersOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateContainersOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateContainersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2JobTemplateTemplateContainersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putPorts">PutPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putVolumeMounts">PutVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetVolumeMounts">ResetVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetWorkingDir">ResetWorkingDir</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putEnv"></a>

```go
func PutEnv(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPorts` <a name="PutPorts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putPorts"></a>

```go
func PutPorts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putPorts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResources` <a name="PutResources" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putResources"></a>

```go
func PutResources(value GoogleCloudRunV2JobTemplateTemplateContainersResources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources">GoogleCloudRunV2JobTemplateTemplateContainersResources</a>

---

##### `PutVolumeMounts` <a name="PutVolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putVolumeMounts"></a>

```go
func PutVolumeMounts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetCommand"></a>

```go
func ResetCommand()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetEnv"></a>

```go
func ResetEnv()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetPorts"></a>

```go
func ResetPorts()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetResources"></a>

```go
func ResetResources()
```

##### `ResetVolumeMounts` <a name="ResetVolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetVolumeMounts"></a>

```go
func ResetVolumeMounts()
```

##### `ResetWorkingDir` <a name="ResetWorkingDir" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetWorkingDir"></a>

```go
func ResetWorkingDir()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.env">Env</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList">GoogleCloudRunV2JobTemplateTemplateContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.ports">Ports</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList">GoogleCloudRunV2JobTemplateTemplateContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference">GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.volumeMounts">VolumeMounts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList">GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.envInput">EnvInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.portsInput">PortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources">GoogleCloudRunV2JobTemplateTemplateContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.volumeMountsInput">VolumeMountsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.workingDirInput">WorkingDirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.workingDir">WorkingDir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.env"></a>

```go
func Env() GoogleCloudRunV2JobTemplateTemplateContainersEnvList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList">GoogleCloudRunV2JobTemplateTemplateContainersEnvList</a>

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.ports"></a>

```go
func Ports() GoogleCloudRunV2JobTemplateTemplateContainersPortsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList">GoogleCloudRunV2JobTemplateTemplateContainersPortsList</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.resources"></a>

```go
func Resources() GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference">GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference</a>

---

##### `VolumeMounts`<sup>Required</sup> <a name="VolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.volumeMounts"></a>

```go
func VolumeMounts() GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList">GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.envInput"></a>

```go
func EnvInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.portsInput"></a>

```go
func PortsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() GoogleCloudRunV2JobTemplateTemplateContainersResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources">GoogleCloudRunV2JobTemplateTemplateContainersResources</a>

---

##### `VolumeMountsInput`<sup>Optional</sup> <a name="VolumeMountsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.volumeMountsInput"></a>

```go
func VolumeMountsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkingDirInput`<sup>Optional</sup> <a name="WorkingDirInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.workingDirInput"></a>

```go
func WorkingDirInput() *string
```

- *Type:* *string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `WorkingDir`<sup>Required</sup> <a name="WorkingDir" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.workingDir"></a>

```go
func WorkingDir() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2JobTemplateTemplateContainersPortsList <a name="GoogleCloudRunV2JobTemplateTemplateContainersPortsList" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateContainersPortsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2JobTemplateTemplateContainersPortsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.resetContainerPort">ResetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerPort` <a name="ResetContainerPort" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.resetContainerPort"></a>

```go
func ResetContainerPort()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.containerPortInput">ContainerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerPortInput`<sup>Optional</sup> <a name="ContainerPortInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.containerPortInput"></a>

```go
func ContainerPortInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.containerPort"></a>

```go
func ContainerPort() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.resetLimits">ResetLimits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLimits` <a name="ResetLimits" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.resetLimits"></a>

```go
func ResetLimits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.limitsInput">LimitsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.limits">Limits</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources">GoogleCloudRunV2JobTemplateTemplateContainersResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.limitsInput"></a>

```go
func LimitsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.limits"></a>

```go
func Limits() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2JobTemplateTemplateContainersResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources">GoogleCloudRunV2JobTemplateTemplateContainersResources</a>

---


### GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList <a name="GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```go
func MountPathInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2JobTemplateTemplateOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2JobTemplateTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.putContainers">PutContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.putVpcAccess">PutVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetContainers">ResetContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetEncryptionKey">ResetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetExecutionEnvironment">ResetExecutionEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetVpcAccess">ResetVpcAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainers` <a name="PutContainers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.putContainers"></a>

```go
func PutContainers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.putContainers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVolumes` <a name="PutVolumes" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.putVolumes"></a>

```go
func PutVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.putVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVpcAccess` <a name="PutVpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.putVpcAccess"></a>

```go
func PutVpcAccess(value GoogleCloudRunV2JobTemplateTemplateVpcAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.putVpcAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess">GoogleCloudRunV2JobTemplateTemplateVpcAccess</a>

---

##### `ResetContainers` <a name="ResetContainers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetContainers"></a>

```go
func ResetContainers()
```

##### `ResetEncryptionKey` <a name="ResetEncryptionKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetEncryptionKey"></a>

```go
func ResetEncryptionKey()
```

##### `ResetExecutionEnvironment` <a name="ResetExecutionEnvironment" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetExecutionEnvironment"></a>

```go
func ResetExecutionEnvironment()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetMaxRetries"></a>

```go
func ResetMaxRetries()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetVolumes"></a>

```go
func ResetVolumes()
```

##### `ResetVpcAccess` <a name="ResetVpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetVpcAccess"></a>

```go
func ResetVpcAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.containers">Containers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList">GoogleCloudRunV2JobTemplateTemplateContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList">GoogleCloudRunV2JobTemplateTemplateVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.vpcAccess">VpcAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference">GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.containersInput">ContainersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.executionEnvironmentInput">ExecutionEnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.volumesInput">VolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.vpcAccessInput">VpcAccessInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess">GoogleCloudRunV2JobTemplateTemplateVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.executionEnvironment">ExecutionEnvironment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate">GoogleCloudRunV2JobTemplateTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.containers"></a>

```go
func Containers() GoogleCloudRunV2JobTemplateTemplateContainersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList">GoogleCloudRunV2JobTemplateTemplateContainersList</a>

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.volumes"></a>

```go
func Volumes() GoogleCloudRunV2JobTemplateTemplateVolumesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList">GoogleCloudRunV2JobTemplateTemplateVolumesList</a>

---

##### `VpcAccess`<sup>Required</sup> <a name="VpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.vpcAccess"></a>

```go
func VpcAccess() GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference">GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference</a>

---

##### `ContainersInput`<sup>Optional</sup> <a name="ContainersInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.containersInput"></a>

```go
func ContainersInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.encryptionKeyInput"></a>

```go
func EncryptionKeyInput() *string
```

- *Type:* *string

---

##### `ExecutionEnvironmentInput`<sup>Optional</sup> <a name="ExecutionEnvironmentInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.executionEnvironmentInput"></a>

```go
func ExecutionEnvironmentInput() *string
```

- *Type:* *string

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.maxRetriesInput"></a>

```go
func MaxRetriesInput() *f64
```

- *Type:* *f64

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.volumesInput"></a>

```go
func VolumesInput() interface{}
```

- *Type:* interface{}

---

##### `VpcAccessInput`<sup>Optional</sup> <a name="VpcAccessInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.vpcAccessInput"></a>

```go
func VpcAccessInput() GoogleCloudRunV2JobTemplateTemplateVpcAccess
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess">GoogleCloudRunV2JobTemplateTemplateVpcAccess</a>

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.encryptionKey"></a>

```go
func EncryptionKey() *string
```

- *Type:* *string

---

##### `ExecutionEnvironment`<sup>Required</sup> <a name="ExecutionEnvironment" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.executionEnvironment"></a>

```go
func ExecutionEnvironment() *string
```

- *Type:* *string

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.maxRetries"></a>

```go
func MaxRetries() *f64
```

- *Type:* *f64

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2JobTemplateTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate">GoogleCloudRunV2JobTemplateTemplate</a>

---


### GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.resetInstances">ResetInstances</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstances` <a name="ResetInstances" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.resetInstances"></a>

```go
func ResetInstances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput">InstancesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.instances">Instances</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput"></a>

```go
func InstancesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.instances"></a>

```go
func Instances() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a>

---


### GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.resetMedium">ResetMedium</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.resetSizeLimit">ResetSizeLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMedium` <a name="ResetMedium" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.resetMedium"></a>

```go
func ResetMedium()
```

##### `ResetSizeLimit` <a name="ResetSizeLimit" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.resetSizeLimit"></a>

```go
func ResetSizeLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.mediumInput">MediumInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.sizeLimitInput">SizeLimitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.medium">Medium</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.sizeLimit">SizeLimit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir">GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MediumInput`<sup>Optional</sup> <a name="MediumInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.mediumInput"></a>

```go
func MediumInput() *string
```

- *Type:* *string

---

##### `SizeLimitInput`<sup>Optional</sup> <a name="SizeLimitInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.sizeLimitInput"></a>

```go
func SizeLimitInput() *string
```

- *Type:* *string

---

##### `Medium`<sup>Required</sup> <a name="Medium" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.medium"></a>

```go
func Medium() *string
```

- *Type:* *string

---

##### `SizeLimit`<sup>Required</sup> <a name="SizeLimit" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.sizeLimit"></a>

```go
func SizeLimit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir">GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir</a>

---


### GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.resetMountOptions">ResetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.resetMountOptions"></a>

```go
func ResetMountOptions()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.resetReadOnly"></a>

```go
func ResetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.mountOptionsInput">MountOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.mountOptions">MountOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs">GoogleCloudRunV2JobTemplateTemplateVolumesGcs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.mountOptionsInput"></a>

```go
func MountOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.readOnlyInput"></a>

```go
func ReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.mountOptions"></a>

```go
func MountOptions() *[]*string
```

- *Type:* *[]*string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.readOnly"></a>

```go
func ReadOnly() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2JobTemplateTemplateVolumesGcs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs">GoogleCloudRunV2JobTemplateTemplateVolumesGcs</a>

---


### GoogleCloudRunV2JobTemplateTemplateVolumesList <a name="GoogleCloudRunV2JobTemplateTemplateVolumesList" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2JobTemplateTemplateVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.resetReadOnly"></a>

```go
func ResetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.serverInput">ServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.server">Server</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs">GoogleCloudRunV2JobTemplateTemplateVolumesNfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.readOnlyInput"></a>

```go
func ReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.serverInput"></a>

```go
func ServerInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.readOnly"></a>

```go
func ReadOnly() interface{}
```

- *Type:* interface{}

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.server"></a>

```go
func Server() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2JobTemplateTemplateVolumesNfs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs">GoogleCloudRunV2JobTemplateTemplateVolumesNfs</a>

---


### GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putCloudSqlInstance">PutCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putEmptyDir">PutEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putGcs">PutGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putNfs">PutNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resetCloudSqlInstance">ResetCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resetEmptyDir">ResetEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resetGcs">ResetGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resetNfs">ResetNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudSqlInstance` <a name="PutCloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putCloudSqlInstance"></a>

```go
func PutCloudSqlInstance(value GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putCloudSqlInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a>

---

##### `PutEmptyDir` <a name="PutEmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putEmptyDir"></a>

```go
func PutEmptyDir(value GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putEmptyDir.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir">GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir</a>

---

##### `PutGcs` <a name="PutGcs" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putGcs"></a>

```go
func PutGcs(value GoogleCloudRunV2JobTemplateTemplateVolumesGcs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putGcs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs">GoogleCloudRunV2JobTemplateTemplateVolumesGcs</a>

---

##### `PutNfs` <a name="PutNfs" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putNfs"></a>

```go
func PutNfs(value GoogleCloudRunV2JobTemplateTemplateVolumesNfs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putNfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs">GoogleCloudRunV2JobTemplateTemplateVolumesNfs</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putSecret"></a>

```go
func PutSecret(value GoogleCloudRunV2JobTemplateTemplateVolumesSecret)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret">GoogleCloudRunV2JobTemplateTemplateVolumesSecret</a>

---

##### `ResetCloudSqlInstance` <a name="ResetCloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resetCloudSqlInstance"></a>

```go
func ResetCloudSqlInstance()
```

##### `ResetEmptyDir` <a name="ResetEmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resetEmptyDir"></a>

```go
func ResetEmptyDir()
```

##### `ResetGcs` <a name="ResetGcs" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resetGcs"></a>

```go
func ResetGcs()
```

##### `ResetNfs` <a name="ResetNfs" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resetNfs"></a>

```go
func ResetNfs()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resetSecret"></a>

```go
func ResetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference">GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.emptyDir">EmptyDir</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference">GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.gcs">Gcs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference">GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.nfs">Nfs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference">GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference">GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.cloudSqlInstanceInput">CloudSqlInstanceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.emptyDirInput">EmptyDirInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir">GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.gcsInput">GcsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs">GoogleCloudRunV2JobTemplateTemplateVolumesGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.nfsInput">NfsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs">GoogleCloudRunV2JobTemplateTemplateVolumesNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.secretInput">SecretInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret">GoogleCloudRunV2JobTemplateTemplateVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudSqlInstance`<sup>Required</sup> <a name="CloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.cloudSqlInstance"></a>

```go
func CloudSqlInstance() GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference">GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference</a>

---

##### `EmptyDir`<sup>Required</sup> <a name="EmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.emptyDir"></a>

```go
func EmptyDir() GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference">GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference</a>

---

##### `Gcs`<sup>Required</sup> <a name="Gcs" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.gcs"></a>

```go
func Gcs() GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference">GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference</a>

---

##### `Nfs`<sup>Required</sup> <a name="Nfs" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.nfs"></a>

```go
func Nfs() GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference">GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.secret"></a>

```go
func Secret() GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference">GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference</a>

---

##### `CloudSqlInstanceInput`<sup>Optional</sup> <a name="CloudSqlInstanceInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.cloudSqlInstanceInput"></a>

```go
func CloudSqlInstanceInput() GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a>

---

##### `EmptyDirInput`<sup>Optional</sup> <a name="EmptyDirInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.emptyDirInput"></a>

```go
func EmptyDirInput() GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir">GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir</a>

---

##### `GcsInput`<sup>Optional</sup> <a name="GcsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.gcsInput"></a>

```go
func GcsInput() GoogleCloudRunV2JobTemplateTemplateVolumesGcs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs">GoogleCloudRunV2JobTemplateTemplateVolumesGcs</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NfsInput`<sup>Optional</sup> <a name="NfsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.nfsInput"></a>

```go
func NfsInput() GoogleCloudRunV2JobTemplateTemplateVolumesNfs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs">GoogleCloudRunV2JobTemplateTemplateVolumesNfs</a>

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.secretInput"></a>

```go
func SecretInput() GoogleCloudRunV2JobTemplateTemplateVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret">GoogleCloudRunV2JobTemplateTemplateVolumesSecret</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList <a name="GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.modeInput">ModeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.mode">Mode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.modeInput"></a>

```go
func ModeInput() *f64
```

- *Type:* *f64

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.mode"></a>

```go
func Mode() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resetDefaultMode">ResetDefaultMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultMode` <a name="ResetDefaultMode" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resetDefaultMode"></a>

```go
func ResetDefaultMode()
```

##### `ResetItems` <a name="ResetItems" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.items">Items</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList">GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.defaultModeInput">DefaultModeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.defaultMode">DefaultMode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret">GoogleCloudRunV2JobTemplateTemplateVolumesSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.items"></a>

```go
func Items() GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList">GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList</a>

---

##### `DefaultModeInput`<sup>Optional</sup> <a name="DefaultModeInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.defaultModeInput"></a>

```go
func DefaultModeInput() *f64
```

- *Type:* *f64

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `DefaultMode`<sup>Required</sup> <a name="DefaultMode" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.defaultMode"></a>

```go
func DefaultMode() *f64
```

- *Type:* *f64

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2JobTemplateTemplateVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret">GoogleCloudRunV2JobTemplateTemplateVolumesSecret</a>

---


### GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList <a name="GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.putNetworkInterfaces">PutNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.resetConnector">ResetConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.resetEgress">ResetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.resetNetworkInterfaces">ResetNetworkInterfaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkInterfaces` <a name="PutNetworkInterfaces" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.putNetworkInterfaces"></a>

```go
func PutNetworkInterfaces(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConnector` <a name="ResetConnector" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.resetConnector"></a>

```go
func ResetConnector()
```

##### `ResetEgress` <a name="ResetEgress" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.resetEgress"></a>

```go
func ResetEgress()
```

##### `ResetNetworkInterfaces` <a name="ResetNetworkInterfaces" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.resetNetworkInterfaces"></a>

```go
func ResetNetworkInterfaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList">GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.connectorInput">ConnectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.egressInput">EgressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.networkInterfacesInput">NetworkInterfacesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.connector">Connector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.egress">Egress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess">GoogleCloudRunV2JobTemplateTemplateVpcAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.networkInterfaces"></a>

```go
func NetworkInterfaces() GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList">GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList</a>

---

##### `ConnectorInput`<sup>Optional</sup> <a name="ConnectorInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.connectorInput"></a>

```go
func ConnectorInput() *string
```

- *Type:* *string

---

##### `EgressInput`<sup>Optional</sup> <a name="EgressInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.egressInput"></a>

```go
func EgressInput() *string
```

- *Type:* *string

---

##### `NetworkInterfacesInput`<sup>Optional</sup> <a name="NetworkInterfacesInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.networkInterfacesInput"></a>

```go
func NetworkInterfacesInput() interface{}
```

- *Type:* interface{}

---

##### `Connector`<sup>Required</sup> <a name="Connector" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.connector"></a>

```go
func Connector() *string
```

- *Type:* *string

---

##### `Egress`<sup>Required</sup> <a name="Egress" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.egress"></a>

```go
func Egress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2JobTemplateTemplateVpcAccess
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess">GoogleCloudRunV2JobTemplateTemplateVpcAccess</a>

---


### GoogleCloudRunV2JobTerminalConditionList <a name="GoogleCloudRunV2JobTerminalConditionList" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTerminalConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2JobTerminalConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2JobTerminalConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleCloudRunV2JobTerminalConditionOutputReference <a name="GoogleCloudRunV2JobTerminalConditionOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTerminalConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2JobTerminalConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.executionReason">ExecutionReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.revisionReason">RevisionReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalCondition">GoogleCloudRunV2JobTerminalCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExecutionReason`<sup>Required</sup> <a name="ExecutionReason" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.executionReason"></a>

```go
func ExecutionReason() *string
```

- *Type:* *string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.lastTransitionTime"></a>

```go
func LastTransitionTime() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `RevisionReason`<sup>Required</sup> <a name="RevisionReason" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.revisionReason"></a>

```go
func RevisionReason() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2JobTerminalCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalCondition">GoogleCloudRunV2JobTerminalCondition</a>

---


### GoogleCloudRunV2JobTimeoutsOutputReference <a name="GoogleCloudRunV2JobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudrunv2job"

googlecloudrunv2job.NewGoogleCloudRunV2JobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2JobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



