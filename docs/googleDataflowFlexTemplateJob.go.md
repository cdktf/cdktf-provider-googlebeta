# `googleDataflowFlexTemplateJob` Submodule <a name="`googleDataflowFlexTemplateJob` Submodule" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataflowFlexTemplateJob <a name="GoogleDataflowFlexTemplateJob" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job google_dataflow_flex_template_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataflowflextemplatejob"

googledataflowflextemplatejob.NewGoogleDataflowFlexTemplateJob(scope Construct, id *string, config GoogleDataflowFlexTemplateJobConfig) GoogleDataflowFlexTemplateJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig">GoogleDataflowFlexTemplateJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig">GoogleDataflowFlexTemplateJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetAdditionalExperiments">ResetAdditionalExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetAutoscalingAlgorithm">ResetAutoscalingAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetEnableStreamingEngine">ResetEnableStreamingEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetIpConfiguration">ResetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetLauncherMachineType">ResetLauncherMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetMaxWorkers">ResetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetNumWorkers">ResetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetOnDelete">ResetOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetSdkContainerImage">ResetSdkContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetSkipWaitOnJobTermination">ResetSkipWaitOnJobTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetStagingLocation">ResetStagingLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetTempLocation">ResetTempLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetTransformNameMapping">ResetTransformNameMapping</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAdditionalExperiments` <a name="ResetAdditionalExperiments" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetAdditionalExperiments"></a>

```go
func ResetAdditionalExperiments()
```

##### `ResetAutoscalingAlgorithm` <a name="ResetAutoscalingAlgorithm" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetAutoscalingAlgorithm"></a>

```go
func ResetAutoscalingAlgorithm()
```

##### `ResetEnableStreamingEngine` <a name="ResetEnableStreamingEngine" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetEnableStreamingEngine"></a>

```go
func ResetEnableStreamingEngine()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetId"></a>

```go
func ResetId()
```

##### `ResetIpConfiguration` <a name="ResetIpConfiguration" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetIpConfiguration"></a>

```go
func ResetIpConfiguration()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLauncherMachineType` <a name="ResetLauncherMachineType" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetLauncherMachineType"></a>

```go
func ResetLauncherMachineType()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetMachineType"></a>

```go
func ResetMachineType()
```

##### `ResetMaxWorkers` <a name="ResetMaxWorkers" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetMaxWorkers"></a>

```go
func ResetMaxWorkers()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetNumWorkers` <a name="ResetNumWorkers" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetNumWorkers"></a>

```go
func ResetNumWorkers()
```

##### `ResetOnDelete` <a name="ResetOnDelete" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetOnDelete"></a>

```go
func ResetOnDelete()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSdkContainerImage` <a name="ResetSdkContainerImage" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetSdkContainerImage"></a>

```go
func ResetSdkContainerImage()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```

##### `ResetSkipWaitOnJobTermination` <a name="ResetSkipWaitOnJobTermination" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetSkipWaitOnJobTermination"></a>

```go
func ResetSkipWaitOnJobTermination()
```

##### `ResetStagingLocation` <a name="ResetStagingLocation" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetStagingLocation"></a>

```go
func ResetStagingLocation()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```

##### `ResetTempLocation` <a name="ResetTempLocation" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetTempLocation"></a>

```go
func ResetTempLocation()
```

##### `ResetTransformNameMapping` <a name="ResetTransformNameMapping" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetTransformNameMapping"></a>

```go
func ResetTransformNameMapping()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataflowFlexTemplateJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataflowflextemplatejob"

googledataflowflextemplatejob.GoogleDataflowFlexTemplateJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataflowflextemplatejob"

googledataflowflextemplatejob.GoogleDataflowFlexTemplateJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataflowflextemplatejob"

googledataflowflextemplatejob.GoogleDataflowFlexTemplateJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataflowflextemplatejob"

googledataflowflextemplatejob.GoogleDataflowFlexTemplateJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleDataflowFlexTemplateJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDataflowFlexTemplateJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDataflowFlexTemplateJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataflowFlexTemplateJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.jobId">JobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.additionalExperimentsInput">AdditionalExperimentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.autoscalingAlgorithmInput">AutoscalingAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.containerSpecGcsPathInput">ContainerSpecGcsPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.enableStreamingEngineInput">EnableStreamingEngineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.ipConfigurationInput">IpConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.launcherMachineTypeInput">LauncherMachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.maxWorkersInput">MaxWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.numWorkersInput">NumWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.onDeleteInput">OnDeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.sdkContainerImageInput">SdkContainerImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.skipWaitOnJobTerminationInput">SkipWaitOnJobTerminationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.stagingLocationInput">StagingLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.tempLocationInput">TempLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.transformNameMappingInput">TransformNameMappingInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.additionalExperiments">AdditionalExperiments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.autoscalingAlgorithm">AutoscalingAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.containerSpecGcsPath">ContainerSpecGcsPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.enableStreamingEngine">EnableStreamingEngine</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.ipConfiguration">IpConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.launcherMachineType">LauncherMachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.numWorkers">NumWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.onDelete">OnDelete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.sdkContainerImage">SdkContainerImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.skipWaitOnJobTermination">SkipWaitOnJobTermination</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.stagingLocation">StagingLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.tempLocation">TempLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.transformNameMapping">TransformNameMapping</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.jobId"></a>

```go
func JobId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `AdditionalExperimentsInput`<sup>Optional</sup> <a name="AdditionalExperimentsInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.additionalExperimentsInput"></a>

