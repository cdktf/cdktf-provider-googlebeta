# `googleCloudRunV2WorkerPool` Submodule <a name="`googleCloudRunV2WorkerPool` Submodule" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudRunV2WorkerPool <a name="GoogleCloudRunV2WorkerPool" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool google_cloud_run_v2_worker_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPool(scope Construct, id *string, config GoogleCloudRunV2WorkerPoolConfig) GoogleCloudRunV2WorkerPool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig">GoogleCloudRunV2WorkerPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig">GoogleCloudRunV2WorkerPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putBinaryAuthorization">PutBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putInstanceSplits">PutInstanceSplits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putScaling">PutScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putTemplate">PutTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetBinaryAuthorization">ResetBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetClient">ResetClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetClientVersion">ResetClientVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetCustomAudiences">ResetCustomAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetInstanceSplits">ResetInstanceSplits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetLaunchStage">ResetLaunchStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetScaling">ResetScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBinaryAuthorization` <a name="PutBinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putBinaryAuthorization"></a>

```go
func PutBinaryAuthorization(value GoogleCloudRunV2WorkerPoolBinaryAuthorization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putBinaryAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization">GoogleCloudRunV2WorkerPoolBinaryAuthorization</a>

---

##### `PutInstanceSplits` <a name="PutInstanceSplits" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putInstanceSplits"></a>

```go
func PutInstanceSplits(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putInstanceSplits.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScaling` <a name="PutScaling" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putScaling"></a>

```go
func PutScaling(value GoogleCloudRunV2WorkerPoolScaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling">GoogleCloudRunV2WorkerPoolScaling</a>

---

##### `PutTemplate` <a name="PutTemplate" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putTemplate"></a>

```go
func PutTemplate(value GoogleCloudRunV2WorkerPoolTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate">GoogleCloudRunV2WorkerPoolTemplate</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCloudRunV2WorkerPoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts">GoogleCloudRunV2WorkerPoolTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetBinaryAuthorization` <a name="ResetBinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetBinaryAuthorization"></a>

```go
func ResetBinaryAuthorization()
```

##### `ResetClient` <a name="ResetClient" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetClient"></a>

```go
func ResetClient()
```

##### `ResetClientVersion` <a name="ResetClientVersion" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetClientVersion"></a>

```go
func ResetClientVersion()
```

##### `ResetCustomAudiences` <a name="ResetCustomAudiences" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetCustomAudiences"></a>

```go
func ResetCustomAudiences()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceSplits` <a name="ResetInstanceSplits" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetInstanceSplits"></a>

```go
func ResetInstanceSplits()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLaunchStage` <a name="ResetLaunchStage" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetLaunchStage"></a>

```go
func ResetLaunchStage()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetProject"></a>

```go
func ResetProject()
```

##### `ResetScaling` <a name="ResetScaling" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetScaling"></a>

```go
func ResetScaling()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudRunV2WorkerPool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleCloudRunV2WorkerPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleCloudRunV2WorkerPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleCloudRunV2WorkerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudRunV2WorkerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.binaryAuthorization">BinaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference">GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList">GoogleCloudRunV2WorkerPoolConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.generation">Generation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.instanceSplits">InstanceSplits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList">GoogleCloudRunV2WorkerPoolInstanceSplitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.instanceSplitStatuses">InstanceSplitStatuses</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList">GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.lastModifier">LastModifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.latestCreatedRevision">LatestCreatedRevision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.latestReadyRevision">LatestReadyRevision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.observedGeneration">ObservedGeneration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.scaling">Scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference">GoogleCloudRunV2WorkerPoolScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.template">Template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference">GoogleCloudRunV2WorkerPoolTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.terminalCondition">TerminalCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList">GoogleCloudRunV2WorkerPoolTerminalConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference">GoogleCloudRunV2WorkerPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.binaryAuthorizationInput">BinaryAuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization">GoogleCloudRunV2WorkerPoolBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.clientInput">ClientInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.clientVersionInput">ClientVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.customAudiencesInput">CustomAudiencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.instanceSplitsInput">InstanceSplitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.launchStageInput">LaunchStageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.scalingInput">ScalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling">GoogleCloudRunV2WorkerPoolScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.templateInput">TemplateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate">GoogleCloudRunV2WorkerPoolTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.client">Client</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.clientVersion">ClientVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.customAudiences">CustomAudiences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.launchStage">LaunchStage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BinaryAuthorization`<sup>Required</sup> <a name="BinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.binaryAuthorization"></a>

```go
func BinaryAuthorization() GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference">GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.conditions"></a>

```go
func Conditions() GoogleCloudRunV2WorkerPoolConditionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList">GoogleCloudRunV2WorkerPoolConditionsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.generation"></a>

```go
func Generation() *string
```

- *Type:* *string

---

##### `InstanceSplits`<sup>Required</sup> <a name="InstanceSplits" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.instanceSplits"></a>

```go
func InstanceSplits() GoogleCloudRunV2WorkerPoolInstanceSplitsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList">GoogleCloudRunV2WorkerPoolInstanceSplitsList</a>

---

##### `InstanceSplitStatuses`<sup>Required</sup> <a name="InstanceSplitStatuses" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.instanceSplitStatuses"></a>

```go
func InstanceSplitStatuses() GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList">GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList</a>

---

##### `LastModifier`<sup>Required</sup> <a name="LastModifier" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.lastModifier"></a>

```go
func LastModifier() *string
```

- *Type:* *string

---

##### `LatestCreatedRevision`<sup>Required</sup> <a name="LatestCreatedRevision" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.latestCreatedRevision"></a>

```go
func LatestCreatedRevision() *string
```

- *Type:* *string

---

##### `LatestReadyRevision`<sup>Required</sup> <a name="LatestReadyRevision" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.latestReadyRevision"></a>

```go
func LatestReadyRevision() *string
```

- *Type:* *string

---

##### `ObservedGeneration`<sup>Required</sup> <a name="ObservedGeneration" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.observedGeneration"></a>

```go
func ObservedGeneration() *string
```

- *Type:* *string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Scaling`<sup>Required</sup> <a name="Scaling" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.scaling"></a>

```go
func Scaling() GoogleCloudRunV2WorkerPoolScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference">GoogleCloudRunV2WorkerPoolScalingOutputReference</a>

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.template"></a>

```go
func Template() GoogleCloudRunV2WorkerPoolTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference">GoogleCloudRunV2WorkerPoolTemplateOutputReference</a>

---

##### `TerminalCondition`<sup>Required</sup> <a name="TerminalCondition" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.terminalCondition"></a>

```go
func TerminalCondition() GoogleCloudRunV2WorkerPoolTerminalConditionList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList">GoogleCloudRunV2WorkerPoolTerminalConditionList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.timeouts"></a>

```go
func Timeouts() GoogleCloudRunV2WorkerPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference">GoogleCloudRunV2WorkerPoolTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BinaryAuthorizationInput`<sup>Optional</sup> <a name="BinaryAuthorizationInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.binaryAuthorizationInput"></a>

```go
func BinaryAuthorizationInput() GoogleCloudRunV2WorkerPoolBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization">GoogleCloudRunV2WorkerPoolBinaryAuthorization</a>

---

##### `ClientInput`<sup>Optional</sup> <a name="ClientInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.clientInput"></a>

```go
func ClientInput() *string
```

- *Type:* *string

---

##### `ClientVersionInput`<sup>Optional</sup> <a name="ClientVersionInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.clientVersionInput"></a>

```go
func ClientVersionInput() *string
```

- *Type:* *string

---

##### `CustomAudiencesInput`<sup>Optional</sup> <a name="CustomAudiencesInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.customAudiencesInput"></a>

```go
func CustomAudiencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceSplitsInput`<sup>Optional</sup> <a name="InstanceSplitsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.instanceSplitsInput"></a>

```go
func InstanceSplitsInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LaunchStageInput`<sup>Optional</sup> <a name="LaunchStageInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.launchStageInput"></a>

```go
func LaunchStageInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ScalingInput`<sup>Optional</sup> <a name="ScalingInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.scalingInput"></a>

```go
func ScalingInput() GoogleCloudRunV2WorkerPoolScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling">GoogleCloudRunV2WorkerPoolScaling</a>

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.templateInput"></a>

```go
func TemplateInput() GoogleCloudRunV2WorkerPoolTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate">GoogleCloudRunV2WorkerPoolTemplate</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Client`<sup>Required</sup> <a name="Client" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.client"></a>

```go
func Client() *string
```

- *Type:* *string

---

##### `ClientVersion`<sup>Required</sup> <a name="ClientVersion" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.clientVersion"></a>

```go
func ClientVersion() *string
```

- *Type:* *string

---

##### `CustomAudiences`<sup>Required</sup> <a name="CustomAudiences" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.customAudiences"></a>

```go
func CustomAudiences() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LaunchStage`<sup>Required</sup> <a name="LaunchStage" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.launchStage"></a>

```go
func LaunchStage() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudRunV2WorkerPoolBinaryAuthorization <a name="GoogleCloudRunV2WorkerPoolBinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolBinaryAuthorization {
	BreakglassJustification: *string,
	Policy: *string,
	UseDefault: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization.property.breakglassJustification">BreakglassJustification</a></code> | <code>*string</code> | If present, indicates to use Breakglass using this justification. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization.property.policy">Policy</a></code> | <code>*string</code> | The path to a binary authorization policy. Format: projects/{project}/platforms/cloudRun/{policy-name}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization.property.useDefault">UseDefault</a></code> | <code>interface{}</code> | If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled. |

---

##### `BreakglassJustification`<sup>Optional</sup> <a name="BreakglassJustification" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization.property.breakglassJustification"></a>

```go
BreakglassJustification *string
```

- *Type:* *string

If present, indicates to use Breakglass using this justification.

If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#breakglass_justification GoogleCloudRunV2WorkerPool#breakglass_justification}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

The path to a binary authorization policy. Format: projects/{project}/platforms/cloudRun/{policy-name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#policy GoogleCloudRunV2WorkerPool#policy}

---

##### `UseDefault`<sup>Optional</sup> <a name="UseDefault" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization.property.useDefault"></a>

```go
UseDefault interface{}
```

- *Type:* interface{}

If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#use_default GoogleCloudRunV2WorkerPool#use_default}

---

### GoogleCloudRunV2WorkerPoolConditions <a name="GoogleCloudRunV2WorkerPoolConditions" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolConditions {

}
```


### GoogleCloudRunV2WorkerPoolConfig <a name="GoogleCloudRunV2WorkerPoolConfig" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	Template: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate,
	Annotations: *map[string]*string,
	BinaryAuthorization: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization,
	Client: *string,
	ClientVersion: *string,
	CustomAudiences: *[]*string,
	DeletionProtection: interface{},
	Description: *string,
	Id: *string,
	InstanceSplits: interface{},
	Labels: *map[string]*string,
	LaunchStage: *string,
	Project: *string,
	Scaling: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.location">Location</a></code> | <code>*string</code> | The location of the cloud run worker pool. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.name">Name</a></code> | <code>*string</code> | Name of the WorkerPool. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.template">Template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate">GoogleCloudRunV2WorkerPoolTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.binaryAuthorization">BinaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization">GoogleCloudRunV2WorkerPoolBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.client">Client</a></code> | <code>*string</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.clientVersion">ClientVersion</a></code> | <code>*string</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.customAudiences">CustomAudiences</a></code> | <code>*[]*string</code> | One or more custom audiences that you want this worker pool to support. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Whether Terraform will be prevented from destroying the service. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.description">Description</a></code> | <code>*string</code> | User-provided description of the WorkerPool. This field currently has a 512-character limit. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#id GoogleCloudRunV2WorkerPool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.instanceSplits">InstanceSplits</a></code> | <code>interface{}</code> | instance_splits block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.launchStage">LaunchStage</a></code> | <code>*string</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#project GoogleCloudRunV2WorkerPool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.scaling">Scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling">GoogleCloudRunV2WorkerPoolScaling</a></code> | scaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts">GoogleCloudRunV2WorkerPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the cloud run worker pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#location GoogleCloudRunV2WorkerPool#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the WorkerPool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#name GoogleCloudRunV2WorkerPool#name}

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.template"></a>

```go
Template GoogleCloudRunV2WorkerPoolTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate">GoogleCloudRunV2WorkerPoolTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#template GoogleCloudRunV2WorkerPool#template}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected in new resources.
All system annotations in v1 now have a corresponding field in v2 WorkerPool.

This field follows Kubernetes annotations' namespacing, limits, and rules.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#annotations GoogleCloudRunV2WorkerPool#annotations}

---

##### `BinaryAuthorization`<sup>Optional</sup> <a name="BinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.binaryAuthorization"></a>

```go
BinaryAuthorization GoogleCloudRunV2WorkerPoolBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization">GoogleCloudRunV2WorkerPoolBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#binary_authorization GoogleCloudRunV2WorkerPool#binary_authorization}

---

##### `Client`<sup>Optional</sup> <a name="Client" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.client"></a>

```go
Client *string
```

- *Type:* *string

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#client GoogleCloudRunV2WorkerPool#client}

---

##### `ClientVersion`<sup>Optional</sup> <a name="ClientVersion" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.clientVersion"></a>

```go
ClientVersion *string
```

- *Type:* *string

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#client_version GoogleCloudRunV2WorkerPool#client_version}

---

##### `CustomAudiences`<sup>Optional</sup> <a name="CustomAudiences" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.customAudiences"></a>

```go
CustomAudiences *[]*string
```

- *Type:* *[]*string

One or more custom audiences that you want this worker pool to support.

Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests.
For more information, see https://cloud.google.com/run/docs/configuring/custom-audiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#custom_audiences GoogleCloudRunV2WorkerPool#custom_audiences}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Whether Terraform will be prevented from destroying the service.

Defaults to true.
When a'terraform destroy' or 'terraform apply' would delete the service,
the command will fail if this field is not set to false in Terraform state.
When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the WorkerPool will fail.
When the field is set to false, deleting the WorkerPool is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#deletion_protection GoogleCloudRunV2WorkerPool#deletion_protection}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User-provided description of the WorkerPool. This field currently has a 512-character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#description GoogleCloudRunV2WorkerPool#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#id GoogleCloudRunV2WorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceSplits`<sup>Optional</sup> <a name="InstanceSplits" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.instanceSplits"></a>

```go
InstanceSplits interface{}
```

- *Type:* interface{}

instance_splits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#instance_splits GoogleCloudRunV2WorkerPool#instance_splits}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with  'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 WorkerPool.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#labels GoogleCloudRunV2WorkerPool#labels}

---

##### `LaunchStage`<sup>Optional</sup> <a name="LaunchStage" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.launchStage"></a>

```go
LaunchStage *string
```

- *Type:* *string

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.

For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#launch_stage GoogleCloudRunV2WorkerPool#launch_stage}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#project GoogleCloudRunV2WorkerPool#project}.

---

##### `Scaling`<sup>Optional</sup> <a name="Scaling" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.scaling"></a>

```go
Scaling GoogleCloudRunV2WorkerPoolScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling">GoogleCloudRunV2WorkerPoolScaling</a>

scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#scaling GoogleCloudRunV2WorkerPool#scaling}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.timeouts"></a>

```go
Timeouts GoogleCloudRunV2WorkerPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts">GoogleCloudRunV2WorkerPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#timeouts GoogleCloudRunV2WorkerPool#timeouts}

---

### GoogleCloudRunV2WorkerPoolInstanceSplits <a name="GoogleCloudRunV2WorkerPoolInstanceSplits" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolInstanceSplits {
	Percent: *f64,
	Revision: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits.property.percent">Percent</a></code> | <code>*f64</code> | Specifies percent of the instance split to this Revision. This defaults to zero if unspecified. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits.property.revision">Revision</a></code> | <code>*string</code> | Revision to which to assign this portion of instances, if split allocation is by revision. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits.property.type">Type</a></code> | <code>*string</code> | The allocation type for this instance split. Possible values: ["INSTANCE_SPLIT_ALLOCATION_TYPE_LATEST", "INSTANCE_SPLIT_ALLOCATION_TYPE_REVISION"]. |

---

##### `Percent`<sup>Optional</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits.property.percent"></a>

```go
Percent *f64
```

- *Type:* *f64

Specifies percent of the instance split to this Revision. This defaults to zero if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#percent GoogleCloudRunV2WorkerPool#percent}

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits.property.revision"></a>

```go
Revision *string
```

- *Type:* *string

Revision to which to assign this portion of instances, if split allocation is by revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#revision GoogleCloudRunV2WorkerPool#revision}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits.property.type"></a>

```go
Type *string
```

- *Type:* *string

The allocation type for this instance split. Possible values: ["INSTANCE_SPLIT_ALLOCATION_TYPE_LATEST", "INSTANCE_SPLIT_ALLOCATION_TYPE_REVISION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#type GoogleCloudRunV2WorkerPool#type}

---

### GoogleCloudRunV2WorkerPoolInstanceSplitStatuses <a name="GoogleCloudRunV2WorkerPoolInstanceSplitStatuses" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatuses.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolInstanceSplitStatuses {

}
```


### GoogleCloudRunV2WorkerPoolScaling <a name="GoogleCloudRunV2WorkerPoolScaling" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolScaling {
	ManualInstanceCount: *f64,
	MaxInstanceCount: *f64,
	MinInstanceCount: *f64,
	ScalingMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling.property.manualInstanceCount">ManualInstanceCount</a></code> | <code>*f64</code> | The total number of instances in manual scaling mode. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | The maximum count of instances distributed among revisions based on the specified instance split percentages. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | The minimum count of instances distributed among revisions based on the specified instance split percentages. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling.property.scalingMode">ScalingMode</a></code> | <code>*string</code> | The scaling mode for the worker pool. It defaults to MANUAL. Possible values: ["AUTOMATIC", "MANUAL"]. |

---

##### `ManualInstanceCount`<sup>Optional</sup> <a name="ManualInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling.property.manualInstanceCount"></a>

```go
ManualInstanceCount *f64
```

- *Type:* *f64

The total number of instances in manual scaling mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#manual_instance_count GoogleCloudRunV2WorkerPool#manual_instance_count}

---

##### `MaxInstanceCount`<sup>Optional</sup> <a name="MaxInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling.property.maxInstanceCount"></a>

```go
MaxInstanceCount *f64
```

- *Type:* *f64

The maximum count of instances distributed among revisions based on the specified instance split percentages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#max_instance_count GoogleCloudRunV2WorkerPool#max_instance_count}

---

##### `MinInstanceCount`<sup>Optional</sup> <a name="MinInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling.property.minInstanceCount"></a>

```go
MinInstanceCount *f64
```

- *Type:* *f64

The minimum count of instances distributed among revisions based on the specified instance split percentages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#min_instance_count GoogleCloudRunV2WorkerPool#min_instance_count}

---

##### `ScalingMode`<sup>Optional</sup> <a name="ScalingMode" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling.property.scalingMode"></a>

```go
ScalingMode *string
```

- *Type:* *string

The scaling mode for the worker pool. It defaults to MANUAL. Possible values: ["AUTOMATIC", "MANUAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#scaling_mode GoogleCloudRunV2WorkerPool#scaling_mode}

---

### GoogleCloudRunV2WorkerPoolTemplate <a name="GoogleCloudRunV2WorkerPoolTemplate" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolTemplate {
	Annotations: *map[string]*string,
	Containers: interface{},
	EncryptionKey: *string,
	EncryptionKeyRevocationAction: *string,
	EncryptionKeyShutdownDuration: *string,
	GpuZonalRedundancyDisabled: interface{},
	Labels: *map[string]*string,
	NodeSelector: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector,
	Revision: *string,
	ServiceAccount: *string,
	Volumes: interface{},
	VpcAccess: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.containers">Containers</a></code> | <code>interface{}</code> | containers block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.encryptionKey">EncryptionKey</a></code> | <code>*string</code> | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.encryptionKeyRevocationAction">EncryptionKeyRevocationAction</a></code> | <code>*string</code> | The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.encryptionKeyShutdownDuration">EncryptionKeyShutdownDuration</a></code> | <code>*string</code> | If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances. The minimum increment is 1 hour. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.gpuZonalRedundancyDisabled">GpuZonalRedundancyDisabled</a></code> | <code>interface{}</code> | True if GPU zonal redundancy is disabled on this revision. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.nodeSelector">NodeSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector">GoogleCloudRunV2WorkerPoolTemplateNodeSelector</a></code> | node_selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.revision">Revision</a></code> | <code>*string</code> | The unique name for the revision. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Email address of the IAM service account associated with the revision of the WorkerPool. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.volumes">Volumes</a></code> | <code>interface{}</code> | volumes block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.vpcAccess">VpcAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess">GoogleCloudRunV2WorkerPoolTemplateVpcAccess</a></code> | vpc_access block. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system annotations in v1 now have a corresponding field in v2 WorkerPoolRevisionTemplate.

This field follows Kubernetes annotations' namespacing, limits, and rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#annotations GoogleCloudRunV2WorkerPool#annotations}

---

##### `Containers`<sup>Optional</sup> <a name="Containers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.containers"></a>

```go
Containers interface{}
```

- *Type:* interface{}

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#containers GoogleCloudRunV2WorkerPool#containers}

---

##### `EncryptionKey`<sup>Optional</sup> <a name="EncryptionKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.encryptionKey"></a>

```go
EncryptionKey *string
```

- *Type:* *string

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#encryption_key GoogleCloudRunV2WorkerPool#encryption_key}

---

##### `EncryptionKeyRevocationAction`<sup>Optional</sup> <a name="EncryptionKeyRevocationAction" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.encryptionKeyRevocationAction"></a>

```go
EncryptionKeyRevocationAction *string
```

- *Type:* *string

The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#encryption_key_revocation_action GoogleCloudRunV2WorkerPool#encryption_key_revocation_action}

---

##### `EncryptionKeyShutdownDuration`<sup>Optional</sup> <a name="EncryptionKeyShutdownDuration" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.encryptionKeyShutdownDuration"></a>

```go
EncryptionKeyShutdownDuration *string
```

- *Type:* *string

If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances. The minimum increment is 1 hour.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#encryption_key_shutdown_duration GoogleCloudRunV2WorkerPool#encryption_key_shutdown_duration}

---

##### `GpuZonalRedundancyDisabled`<sup>Optional</sup> <a name="GpuZonalRedundancyDisabled" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.gpuZonalRedundancyDisabled"></a>

```go
GpuZonalRedundancyDisabled interface{}
```

- *Type:* interface{}

True if GPU zonal redundancy is disabled on this revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#gpu_zonal_redundancy_disabled GoogleCloudRunV2WorkerPool#gpu_zonal_redundancy_disabled}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc.
For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 WorkerPoolRevisionTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#labels GoogleCloudRunV2WorkerPool#labels}

---

##### `NodeSelector`<sup>Optional</sup> <a name="NodeSelector" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.nodeSelector"></a>

```go
NodeSelector GoogleCloudRunV2WorkerPoolTemplateNodeSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector">GoogleCloudRunV2WorkerPoolTemplateNodeSelector</a>

node_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#node_selector GoogleCloudRunV2WorkerPool#node_selector}

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.revision"></a>

```go
Revision *string
```

- *Type:* *string

The unique name for the revision.

If this field is omitted, it will be automatically generated based on the WorkerPool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#revision GoogleCloudRunV2WorkerPool#revision}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Email address of the IAM service account associated with the revision of the WorkerPool.

The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#service_account GoogleCloudRunV2WorkerPool#service_account}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.volumes"></a>

```go
Volumes interface{}
```

- *Type:* interface{}

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#volumes GoogleCloudRunV2WorkerPool#volumes}

---

##### `VpcAccess`<sup>Optional</sup> <a name="VpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.vpcAccess"></a>

```go
VpcAccess GoogleCloudRunV2WorkerPoolTemplateVpcAccess
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess">GoogleCloudRunV2WorkerPoolTemplateVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#vpc_access GoogleCloudRunV2WorkerPool#vpc_access}

---

### GoogleCloudRunV2WorkerPoolTemplateContainers <a name="GoogleCloudRunV2WorkerPoolTemplateContainers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolTemplateContainers {
	Image: *string,
	Args: *[]*string,
	Command: *[]*string,
	DependsOn: *[]*string,
	Env: interface{},
	Name: *string,
	Resources: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources,
	VolumeMounts: interface{},
	WorkingDir: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.image">Image</a></code> | <code>*string</code> | URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.args">Args</a></code> | <code>*[]*string</code> | Arguments to the entrypoint. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.command">Command</a></code> | <code>*[]*string</code> | Entrypoint array. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | Containers which should be started before this container. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.env">Env</a></code> | <code>interface{}</code> | env block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.name">Name</a></code> | <code>*string</code> | Name of the container specified as a DNS_LABEL. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources">GoogleCloudRunV2WorkerPoolTemplateContainersResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.volumeMounts">VolumeMounts</a></code> | <code>interface{}</code> | volume_mounts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.workingDir">WorkingDir</a></code> | <code>*string</code> | Container's working directory. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.image"></a>

```go
Image *string
```

- *Type:* *string

URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#image GoogleCloudRunV2WorkerPool#image}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

Arguments to the entrypoint.

The docker image's CMD is used if this is not provided. Variable references are not supported in Cloud Run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#args GoogleCloudRunV2WorkerPool#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

Entrypoint array.

Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#command GoogleCloudRunV2WorkerPool#command}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.dependsOn"></a>

```go
DependsOn *[]*string
```

- *Type:* *[]*string

Containers which should be started before this container.

If specified the container will wait to start until all containers with the listed names are healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#depends_on GoogleCloudRunV2WorkerPool#depends_on}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.env"></a>

```go
Env interface{}
```

- *Type:* interface{}

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#env GoogleCloudRunV2WorkerPool#env}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the container specified as a DNS_LABEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#name GoogleCloudRunV2WorkerPool#name}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.resources"></a>

```go
Resources GoogleCloudRunV2WorkerPoolTemplateContainersResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources">GoogleCloudRunV2WorkerPoolTemplateContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#resources GoogleCloudRunV2WorkerPool#resources}

---

##### `VolumeMounts`<sup>Optional</sup> <a name="VolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.volumeMounts"></a>

```go
VolumeMounts interface{}
```

- *Type:* interface{}

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#volume_mounts GoogleCloudRunV2WorkerPool#volume_mounts}

---

##### `WorkingDir`<sup>Optional</sup> <a name="WorkingDir" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.workingDir"></a>

```go
WorkingDir *string
```

- *Type:* *string

Container's working directory.

If not specified, the container runtime's default will be used, which might be configured in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#working_dir GoogleCloudRunV2WorkerPool#working_dir}

---

### GoogleCloudRunV2WorkerPoolTemplateContainersEnv <a name="GoogleCloudRunV2WorkerPoolTemplateContainersEnv" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv {
	Name: *string,
	Value: *string,
	ValueSource: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv.property.name">Name</a></code> | <code>*string</code> | Name of the environment variable. Must be a C_IDENTIFIER, and may not exceed 32768 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv.property.value">Value</a></code> | <code>*string</code> | Literal value of the environment variable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv.property.valueSource">ValueSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource</a></code> | value_source block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the environment variable. Must be a C_IDENTIFIER, and may not exceed 32768 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#name GoogleCloudRunV2WorkerPool#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv.property.value"></a>

```go
Value *string
```

- *Type:* *string

Literal value of the environment variable.

Defaults to "" and the maximum allowed length is 32768 characters. Variable references are not supported in Cloud Run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#value GoogleCloudRunV2WorkerPool#value}

---

##### `ValueSource`<sup>Optional</sup> <a name="ValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv.property.valueSource"></a>

```go
ValueSource GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource</a>

value_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#value_source GoogleCloudRunV2WorkerPool#value_source}

---

### GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource <a name="GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource {
	SecretKeyRef: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `SecretKeyRef`<sup>Optional</sup> <a name="SecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource.property.secretKeyRef"></a>

```go
SecretKeyRef GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#secret_key_ref GoogleCloudRunV2WorkerPool#secret_key_ref}

---

### GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef <a name="GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef {
	Secret: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.property.secret">Secret</a></code> | <code>*string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.property.version">Version</a></code> | <code>*string</code> | The Cloud Secret Manager secret version. |

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#secret GoogleCloudRunV2WorkerPool#secret}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.property.version"></a>

```go
Version *string
```

- *Type:* *string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#version GoogleCloudRunV2WorkerPool#version}

---

### GoogleCloudRunV2WorkerPoolTemplateContainersResources <a name="GoogleCloudRunV2WorkerPoolTemplateContainersResources" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolTemplateContainersResources {
	Limits: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources.property.limits">Limits</a></code> | <code>*map[string]*string</code> | Only memory, CPU, and nvidia.com/gpu are supported. Use key 'cpu' for CPU limit, 'memory' for memory limit, 'nvidia.com/gpu' for gpu limit. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go. |

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources.property.limits"></a>

```go
Limits *map[string]*string
```

- *Type:* *map[string]*string

Only memory, CPU, and nvidia.com/gpu are supported. Use key 'cpu' for CPU limit, 'memory' for memory limit, 'nvidia.com/gpu' for gpu limit. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#limits GoogleCloudRunV2WorkerPool#limits}

---

### GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts <a name="GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts {
	MountPath: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts.property.mountPath">MountPath</a></code> | <code>*string</code> | Path within the container at which the volume should be mounted. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts.property.name">Name</a></code> | <code>*string</code> | This must match the Name of a Volume. |

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts.property.mountPath"></a>

```go
MountPath *string
```

- *Type:* *string

Path within the container at which the volume should be mounted.

Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#mount_path GoogleCloudRunV2WorkerPool#mount_path}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts.property.name"></a>

```go
Name *string
```

- *Type:* *string

This must match the Name of a Volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#name GoogleCloudRunV2WorkerPool#name}

---

### GoogleCloudRunV2WorkerPoolTemplateNodeSelector <a name="GoogleCloudRunV2WorkerPoolTemplateNodeSelector" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector {
	Accelerator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector.property.accelerator">Accelerator</a></code> | <code>*string</code> | The GPU to attach to an instance. See https://cloud.google.com/run/docs/configuring/services/gpu for configuring GPU. |

---

##### `Accelerator`<sup>Required</sup> <a name="Accelerator" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector.property.accelerator"></a>

```go
Accelerator *string
```

- *Type:* *string

The GPU to attach to an instance. See https://cloud.google.com/run/docs/configuring/services/gpu for configuring GPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#accelerator GoogleCloudRunV2WorkerPool#accelerator}

---

### GoogleCloudRunV2WorkerPoolTemplateVolumes <a name="GoogleCloudRunV2WorkerPoolTemplateVolumes" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolTemplateVolumes {
	Name: *string,
	CloudSqlInstance: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance,
	EmptyDir: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir,
	Gcs: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs,
	Nfs: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs,
	Secret: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.name">Name</a></code> | <code>*string</code> | Volume's name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a></code> | cloud_sql_instance block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.emptyDir">EmptyDir</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir">GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir</a></code> | empty_dir block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.gcs">Gcs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs">GoogleCloudRunV2WorkerPoolTemplateVolumesGcs</a></code> | gcs block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.nfs">Nfs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs">GoogleCloudRunV2WorkerPoolTemplateVolumesNfs</a></code> | nfs block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret">GoogleCloudRunV2WorkerPoolTemplateVolumesSecret</a></code> | secret block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Volume's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#name GoogleCloudRunV2WorkerPool#name}

---

##### `CloudSqlInstance`<sup>Optional</sup> <a name="CloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.cloudSqlInstance"></a>

```go
CloudSqlInstance GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a>

cloud_sql_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#cloud_sql_instance GoogleCloudRunV2WorkerPool#cloud_sql_instance}

---

##### `EmptyDir`<sup>Optional</sup> <a name="EmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.emptyDir"></a>

```go
EmptyDir GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir">GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir</a>

empty_dir block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#empty_dir GoogleCloudRunV2WorkerPool#empty_dir}

---

##### `Gcs`<sup>Optional</sup> <a name="Gcs" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.gcs"></a>

```go
Gcs GoogleCloudRunV2WorkerPoolTemplateVolumesGcs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs">GoogleCloudRunV2WorkerPoolTemplateVolumesGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#gcs GoogleCloudRunV2WorkerPool#gcs}

---

##### `Nfs`<sup>Optional</sup> <a name="Nfs" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.nfs"></a>

```go
Nfs GoogleCloudRunV2WorkerPoolTemplateVolumesNfs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs">GoogleCloudRunV2WorkerPoolTemplateVolumesNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#nfs GoogleCloudRunV2WorkerPool#nfs}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.secret"></a>

```go
Secret GoogleCloudRunV2WorkerPoolTemplateVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret">GoogleCloudRunV2WorkerPoolTemplateVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#secret GoogleCloudRunV2WorkerPool#secret}

---

### GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance {
	Instances: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance.property.instances">Instances</a></code> | <code>*[]*string</code> | The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}. |

---

##### `Instances`<sup>Optional</sup> <a name="Instances" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance.property.instances"></a>

```go
Instances *[]*string
```

- *Type:* *[]*string

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#instances GoogleCloudRunV2WorkerPool#instances}

---

### GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir {
	Medium: *string,
	SizeLimit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir.property.medium">Medium</a></code> | <code>*string</code> | The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir.property.sizeLimit">SizeLimit</a></code> | <code>*string</code> | Limit on the storage usable by this EmptyDir volume. |

---

##### `Medium`<sup>Optional</sup> <a name="Medium" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir.property.medium"></a>

```go
Medium *string
```

- *Type:* *string

The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#medium GoogleCloudRunV2WorkerPool#medium}

---

##### `SizeLimit`<sup>Optional</sup> <a name="SizeLimit" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir.property.sizeLimit"></a>

```go
SizeLimit *string
```

- *Type:* *string

Limit on the storage usable by this EmptyDir volume.

The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#size_limit GoogleCloudRunV2WorkerPool#size_limit}

---

### GoogleCloudRunV2WorkerPoolTemplateVolumesGcs <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesGcs" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs {
	Bucket: *string,
	MountOptions: *[]*string,
	ReadOnly: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs.property.bucket">Bucket</a></code> | <code>*string</code> | GCS Bucket name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs.property.mountOptions">MountOptions</a></code> | <code>*[]*string</code> | A list of flags to pass to the gcsfuse command for configuring this volume. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | If true, mount the GCS bucket as read-only. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

GCS Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#bucket GoogleCloudRunV2WorkerPool#bucket}

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs.property.mountOptions"></a>

```go
MountOptions *[]*string
```

- *Type:* *[]*string

A list of flags to pass to the gcsfuse command for configuring this volume.

Flags should be passed without leading dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#mount_options GoogleCloudRunV2WorkerPool#mount_options}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs.property.readOnly"></a>

```go
ReadOnly interface{}
```

- *Type:* interface{}

If true, mount the GCS bucket as read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#read_only GoogleCloudRunV2WorkerPool#read_only}

---

### GoogleCloudRunV2WorkerPoolTemplateVolumesNfs <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesNfs" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs {
	Path: *string,
	Server: *string,
	ReadOnly: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs.property.path">Path</a></code> | <code>*string</code> | Path that is exported by the NFS server. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs.property.server">Server</a></code> | <code>*string</code> | Hostname or IP address of the NFS server. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | If true, mount the NFS volume as read only. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path that is exported by the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#path GoogleCloudRunV2WorkerPool#path}

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs.property.server"></a>

```go
Server *string
```

- *Type:* *string

Hostname or IP address of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#server GoogleCloudRunV2WorkerPool#server}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs.property.readOnly"></a>

```go
ReadOnly interface{}
```

- *Type:* interface{}

If true, mount the NFS volume as read only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#read_only GoogleCloudRunV2WorkerPool#read_only}

---

### GoogleCloudRunV2WorkerPoolTemplateVolumesSecret <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesSecret" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret {
	Secret: *string,
	DefaultMode: *f64,
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret.property.secret">Secret</a></code> | <code>*string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret.property.defaultMode">DefaultMode</a></code> | <code>*f64</code> | Integer representation of mode bits to use on created files by default. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret.property.items">Items</a></code> | <code>interface{}</code> | items block. |

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#secret GoogleCloudRunV2WorkerPool#secret}

---

##### `DefaultMode`<sup>Optional</sup> <a name="DefaultMode" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret.property.defaultMode"></a>

```go
DefaultMode *f64
```

- *Type:* *f64

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#default_mode GoogleCloudRunV2WorkerPool#default_mode}

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#items GoogleCloudRunV2WorkerPool#items}

---

### GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems {
	Path: *string,
	Mode: *f64,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems.property.path">Path</a></code> | <code>*string</code> | The relative path of the secret in the container. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems.property.mode">Mode</a></code> | <code>*f64</code> | Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems.property.version">Version</a></code> | <code>*string</code> | The Cloud Secret Manager secret version. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems.property.path"></a>

```go
Path *string
```

- *Type:* *string

The relative path of the secret in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#path GoogleCloudRunV2WorkerPool#path}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems.property.mode"></a>

```go
Mode *f64
```

- *Type:* *f64

Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal).

If 0 or not set, the Volume's default mode will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#mode GoogleCloudRunV2WorkerPool#mode}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems.property.version"></a>

```go
Version *string
```

- *Type:* *string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#version GoogleCloudRunV2WorkerPool#version}

---

### GoogleCloudRunV2WorkerPoolTemplateVpcAccess <a name="GoogleCloudRunV2WorkerPoolTemplateVpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess {
	Egress: *string,
	NetworkInterfaces: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess.property.egress">Egress</a></code> | <code>*string</code> | Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess.property.networkInterfaces">NetworkInterfaces</a></code> | <code>interface{}</code> | network_interfaces block. |

---

##### `Egress`<sup>Optional</sup> <a name="Egress" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess.property.egress"></a>

```go
Egress *string
```

- *Type:* *string

Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#egress GoogleCloudRunV2WorkerPool#egress}

---

##### `NetworkInterfaces`<sup>Optional</sup> <a name="NetworkInterfaces" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess.property.networkInterfaces"></a>

```go
NetworkInterfaces interface{}
```

- *Type:* interface{}

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#network_interfaces GoogleCloudRunV2WorkerPool#network_interfaces}

---

### GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces <a name="GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces {
	Network: *string,
	Subnetwork: *string,
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.network">Network</a></code> | <code>*string</code> | The VPC network that the Cloud Run resource will be able to send traffic to. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The VPC subnetwork that the Cloud Run resource will get IPs from. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.tags">Tags</a></code> | <code>*[]*string</code> | Network tags applied to this Cloud Run WorkerPool. |

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.network"></a>

```go
Network *string
```

- *Type:* *string

The VPC network that the Cloud Run resource will be able to send traffic to.

At least one of network or subnetwork must be specified. If both
network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If network is not specified, it will be
looked up from the subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#network GoogleCloudRunV2WorkerPool#network}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The VPC subnetwork that the Cloud Run resource will get IPs from.

At least one of network or subnetwork must be specified. If both
network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If subnetwork is not specified, the
subnetwork with the same name with the network will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#subnetwork GoogleCloudRunV2WorkerPool#subnetwork}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Network tags applied to this Cloud Run WorkerPool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#tags GoogleCloudRunV2WorkerPool#tags}

---

### GoogleCloudRunV2WorkerPoolTerminalCondition <a name="GoogleCloudRunV2WorkerPoolTerminalCondition" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolTerminalCondition {

}
```


### GoogleCloudRunV2WorkerPoolTimeouts <a name="GoogleCloudRunV2WorkerPoolTimeouts" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

&googlecloudrunv2workerpool.GoogleCloudRunV2WorkerPoolTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#create GoogleCloudRunV2WorkerPool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#delete GoogleCloudRunV2WorkerPool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#update GoogleCloudRunV2WorkerPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#create GoogleCloudRunV2WorkerPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#delete GoogleCloudRunV2WorkerPool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_worker_pool#update GoogleCloudRunV2WorkerPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference <a name="GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetBreakglassJustification">ResetBreakglassJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetUseDefault">ResetUseDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBreakglassJustification` <a name="ResetBreakglassJustification" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetBreakglassJustification"></a>

```go
func ResetBreakglassJustification()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetPolicy"></a>

```go
func ResetPolicy()
```

##### `ResetUseDefault` <a name="ResetUseDefault" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetUseDefault"></a>

```go
func ResetUseDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.breakglassJustificationInput">BreakglassJustificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.useDefaultInput">UseDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.breakglassJustification">BreakglassJustification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.useDefault">UseDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization">GoogleCloudRunV2WorkerPoolBinaryAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BreakglassJustificationInput`<sup>Optional</sup> <a name="BreakglassJustificationInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.breakglassJustificationInput"></a>

```go
func BreakglassJustificationInput() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `UseDefaultInput`<sup>Optional</sup> <a name="UseDefaultInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.useDefaultInput"></a>

```go
func UseDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `BreakglassJustification`<sup>Required</sup> <a name="BreakglassJustification" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.breakglassJustification"></a>

```go
func BreakglassJustification() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `UseDefault`<sup>Required</sup> <a name="UseDefault" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.useDefault"></a>

```go
func UseDefault() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2WorkerPoolBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization">GoogleCloudRunV2WorkerPoolBinaryAuthorization</a>

---


### GoogleCloudRunV2WorkerPoolConditionsList <a name="GoogleCloudRunV2WorkerPoolConditionsList" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2WorkerPoolConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2WorkerPoolConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleCloudRunV2WorkerPoolConditionsOutputReference <a name="GoogleCloudRunV2WorkerPoolConditionsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2WorkerPoolConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.executionReason">ExecutionReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.revisionReason">RevisionReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditions">GoogleCloudRunV2WorkerPoolConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExecutionReason`<sup>Required</sup> <a name="ExecutionReason" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.executionReason"></a>

```go
func ExecutionReason() *string
```

- *Type:* *string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.lastTransitionTime"></a>

```go
func LastTransitionTime() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `RevisionReason`<sup>Required</sup> <a name="RevisionReason" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.revisionReason"></a>

```go
func RevisionReason() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2WorkerPoolConditions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditions">GoogleCloudRunV2WorkerPoolConditions</a>

---


### GoogleCloudRunV2WorkerPoolInstanceSplitsList <a name="GoogleCloudRunV2WorkerPoolInstanceSplitsList" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolInstanceSplitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2WorkerPoolInstanceSplitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference <a name="GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resetPercent">ResetPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPercent` <a name="ResetPercent" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resetPercent"></a>

```go
func ResetPercent()
```

##### `ResetRevision` <a name="ResetRevision" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resetRevision"></a>

```go
func ResetRevision()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.percentInput">PercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.revisionInput">RevisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.percent">Percent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.revision">Revision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.percentInput"></a>

```go
func PercentInput() *f64
```

- *Type:* *f64

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.revisionInput"></a>

```go
func RevisionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.percent"></a>

```go
func Percent() *f64
```

- *Type:* *f64

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.revision"></a>

```go
func Revision() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList <a name="GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference <a name="GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.percent">Percent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.revision">Revision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatuses">GoogleCloudRunV2WorkerPoolInstanceSplitStatuses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.percent"></a>

```go
func Percent() *f64
```

- *Type:* *f64

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.revision"></a>

```go
func Revision() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2WorkerPoolInstanceSplitStatuses
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatuses">GoogleCloudRunV2WorkerPoolInstanceSplitStatuses</a>

---


### GoogleCloudRunV2WorkerPoolScalingOutputReference <a name="GoogleCloudRunV2WorkerPoolScalingOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolScalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2WorkerPoolScalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.resetManualInstanceCount">ResetManualInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.resetMaxInstanceCount">ResetMaxInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.resetMinInstanceCount">ResetMinInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.resetScalingMode">ResetScalingMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetManualInstanceCount` <a name="ResetManualInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.resetManualInstanceCount"></a>

```go
func ResetManualInstanceCount()
```

##### `ResetMaxInstanceCount` <a name="ResetMaxInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.resetMaxInstanceCount"></a>

```go
func ResetMaxInstanceCount()
```

##### `ResetMinInstanceCount` <a name="ResetMinInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.resetMinInstanceCount"></a>

```go
func ResetMinInstanceCount()
```

##### `ResetScalingMode` <a name="ResetScalingMode" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.resetScalingMode"></a>

```go
func ResetScalingMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.manualInstanceCountInput">ManualInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.maxInstanceCountInput">MaxInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.minInstanceCountInput">MinInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.scalingModeInput">ScalingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.manualInstanceCount">ManualInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.scalingMode">ScalingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling">GoogleCloudRunV2WorkerPoolScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManualInstanceCountInput`<sup>Optional</sup> <a name="ManualInstanceCountInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.manualInstanceCountInput"></a>

```go
func ManualInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `MaxInstanceCountInput`<sup>Optional</sup> <a name="MaxInstanceCountInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.maxInstanceCountInput"></a>

```go
func MaxInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `MinInstanceCountInput`<sup>Optional</sup> <a name="MinInstanceCountInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.minInstanceCountInput"></a>

```go
func MinInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `ScalingModeInput`<sup>Optional</sup> <a name="ScalingModeInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.scalingModeInput"></a>

```go
func ScalingModeInput() *string
```

- *Type:* *string

---

##### `ManualInstanceCount`<sup>Required</sup> <a name="ManualInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.manualInstanceCount"></a>

```go
func ManualInstanceCount() *f64
```

- *Type:* *f64

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.maxInstanceCount"></a>

```go
func MaxInstanceCount() *f64
```

- *Type:* *f64

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.minInstanceCount"></a>

```go
func MinInstanceCount() *f64
```

- *Type:* *f64

---

##### `ScalingMode`<sup>Required</sup> <a name="ScalingMode" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.scalingMode"></a>

```go
func ScalingMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2WorkerPoolScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling">GoogleCloudRunV2WorkerPoolScaling</a>

---


### GoogleCloudRunV2WorkerPoolTemplateContainersEnvList <a name="GoogleCloudRunV2WorkerPoolTemplateContainersEnvList" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateContainersEnvList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2WorkerPoolTemplateContainersEnvList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.putValueSource">PutValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resetValueSource">ResetValueSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueSource` <a name="PutValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.putValueSource"></a>

```go
func PutValueSource(value GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.putValueSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource</a>

---

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetValueSource` <a name="ResetValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resetValueSource"></a>

```go
func ResetValueSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueSource">ValueSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueSourceInput">ValueSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueSource`<sup>Required</sup> <a name="ValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueSource"></a>

```go
func ValueSource() GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ValueSourceInput`<sup>Optional</sup> <a name="ValueSourceInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueSourceInput"></a>

```go
func ValueSourceInput() GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef">PutSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef">ResetSecretKeyRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretKeyRef` <a name="PutSecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef"></a>

```go
func PutSecretKeyRef(value GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `ResetSecretKeyRef` <a name="ResetSecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef"></a>

```go
func ResetSecretKeyRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput">SecretKeyRefInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretKeyRef`<sup>Required</sup> <a name="SecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef"></a>

```go
func SecretKeyRef() GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a>

---

##### `SecretKeyRefInput`<sup>Optional</sup> <a name="SecretKeyRefInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput"></a>

```go
func SecretKeyRefInput() GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource</a>

---


### GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a>

---


### GoogleCloudRunV2WorkerPoolTemplateContainersList <a name="GoogleCloudRunV2WorkerPoolTemplateContainersList" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateContainersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2WorkerPoolTemplateContainersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.putVolumeMounts">PutVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetDependsOn">ResetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetVolumeMounts">ResetVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetWorkingDir">ResetWorkingDir</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.putEnv"></a>

```go
func PutEnv(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResources` <a name="PutResources" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.putResources"></a>

```go
func PutResources(value GoogleCloudRunV2WorkerPoolTemplateContainersResources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources">GoogleCloudRunV2WorkerPoolTemplateContainersResources</a>

---

##### `PutVolumeMounts` <a name="PutVolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.putVolumeMounts"></a>

```go
func PutVolumeMounts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetCommand"></a>

```go
func ResetCommand()
```

##### `ResetDependsOn` <a name="ResetDependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetDependsOn"></a>

```go
func ResetDependsOn()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetEnv"></a>

```go
func ResetEnv()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetResources"></a>

```go
func ResetResources()
```

##### `ResetVolumeMounts` <a name="ResetVolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetVolumeMounts"></a>

```go
func ResetVolumeMounts()
```

##### `ResetWorkingDir` <a name="ResetWorkingDir" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetWorkingDir"></a>

```go
func ResetWorkingDir()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.env">Env</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList">GoogleCloudRunV2WorkerPoolTemplateContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference">GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.volumeMounts">VolumeMounts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList">GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.dependsOnInput">DependsOnInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.envInput">EnvInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources">GoogleCloudRunV2WorkerPoolTemplateContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.volumeMountsInput">VolumeMountsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.workingDirInput">WorkingDirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.workingDir">WorkingDir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.env"></a>

```go
func Env() GoogleCloudRunV2WorkerPoolTemplateContainersEnvList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList">GoogleCloudRunV2WorkerPoolTemplateContainersEnvList</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.resources"></a>

```go
func Resources() GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference">GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference</a>

---

##### `VolumeMounts`<sup>Required</sup> <a name="VolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.volumeMounts"></a>

```go
func VolumeMounts() GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList">GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `DependsOnInput`<sup>Optional</sup> <a name="DependsOnInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.dependsOnInput"></a>

```go
func DependsOnInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.envInput"></a>

```go
func EnvInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() GoogleCloudRunV2WorkerPoolTemplateContainersResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources">GoogleCloudRunV2WorkerPoolTemplateContainersResources</a>

---

##### `VolumeMountsInput`<sup>Optional</sup> <a name="VolumeMountsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.volumeMountsInput"></a>

```go
func VolumeMountsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkingDirInput`<sup>Optional</sup> <a name="WorkingDirInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.workingDirInput"></a>

```go
func WorkingDirInput() *string
```

- *Type:* *string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `DependsOn`<sup>Required</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `WorkingDir`<sup>Required</sup> <a name="WorkingDir" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.workingDir"></a>

```go
func WorkingDir() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resetLimits">ResetLimits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLimits` <a name="ResetLimits" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resetLimits"></a>

```go
func ResetLimits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.limitsInput">LimitsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.limits">Limits</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources">GoogleCloudRunV2WorkerPoolTemplateContainersResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.limitsInput"></a>

```go
func LimitsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.limits"></a>

```go
func Limits() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2WorkerPoolTemplateContainersResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources">GoogleCloudRunV2WorkerPoolTemplateContainersResources</a>

---


### GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList <a name="GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```go
func MountPathInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.acceleratorInput">AcceleratorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.accelerator">Accelerator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector">GoogleCloudRunV2WorkerPoolTemplateNodeSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorInput`<sup>Optional</sup> <a name="AcceleratorInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.acceleratorInput"></a>

```go
func AcceleratorInput() *string
```

- *Type:* *string

---

##### `Accelerator`<sup>Required</sup> <a name="Accelerator" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.accelerator"></a>

```go
func Accelerator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2WorkerPoolTemplateNodeSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector">GoogleCloudRunV2WorkerPoolTemplateNodeSelector</a>

---


### GoogleCloudRunV2WorkerPoolTemplateOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2WorkerPoolTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putContainers">PutContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putNodeSelector">PutNodeSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putVpcAccess">PutVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetContainers">ResetContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKey">ResetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKeyRevocationAction">ResetEncryptionKeyRevocationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKeyShutdownDuration">ResetEncryptionKeyShutdownDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetGpuZonalRedundancyDisabled">ResetGpuZonalRedundancyDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetNodeSelector">ResetNodeSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetVpcAccess">ResetVpcAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainers` <a name="PutContainers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putContainers"></a>

```go
func PutContainers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putContainers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNodeSelector` <a name="PutNodeSelector" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putNodeSelector"></a>

```go
func PutNodeSelector(value GoogleCloudRunV2WorkerPoolTemplateNodeSelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putNodeSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector">GoogleCloudRunV2WorkerPoolTemplateNodeSelector</a>

---

##### `PutVolumes` <a name="PutVolumes" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putVolumes"></a>

```go
func PutVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVpcAccess` <a name="PutVpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putVpcAccess"></a>

```go
func PutVpcAccess(value GoogleCloudRunV2WorkerPoolTemplateVpcAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putVpcAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess">GoogleCloudRunV2WorkerPoolTemplateVpcAccess</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetContainers` <a name="ResetContainers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetContainers"></a>

```go
func ResetContainers()
```

##### `ResetEncryptionKey` <a name="ResetEncryptionKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKey"></a>

```go
func ResetEncryptionKey()
```

##### `ResetEncryptionKeyRevocationAction` <a name="ResetEncryptionKeyRevocationAction" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKeyRevocationAction"></a>

```go
func ResetEncryptionKeyRevocationAction()
```

##### `ResetEncryptionKeyShutdownDuration` <a name="ResetEncryptionKeyShutdownDuration" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKeyShutdownDuration"></a>

```go
func ResetEncryptionKeyShutdownDuration()
```

##### `ResetGpuZonalRedundancyDisabled` <a name="ResetGpuZonalRedundancyDisabled" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetGpuZonalRedundancyDisabled"></a>

```go
func ResetGpuZonalRedundancyDisabled()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNodeSelector` <a name="ResetNodeSelector" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetNodeSelector"></a>

```go
func ResetNodeSelector()
```

##### `ResetRevision` <a name="ResetRevision" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetRevision"></a>

```go
func ResetRevision()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetVolumes"></a>

```go
func ResetVolumes()
```

##### `ResetVpcAccess` <a name="ResetVpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetVpcAccess"></a>

```go
func ResetVpcAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.containers">Containers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList">GoogleCloudRunV2WorkerPoolTemplateContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.nodeSelector">NodeSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference">GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList">GoogleCloudRunV2WorkerPoolTemplateVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.vpcAccess">VpcAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference">GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.containersInput">ContainersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyRevocationActionInput">EncryptionKeyRevocationActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyShutdownDurationInput">EncryptionKeyShutdownDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.gpuZonalRedundancyDisabledInput">GpuZonalRedundancyDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.nodeSelectorInput">NodeSelectorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector">GoogleCloudRunV2WorkerPoolTemplateNodeSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.revisionInput">RevisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.volumesInput">VolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.vpcAccessInput">VpcAccessInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess">GoogleCloudRunV2WorkerPoolTemplateVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyRevocationAction">EncryptionKeyRevocationAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyShutdownDuration">EncryptionKeyShutdownDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.gpuZonalRedundancyDisabled">GpuZonalRedundancyDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.revision">Revision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate">GoogleCloudRunV2WorkerPoolTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.containers"></a>

```go
func Containers() GoogleCloudRunV2WorkerPoolTemplateContainersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList">GoogleCloudRunV2WorkerPoolTemplateContainersList</a>

---

##### `NodeSelector`<sup>Required</sup> <a name="NodeSelector" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.nodeSelector"></a>

```go
func NodeSelector() GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference">GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference</a>

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.volumes"></a>

```go
func Volumes() GoogleCloudRunV2WorkerPoolTemplateVolumesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList">GoogleCloudRunV2WorkerPoolTemplateVolumesList</a>

---

##### `VpcAccess`<sup>Required</sup> <a name="VpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.vpcAccess"></a>

```go
func VpcAccess() GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference">GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ContainersInput`<sup>Optional</sup> <a name="ContainersInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.containersInput"></a>

```go
func ContainersInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyInput"></a>

```go
func EncryptionKeyInput() *string
```

- *Type:* *string

---

##### `EncryptionKeyRevocationActionInput`<sup>Optional</sup> <a name="EncryptionKeyRevocationActionInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyRevocationActionInput"></a>

```go
func EncryptionKeyRevocationActionInput() *string
```

- *Type:* *string

---

##### `EncryptionKeyShutdownDurationInput`<sup>Optional</sup> <a name="EncryptionKeyShutdownDurationInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyShutdownDurationInput"></a>

```go
func EncryptionKeyShutdownDurationInput() *string
```

- *Type:* *string

---

##### `GpuZonalRedundancyDisabledInput`<sup>Optional</sup> <a name="GpuZonalRedundancyDisabledInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.gpuZonalRedundancyDisabledInput"></a>

```go
func GpuZonalRedundancyDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NodeSelectorInput`<sup>Optional</sup> <a name="NodeSelectorInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.nodeSelectorInput"></a>

```go
func NodeSelectorInput() GoogleCloudRunV2WorkerPoolTemplateNodeSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector">GoogleCloudRunV2WorkerPoolTemplateNodeSelector</a>

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.revisionInput"></a>

```go
func RevisionInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.volumesInput"></a>

```go
func VolumesInput() interface{}
```

- *Type:* interface{}

---

##### `VpcAccessInput`<sup>Optional</sup> <a name="VpcAccessInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.vpcAccessInput"></a>

```go
func VpcAccessInput() GoogleCloudRunV2WorkerPoolTemplateVpcAccess
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess">GoogleCloudRunV2WorkerPoolTemplateVpcAccess</a>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKey"></a>

```go
func EncryptionKey() *string
```

- *Type:* *string

---

##### `EncryptionKeyRevocationAction`<sup>Required</sup> <a name="EncryptionKeyRevocationAction" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyRevocationAction"></a>

```go
func EncryptionKeyRevocationAction() *string
```

- *Type:* *string

---

##### `EncryptionKeyShutdownDuration`<sup>Required</sup> <a name="EncryptionKeyShutdownDuration" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyShutdownDuration"></a>

```go
func EncryptionKeyShutdownDuration() *string
```

- *Type:* *string

---

##### `GpuZonalRedundancyDisabled`<sup>Required</sup> <a name="GpuZonalRedundancyDisabled" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.gpuZonalRedundancyDisabled"></a>

```go
func GpuZonalRedundancyDisabled() interface{}
```

- *Type:* interface{}

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.revision"></a>

```go
func Revision() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2WorkerPoolTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate">GoogleCloudRunV2WorkerPoolTemplate</a>

---


### GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resetInstances">ResetInstances</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstances` <a name="ResetInstances" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resetInstances"></a>

```go
func ResetInstances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput">InstancesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.instances">Instances</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput"></a>

```go
func InstancesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.instances"></a>

```go
func Instances() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a>

---


### GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resetMedium">ResetMedium</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resetSizeLimit">ResetSizeLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMedium` <a name="ResetMedium" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resetMedium"></a>

```go
func ResetMedium()
```

##### `ResetSizeLimit` <a name="ResetSizeLimit" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resetSizeLimit"></a>

```go
func ResetSizeLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.mediumInput">MediumInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.sizeLimitInput">SizeLimitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.medium">Medium</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.sizeLimit">SizeLimit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir">GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MediumInput`<sup>Optional</sup> <a name="MediumInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.mediumInput"></a>

```go
func MediumInput() *string
```

- *Type:* *string

---

##### `SizeLimitInput`<sup>Optional</sup> <a name="SizeLimitInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.sizeLimitInput"></a>

```go
func SizeLimitInput() *string
```

- *Type:* *string

---

##### `Medium`<sup>Required</sup> <a name="Medium" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.medium"></a>

```go
func Medium() *string
```

- *Type:* *string

---

##### `SizeLimit`<sup>Required</sup> <a name="SizeLimit" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.sizeLimit"></a>

```go
func SizeLimit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir">GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir</a>

---


### GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resetMountOptions">ResetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resetMountOptions"></a>

```go
func ResetMountOptions()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resetReadOnly"></a>

```go
func ResetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.mountOptionsInput">MountOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.mountOptions">MountOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs">GoogleCloudRunV2WorkerPoolTemplateVolumesGcs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.mountOptionsInput"></a>

```go
func MountOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.readOnlyInput"></a>

```go
func ReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.mountOptions"></a>

```go
func MountOptions() *[]*string
```

- *Type:* *[]*string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.readOnly"></a>

```go
func ReadOnly() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2WorkerPoolTemplateVolumesGcs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs">GoogleCloudRunV2WorkerPoolTemplateVolumesGcs</a>

---


### GoogleCloudRunV2WorkerPoolTemplateVolumesList <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesList" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2WorkerPoolTemplateVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resetReadOnly"></a>

```go
func ResetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.serverInput">ServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.server">Server</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs">GoogleCloudRunV2WorkerPoolTemplateVolumesNfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.readOnlyInput"></a>

```go
func ReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.serverInput"></a>

```go
func ServerInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.readOnly"></a>

```go
func ReadOnly() interface{}
```

- *Type:* interface{}

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.server"></a>

```go
func Server() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2WorkerPoolTemplateVolumesNfs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs">GoogleCloudRunV2WorkerPoolTemplateVolumesNfs</a>

---


### GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putCloudSqlInstance">PutCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putEmptyDir">PutEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putGcs">PutGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putNfs">PutNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resetCloudSqlInstance">ResetCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resetEmptyDir">ResetEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resetGcs">ResetGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resetNfs">ResetNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudSqlInstance` <a name="PutCloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putCloudSqlInstance"></a>

```go
func PutCloudSqlInstance(value GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putCloudSqlInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a>

---

##### `PutEmptyDir` <a name="PutEmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putEmptyDir"></a>

```go
func PutEmptyDir(value GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putEmptyDir.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir">GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir</a>

---

##### `PutGcs` <a name="PutGcs" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putGcs"></a>

```go
func PutGcs(value GoogleCloudRunV2WorkerPoolTemplateVolumesGcs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putGcs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs">GoogleCloudRunV2WorkerPoolTemplateVolumesGcs</a>

---

##### `PutNfs` <a name="PutNfs" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putNfs"></a>

```go
func PutNfs(value GoogleCloudRunV2WorkerPoolTemplateVolumesNfs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putNfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs">GoogleCloudRunV2WorkerPoolTemplateVolumesNfs</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putSecret"></a>

```go
func PutSecret(value GoogleCloudRunV2WorkerPoolTemplateVolumesSecret)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret">GoogleCloudRunV2WorkerPoolTemplateVolumesSecret</a>

---

##### `ResetCloudSqlInstance` <a name="ResetCloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resetCloudSqlInstance"></a>

```go
func ResetCloudSqlInstance()
```

##### `ResetEmptyDir` <a name="ResetEmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resetEmptyDir"></a>

```go
func ResetEmptyDir()
```

##### `ResetGcs` <a name="ResetGcs" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resetGcs"></a>

```go
func ResetGcs()
```

##### `ResetNfs` <a name="ResetNfs" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resetNfs"></a>

```go
func ResetNfs()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resetSecret"></a>

```go
func ResetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference">GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.emptyDir">EmptyDir</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference">GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.gcs">Gcs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference">GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nfs">Nfs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference">GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference">GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.cloudSqlInstanceInput">CloudSqlInstanceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.emptyDirInput">EmptyDirInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir">GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.gcsInput">GcsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs">GoogleCloudRunV2WorkerPoolTemplateVolumesGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nfsInput">NfsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs">GoogleCloudRunV2WorkerPoolTemplateVolumesNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.secretInput">SecretInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret">GoogleCloudRunV2WorkerPoolTemplateVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudSqlInstance`<sup>Required</sup> <a name="CloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.cloudSqlInstance"></a>

```go
func CloudSqlInstance() GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference">GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference</a>

---

##### `EmptyDir`<sup>Required</sup> <a name="EmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.emptyDir"></a>

```go
func EmptyDir() GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference">GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference</a>

---

##### `Gcs`<sup>Required</sup> <a name="Gcs" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.gcs"></a>

```go
func Gcs() GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference">GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference</a>

---

##### `Nfs`<sup>Required</sup> <a name="Nfs" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nfs"></a>

```go
func Nfs() GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference">GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.secret"></a>

```go
func Secret() GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference">GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference</a>

---

##### `CloudSqlInstanceInput`<sup>Optional</sup> <a name="CloudSqlInstanceInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.cloudSqlInstanceInput"></a>

```go
func CloudSqlInstanceInput() GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a>

---

##### `EmptyDirInput`<sup>Optional</sup> <a name="EmptyDirInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.emptyDirInput"></a>

```go
func EmptyDirInput() GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir">GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir</a>

---

##### `GcsInput`<sup>Optional</sup> <a name="GcsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.gcsInput"></a>

```go
func GcsInput() GoogleCloudRunV2WorkerPoolTemplateVolumesGcs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs">GoogleCloudRunV2WorkerPoolTemplateVolumesGcs</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NfsInput`<sup>Optional</sup> <a name="NfsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nfsInput"></a>

```go
func NfsInput() GoogleCloudRunV2WorkerPoolTemplateVolumesNfs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs">GoogleCloudRunV2WorkerPoolTemplateVolumesNfs</a>

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.secretInput"></a>

```go
func SecretInput() GoogleCloudRunV2WorkerPoolTemplateVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret">GoogleCloudRunV2WorkerPoolTemplateVolumesSecret</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.modeInput">ModeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.mode">Mode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.modeInput"></a>

```go
func ModeInput() *f64
```

- *Type:* *f64

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.mode"></a>

```go
func Mode() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resetDefaultMode">ResetDefaultMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultMode` <a name="ResetDefaultMode" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resetDefaultMode"></a>

```go
func ResetDefaultMode()
```

##### `ResetItems` <a name="ResetItems" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.items">Items</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList">GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.defaultModeInput">DefaultModeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.defaultMode">DefaultMode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret">GoogleCloudRunV2WorkerPoolTemplateVolumesSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.items"></a>

```go
func Items() GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList">GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList</a>

---

##### `DefaultModeInput`<sup>Optional</sup> <a name="DefaultModeInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.defaultModeInput"></a>

```go
func DefaultModeInput() *f64
```

- *Type:* *f64

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `DefaultMode`<sup>Required</sup> <a name="DefaultMode" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.defaultMode"></a>

```go
func DefaultMode() *f64
```

- *Type:* *f64

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2WorkerPoolTemplateVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret">GoogleCloudRunV2WorkerPoolTemplateVolumesSecret</a>

---


### GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList <a name="GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.putNetworkInterfaces">PutNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resetEgress">ResetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resetNetworkInterfaces">ResetNetworkInterfaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkInterfaces` <a name="PutNetworkInterfaces" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.putNetworkInterfaces"></a>

```go
func PutNetworkInterfaces(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEgress` <a name="ResetEgress" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resetEgress"></a>

```go
func ResetEgress()
```

##### `ResetNetworkInterfaces` <a name="ResetNetworkInterfaces" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resetNetworkInterfaces"></a>

```go
func ResetNetworkInterfaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList">GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.egressInput">EgressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.networkInterfacesInput">NetworkInterfacesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.egress">Egress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess">GoogleCloudRunV2WorkerPoolTemplateVpcAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.networkInterfaces"></a>

```go
func NetworkInterfaces() GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList">GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList</a>

---

##### `EgressInput`<sup>Optional</sup> <a name="EgressInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.egressInput"></a>

```go
func EgressInput() *string
```

- *Type:* *string

---

##### `NetworkInterfacesInput`<sup>Optional</sup> <a name="NetworkInterfacesInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.networkInterfacesInput"></a>

```go
func NetworkInterfacesInput() interface{}
```

- *Type:* interface{}

---

##### `Egress`<sup>Required</sup> <a name="Egress" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.egress"></a>

```go
func Egress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2WorkerPoolTemplateVpcAccess
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess">GoogleCloudRunV2WorkerPoolTemplateVpcAccess</a>

---


### GoogleCloudRunV2WorkerPoolTerminalConditionList <a name="GoogleCloudRunV2WorkerPoolTerminalConditionList" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTerminalConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2WorkerPoolTerminalConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference <a name="GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.executionReason">ExecutionReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.revisionReason">RevisionReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalCondition">GoogleCloudRunV2WorkerPoolTerminalCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExecutionReason`<sup>Required</sup> <a name="ExecutionReason" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.executionReason"></a>

```go
func ExecutionReason() *string
```

- *Type:* *string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.lastTransitionTime"></a>

```go
func LastTransitionTime() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `RevisionReason`<sup>Required</sup> <a name="RevisionReason" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.revisionReason"></a>

```go
func RevisionReason() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2WorkerPoolTerminalCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalCondition">GoogleCloudRunV2WorkerPoolTerminalCondition</a>

---


### GoogleCloudRunV2WorkerPoolTimeoutsOutputReference <a name="GoogleCloudRunV2WorkerPoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecloudrunv2workerpool"

googlecloudrunv2workerpool.NewGoogleCloudRunV2WorkerPoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2WorkerPoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