```go
func AdditionalExperimentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AutoscalingAlgorithmInput`<sup>Optional</sup> <a name="AutoscalingAlgorithmInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.autoscalingAlgorithmInput"></a>

```go
func AutoscalingAlgorithmInput() *string
```

- *Type:* *string

---

##### `ContainerSpecGcsPathInput`<sup>Optional</sup> <a name="ContainerSpecGcsPathInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.containerSpecGcsPathInput"></a>

```go
func ContainerSpecGcsPathInput() *string
```

- *Type:* *string

---

##### `EnableStreamingEngineInput`<sup>Optional</sup> <a name="EnableStreamingEngineInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.enableStreamingEngineInput"></a>

```go
func EnableStreamingEngineInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpConfigurationInput`<sup>Optional</sup> <a name="IpConfigurationInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.ipConfigurationInput"></a>

```go
func IpConfigurationInput() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LauncherMachineTypeInput`<sup>Optional</sup> <a name="LauncherMachineTypeInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.launcherMachineTypeInput"></a>

```go
func LauncherMachineTypeInput() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `MaxWorkersInput`<sup>Optional</sup> <a name="MaxWorkersInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.maxWorkersInput"></a>

```go
func MaxWorkersInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `NumWorkersInput`<sup>Optional</sup> <a name="NumWorkersInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.numWorkersInput"></a>

```go
func NumWorkersInput() *f64
```

- *Type:* *f64

---

##### `OnDeleteInput`<sup>Optional</sup> <a name="OnDeleteInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.onDeleteInput"></a>

```go
func OnDeleteInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SdkContainerImageInput`<sup>Optional</sup> <a name="SdkContainerImageInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.sdkContainerImageInput"></a>

```go
func SdkContainerImageInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `SkipWaitOnJobTerminationInput`<sup>Optional</sup> <a name="SkipWaitOnJobTerminationInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.skipWaitOnJobTerminationInput"></a>

```go
func SkipWaitOnJobTerminationInput() interface{}
```

- *Type:* interface{}

---

##### `StagingLocationInput`<sup>Optional</sup> <a name="StagingLocationInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.stagingLocationInput"></a>

```go
func StagingLocationInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `TempLocationInput`<sup>Optional</sup> <a name="TempLocationInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.tempLocationInput"></a>

```go
func TempLocationInput() *string
```

- *Type:* *string

---

##### `TransformNameMappingInput`<sup>Optional</sup> <a name="TransformNameMappingInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.transformNameMappingInput"></a>

```go
func TransformNameMappingInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AdditionalExperiments`<sup>Required</sup> <a name="AdditionalExperiments" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.additionalExperiments"></a>

```go
func AdditionalExperiments() *[]*string
```

- *Type:* *[]*string

---

##### `AutoscalingAlgorithm`<sup>Required</sup> <a name="AutoscalingAlgorithm" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.autoscalingAlgorithm"></a>

```go
func AutoscalingAlgorithm() *string
```

- *Type:* *string

---

##### `ContainerSpecGcsPath`<sup>Required</sup> <a name="ContainerSpecGcsPath" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.containerSpecGcsPath"></a>

```go
func ContainerSpecGcsPath() *string
```

- *Type:* *string

---

##### `EnableStreamingEngine`<sup>Required</sup> <a name="EnableStreamingEngine" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.enableStreamingEngine"></a>

```go
func EnableStreamingEngine() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.ipConfiguration"></a>

```go
func IpConfiguration() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LauncherMachineType`<sup>Required</sup> <a name="LauncherMachineType" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.launcherMachineType"></a>

```go
func LauncherMachineType() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `MaxWorkers`<sup>Required</sup> <a name="MaxWorkers" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.maxWorkers"></a>

```go
func MaxWorkers() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NumWorkers`<sup>Required</sup> <a name="NumWorkers" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.numWorkers"></a>

```go
func NumWorkers() *f64
```

- *Type:* *f64

---

##### `OnDelete`<sup>Required</sup> <a name="OnDelete" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.onDelete"></a>

```go
func OnDelete() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SdkContainerImage`<sup>Required</sup> <a name="SdkContainerImage" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.sdkContainerImage"></a>

```go
func SdkContainerImage() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `SkipWaitOnJobTermination`<sup>Required</sup> <a name="SkipWaitOnJobTermination" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.skipWaitOnJobTermination"></a>

```go
func SkipWaitOnJobTermination() interface{}
```

- *Type:* interface{}

---

##### `StagingLocation`<sup>Required</sup> <a name="StagingLocation" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.stagingLocation"></a>

```go
func StagingLocation() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `TempLocation`<sup>Required</sup> <a name="TempLocation" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.tempLocation"></a>

```go
func TempLocation() *string
```

- *Type:* *string

---

##### `TransformNameMapping`<sup>Required</sup> <a name="TransformNameMapping" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.transformNameMapping"></a>

```go
func TransformNameMapping() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataflowFlexTemplateJobConfig <a name="GoogleDataflowFlexTemplateJobConfig" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataflowflextemplatejob"

&googledataflowflextemplatejob.GoogleDataflowFlexTemplateJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContainerSpecGcsPath: *string,
	Name: *string,
	AdditionalExperiments: *[]*string,
	AutoscalingAlgorithm: *string,
	EnableStreamingEngine: interface{},
	Id: *string,
	IpConfiguration: *string,
	KmsKeyName: *string,
	Labels: *map[string]*string,
	LauncherMachineType: *string,
	MachineType: *string,
	MaxWorkers: *f64,
	Network: *string,
	NumWorkers: *f64,
	OnDelete: *string,
	Parameters: *map[string]*string,
	Project: *string,
	Region: *string,
	SdkContainerImage: *string,
	ServiceAccountEmail: *string,
	SkipWaitOnJobTermination: interface{},
	StagingLocation: *string,
	Subnetwork: *string,
	TempLocation: *string,
	TransformNameMapping: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.containerSpecGcsPath">ContainerSpecGcsPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#container_spec_gcs_path GoogleDataflowFlexTemplateJob#container_spec_gcs_path}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#name GoogleDataflowFlexTemplateJob#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.additionalExperiments">AdditionalExperiments</a></code> | <code>*[]*string</code> | List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.autoscalingAlgorithm">AutoscalingAlgorithm</a></code> | <code>*string</code> | The algorithm to use for autoscaling. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.enableStreamingEngine">EnableStreamingEngine</a></code> | <code>interface{}</code> | Indicates if the job should use the streaming engine feature. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#id GoogleDataflowFlexTemplateJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.ipConfiguration">IpConfiguration</a></code> | <code>*string</code> | The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE". |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User labels to be specified for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.launcherMachineType">LauncherMachineType</a></code> | <code>*string</code> | The machine type to use for launching the job. The default is n1-standard-1. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.machineType">MachineType</a></code> | <code>*string</code> | The machine type to use for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.network">Network</a></code> | <code>*string</code> | The network to which VMs will be assigned. If it is not provided, "default" will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.numWorkers">NumWorkers</a></code> | <code>*f64</code> | The initial number of Google Compute Engine instances for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.onDelete">OnDelete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#on_delete GoogleDataflowFlexTemplateJob#on_delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#parameters GoogleDataflowFlexTemplateJob#parameters}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#project GoogleDataflowFlexTemplateJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.region">Region</a></code> | <code>*string</code> | The region in which the created job should run. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.sdkContainerImage">SdkContainerImage</a></code> | <code>*string</code> | Docker registry location of container image to use for the 'worker harness. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | The Service Account email used to create the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.skipWaitOnJobTermination">SkipWaitOnJobTermination</a></code> | <code>interface{}</code> | If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.stagingLocation">StagingLocation</a></code> | <code>*string</code> | The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.tempLocation">TempLocation</a></code> | <code>*string</code> | The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.transformNameMapping">TransformNameMapping</a></code> | <code>*map[string]*string</code> | Only applicable when updating a pipeline. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerSpecGcsPath`<sup>Required</sup> <a name="ContainerSpecGcsPath" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.containerSpecGcsPath"></a>

```go
ContainerSpecGcsPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#container_spec_gcs_path GoogleDataflowFlexTemplateJob#container_spec_gcs_path}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#name GoogleDataflowFlexTemplateJob#name}.

---

##### `AdditionalExperiments`<sup>Optional</sup> <a name="AdditionalExperiments" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.additionalExperiments"></a>

```go
AdditionalExperiments *[]*string
```

- *Type:* *[]*string

List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#additional_experiments GoogleDataflowFlexTemplateJob#additional_experiments}

---

##### `AutoscalingAlgorithm`<sup>Optional</sup> <a name="AutoscalingAlgorithm" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.autoscalingAlgorithm"></a>

```go
AutoscalingAlgorithm *string
```

- *Type:* *string

The algorithm to use for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#autoscaling_algorithm GoogleDataflowFlexTemplateJob#autoscaling_algorithm}

---

##### `EnableStreamingEngine`<sup>Optional</sup> <a name="EnableStreamingEngine" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.enableStreamingEngine"></a>

```go
EnableStreamingEngine interface{}
```

- *Type:* interface{}

Indicates if the job should use the streaming engine feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#enable_streaming_engine GoogleDataflowFlexTemplateJob#enable_streaming_engine}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#id GoogleDataflowFlexTemplateJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpConfiguration`<sup>Optional</sup> <a name="IpConfiguration" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.ipConfiguration"></a>

```go
IpConfiguration *string
```

- *Type:* *string

The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#ip_configuration GoogleDataflowFlexTemplateJob#ip_configuration}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#kms_key_name GoogleDataflowFlexTemplateJob#kms_key_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. NOTE: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#labels GoogleDataflowFlexTemplateJob#labels}

---

##### `LauncherMachineType`<sup>Optional</sup> <a name="LauncherMachineType" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.launcherMachineType"></a>

```go
LauncherMachineType *string
```

- *Type:* *string

The machine type to use for launching the job. The default is n1-standard-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#launcher_machine_type GoogleDataflowFlexTemplateJob#launcher_machine_type}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The machine type to use for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#machine_type GoogleDataflowFlexTemplateJob#machine_type}

---

##### `MaxWorkers`<sup>Optional</sup> <a name="MaxWorkers" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.maxWorkers"></a>

```go
MaxWorkers *f64
```

- *Type:* *f64

The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#max_workers GoogleDataflowFlexTemplateJob#max_workers}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The network to which VMs will be assigned. If it is not provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#network GoogleDataflowFlexTemplateJob#network}

---

##### `NumWorkers`<sup>Optional</sup> <a name="NumWorkers" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.numWorkers"></a>

```go
NumWorkers *f64
```

- *Type:* *f64

The initial number of Google Compute Engine instances for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#num_workers GoogleDataflowFlexTemplateJob#num_workers}

---

##### `OnDelete`<sup>Optional</sup> <a name="OnDelete" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.onDelete"></a>

```go
OnDelete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#on_delete GoogleDataflowFlexTemplateJob#on_delete}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#parameters GoogleDataflowFlexTemplateJob#parameters}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#project GoogleDataflowFlexTemplateJob#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region in which the created job should run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#region GoogleDataflowFlexTemplateJob#region}

---

##### `SdkContainerImage`<sup>Optional</sup> <a name="SdkContainerImage" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.sdkContainerImage"></a>

```go
SdkContainerImage *string
```

- *Type:* *string

Docker registry location of container image to use for the 'worker harness.

Default is the container for the version of the SDK. Note this field is only valid for portable pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#sdk_container_image GoogleDataflowFlexTemplateJob#sdk_container_image}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

The Service Account email used to create the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#service_account_email GoogleDataflowFlexTemplateJob#service_account_email}

---

##### `SkipWaitOnJobTermination`<sup>Optional</sup> <a name="SkipWaitOnJobTermination" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.skipWaitOnJobTermination"></a>

```go
SkipWaitOnJobTermination interface{}
```

- *Type:* interface{}

If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on.

WARNING: this will lead to job name conflicts if you do not ensure that the job names are different, e.g. by embedding a release ID or by using a random_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#skip_wait_on_job_termination GoogleDataflowFlexTemplateJob#skip_wait_on_job_termination}

---

##### `StagingLocation`<sup>Optional</sup> <a name="StagingLocation" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.stagingLocation"></a>

```go
StagingLocation *string
```

- *Type:* *string

The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#staging_location GoogleDataflowFlexTemplateJob#staging_location}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#subnetwork GoogleDataflowFlexTemplateJob#subnetwork}

---

##### `TempLocation`<sup>Optional</sup> <a name="TempLocation" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.tempLocation"></a>

```go
TempLocation *string
```

- *Type:* *string

The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#temp_location GoogleDataflowFlexTemplateJob#temp_location}

---

##### `TransformNameMapping`<sup>Optional</sup> <a name="TransformNameMapping" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.transformNameMapping"></a>

```go
TransformNameMapping *map[string]*string
```

- *Type:* *map[string]*string

Only applicable when updating a pipeline.

Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_dataflow_flex_template_job#transform_name_mapping GoogleDataflowFlexTemplateJob#transform_name_mapping}

---



