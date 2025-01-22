# `googleDataprocBatch` Submodule <a name="`googleDataprocBatch` Submodule" id="@cdktf/provider-google-beta.googleDataprocBatch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocBatch <a name="GoogleDataprocBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch google_dataproc_batch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.NewGoogleDataprocBatch(scope Construct, id *string, config GoogleDataprocBatchConfig) GoogleDataprocBatch
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig">GoogleDataprocBatchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig">GoogleDataprocBatchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putEnvironmentConfig">PutEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putPysparkBatch">PutPysparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putRuntimeConfig">PutRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkBatch">PutSparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkRBatch">PutSparkRBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkSqlBatch">PutSparkSqlBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetBatchId">ResetBatchId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetEnvironmentConfig">ResetEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetPysparkBatch">ResetPysparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetRuntimeConfig">ResetRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetSparkBatch">ResetSparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetSparkRBatch">ResetSparkRBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetSparkSqlBatch">ResetSparkSqlBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEnvironmentConfig` <a name="PutEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putEnvironmentConfig"></a>

```go
func PutEnvironmentConfig(value GoogleDataprocBatchEnvironmentConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a>

---

##### `PutPysparkBatch` <a name="PutPysparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putPysparkBatch"></a>

```go
func PutPysparkBatch(value GoogleDataprocBatchPysparkBatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putPysparkBatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a>

---

##### `PutRuntimeConfig` <a name="PutRuntimeConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putRuntimeConfig"></a>

```go
func PutRuntimeConfig(value GoogleDataprocBatchRuntimeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putRuntimeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a>

---

##### `PutSparkBatch` <a name="PutSparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkBatch"></a>

```go
func PutSparkBatch(value GoogleDataprocBatchSparkBatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkBatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a>

---

##### `PutSparkRBatch` <a name="PutSparkRBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkRBatch"></a>

```go
func PutSparkRBatch(value GoogleDataprocBatchSparkRBatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkRBatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a>

---

##### `PutSparkSqlBatch` <a name="PutSparkSqlBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkSqlBatch"></a>

```go
func PutSparkSqlBatch(value GoogleDataprocBatchSparkSqlBatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkSqlBatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDataprocBatchTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts">GoogleDataprocBatchTimeouts</a>

---

##### `ResetBatchId` <a name="ResetBatchId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetBatchId"></a>

```go
func ResetBatchId()
```

##### `ResetEnvironmentConfig` <a name="ResetEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetEnvironmentConfig"></a>

```go
func ResetEnvironmentConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPysparkBatch` <a name="ResetPysparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetPysparkBatch"></a>

```go
func ResetPysparkBatch()
```

##### `ResetRuntimeConfig` <a name="ResetRuntimeConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetRuntimeConfig"></a>

```go
func ResetRuntimeConfig()
```

##### `ResetSparkBatch` <a name="ResetSparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetSparkBatch"></a>

```go
func ResetSparkBatch()
```

##### `ResetSparkRBatch` <a name="ResetSparkRBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetSparkRBatch"></a>

```go
func ResetSparkRBatch()
```

##### `ResetSparkSqlBatch` <a name="ResetSparkSqlBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetSparkSqlBatch"></a>

```go
func ResetSparkSqlBatch()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataprocBatch resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.GoogleDataprocBatch_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.GoogleDataprocBatch_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.GoogleDataprocBatch_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.GoogleDataprocBatch_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleDataprocBatch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDataprocBatch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDataprocBatch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocBatch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.environmentConfig">EnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference">GoogleDataprocBatchEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.pysparkBatch">PysparkBatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference">GoogleDataprocBatchPysparkBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference">GoogleDataprocBatchRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.runtimeInfo">RuntimeInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList">GoogleDataprocBatchRuntimeInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkBatch">SparkBatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference">GoogleDataprocBatchSparkBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkRBatch">SparkRBatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference">GoogleDataprocBatchSparkRBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkSqlBatch">SparkSqlBatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference">GoogleDataprocBatchSparkSqlBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.stateHistory">StateHistory</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList">GoogleDataprocBatchStateHistoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.stateTime">StateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference">GoogleDataprocBatchTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.batchIdInput">BatchIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.environmentConfigInput">EnvironmentConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.pysparkBatchInput">PysparkBatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.runtimeConfigInput">RuntimeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkBatchInput">SparkBatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkRBatchInput">SparkRBatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkSqlBatchInput">SparkSqlBatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.batchId">BatchId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EnvironmentConfig`<sup>Required</sup> <a name="EnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.environmentConfig"></a>

```go
func EnvironmentConfig() GoogleDataprocBatchEnvironmentConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference">GoogleDataprocBatchEnvironmentConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `PysparkBatch`<sup>Required</sup> <a name="PysparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.pysparkBatch"></a>

```go
func PysparkBatch() GoogleDataprocBatchPysparkBatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference">GoogleDataprocBatchPysparkBatchOutputReference</a>

---

##### `RuntimeConfig`<sup>Required</sup> <a name="RuntimeConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.runtimeConfig"></a>

```go
func RuntimeConfig() GoogleDataprocBatchRuntimeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference">GoogleDataprocBatchRuntimeConfigOutputReference</a>

---

##### `RuntimeInfo`<sup>Required</sup> <a name="RuntimeInfo" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.runtimeInfo"></a>

```go
func RuntimeInfo() GoogleDataprocBatchRuntimeInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList">GoogleDataprocBatchRuntimeInfoList</a>

---

##### `SparkBatch`<sup>Required</sup> <a name="SparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkBatch"></a>

```go
func SparkBatch() GoogleDataprocBatchSparkBatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference">GoogleDataprocBatchSparkBatchOutputReference</a>

---

##### `SparkRBatch`<sup>Required</sup> <a name="SparkRBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkRBatch"></a>

```go
func SparkRBatch() GoogleDataprocBatchSparkRBatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference">GoogleDataprocBatchSparkRBatchOutputReference</a>

---

##### `SparkSqlBatch`<sup>Required</sup> <a name="SparkSqlBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkSqlBatch"></a>

```go
func SparkSqlBatch() GoogleDataprocBatchSparkSqlBatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference">GoogleDataprocBatchSparkSqlBatchOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateHistory`<sup>Required</sup> <a name="StateHistory" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.stateHistory"></a>

```go
func StateHistory() GoogleDataprocBatchStateHistoryList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList">GoogleDataprocBatchStateHistoryList</a>

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `StateTime`<sup>Required</sup> <a name="StateTime" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.stateTime"></a>

```go
func StateTime() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.timeouts"></a>

```go
func Timeouts() GoogleDataprocBatchTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference">GoogleDataprocBatchTimeoutsOutputReference</a>

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `BatchIdInput`<sup>Optional</sup> <a name="BatchIdInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.batchIdInput"></a>

```go
func BatchIdInput() *string
```

- *Type:* *string

---

##### `EnvironmentConfigInput`<sup>Optional</sup> <a name="EnvironmentConfigInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.environmentConfigInput"></a>

```go
func EnvironmentConfigInput() GoogleDataprocBatchEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PysparkBatchInput`<sup>Optional</sup> <a name="PysparkBatchInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.pysparkBatchInput"></a>

```go
func PysparkBatchInput() GoogleDataprocBatchPysparkBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a>

---

##### `RuntimeConfigInput`<sup>Optional</sup> <a name="RuntimeConfigInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.runtimeConfigInput"></a>

```go
func RuntimeConfigInput() GoogleDataprocBatchRuntimeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a>

---

##### `SparkBatchInput`<sup>Optional</sup> <a name="SparkBatchInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkBatchInput"></a>

```go
func SparkBatchInput() GoogleDataprocBatchSparkBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a>

---

##### `SparkRBatchInput`<sup>Optional</sup> <a name="SparkRBatchInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkRBatchInput"></a>

```go
func SparkRBatchInput() GoogleDataprocBatchSparkRBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a>

---

##### `SparkSqlBatchInput`<sup>Optional</sup> <a name="SparkSqlBatchInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkSqlBatchInput"></a>

```go
func SparkSqlBatchInput() GoogleDataprocBatchSparkSqlBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BatchId`<sup>Required</sup> <a name="BatchId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.batchId"></a>

```go
func BatchId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocBatchConfig <a name="GoogleDataprocBatchConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

&googledataprocbatch.GoogleDataprocBatchConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BatchId: *string,
	EnvironmentConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Project: *string,
	PysparkBatch: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataprocBatch.GoogleDataprocBatchPysparkBatch,
	RuntimeConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig,
	SparkBatch: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataprocBatch.GoogleDataprocBatchSparkBatch,
	SparkRBatch: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataprocBatch.GoogleDataprocBatchSparkRBatch,
	SparkSqlBatch: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataprocBatch.GoogleDataprocBatchTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.batchId">BatchId</a></code> | <code>*string</code> | The ID to use for the batch, which will become the final component of the batch's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.environmentConfig">EnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a></code> | environment_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#id GoogleDataprocBatch#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels to associate with this batch. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.location">Location</a></code> | <code>*string</code> | The location in which the batch will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#project GoogleDataprocBatch#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.pysparkBatch">PysparkBatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a></code> | pyspark_batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.sparkBatch">SparkBatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a></code> | spark_batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.sparkRBatch">SparkRBatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a></code> | spark_r_batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.sparkSqlBatch">SparkSqlBatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a></code> | spark_sql_batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts">GoogleDataprocBatchTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BatchId`<sup>Optional</sup> <a name="BatchId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.batchId"></a>

```go
BatchId *string
```

- *Type:* *string

The ID to use for the batch, which will become the final component of the batch's resource name.

This value must be 4-63 characters. Valid characters are /[a-z][0-9]-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#batch_id GoogleDataprocBatch#batch_id}

---

##### `EnvironmentConfig`<sup>Optional</sup> <a name="EnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.environmentConfig"></a>

```go
EnvironmentConfig GoogleDataprocBatchEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a>

environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#environment_config GoogleDataprocBatch#environment_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#id GoogleDataprocBatch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels to associate with this batch.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#labels GoogleDataprocBatch#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location in which the batch will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#location GoogleDataprocBatch#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#project GoogleDataprocBatch#project}.

---

##### `PysparkBatch`<sup>Optional</sup> <a name="PysparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.pysparkBatch"></a>

```go
PysparkBatch GoogleDataprocBatchPysparkBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a>

pyspark_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#pyspark_batch GoogleDataprocBatch#pyspark_batch}

---

##### `RuntimeConfig`<sup>Optional</sup> <a name="RuntimeConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.runtimeConfig"></a>

```go
RuntimeConfig GoogleDataprocBatchRuntimeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#runtime_config GoogleDataprocBatch#runtime_config}

---

##### `SparkBatch`<sup>Optional</sup> <a name="SparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.sparkBatch"></a>

```go
SparkBatch GoogleDataprocBatchSparkBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a>

spark_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#spark_batch GoogleDataprocBatch#spark_batch}

---

##### `SparkRBatch`<sup>Optional</sup> <a name="SparkRBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.sparkRBatch"></a>

```go
SparkRBatch GoogleDataprocBatchSparkRBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a>

spark_r_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#spark_r_batch GoogleDataprocBatch#spark_r_batch}

---

##### `SparkSqlBatch`<sup>Optional</sup> <a name="SparkSqlBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.sparkSqlBatch"></a>

```go
SparkSqlBatch GoogleDataprocBatchSparkSqlBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a>

spark_sql_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#spark_sql_batch GoogleDataprocBatch#spark_sql_batch}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.timeouts"></a>

```go
Timeouts GoogleDataprocBatchTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts">GoogleDataprocBatchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#timeouts GoogleDataprocBatch#timeouts}

---

### GoogleDataprocBatchEnvironmentConfig <a name="GoogleDataprocBatchEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

&googledataprocbatch.GoogleDataprocBatchEnvironmentConfig {
	ExecutionConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig,
	PeripheralsConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig.property.executionConfig">ExecutionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig">GoogleDataprocBatchEnvironmentConfigExecutionConfig</a></code> | execution_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig.property.peripheralsConfig">PeripheralsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfig</a></code> | peripherals_config block. |

---

##### `ExecutionConfig`<sup>Optional</sup> <a name="ExecutionConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig.property.executionConfig"></a>

```go
ExecutionConfig GoogleDataprocBatchEnvironmentConfigExecutionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig">GoogleDataprocBatchEnvironmentConfigExecutionConfig</a>

execution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#execution_config GoogleDataprocBatch#execution_config}

---

##### `PeripheralsConfig`<sup>Optional</sup> <a name="PeripheralsConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig.property.peripheralsConfig"></a>

```go
PeripheralsConfig GoogleDataprocBatchEnvironmentConfigPeripheralsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfig</a>

peripherals_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#peripherals_config GoogleDataprocBatch#peripherals_config}

---

### GoogleDataprocBatchEnvironmentConfigExecutionConfig <a name="GoogleDataprocBatchEnvironmentConfigExecutionConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

&googledataprocbatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig {
	KmsKey: *string,
	NetworkTags: *[]*string,
	NetworkUri: *string,
	ServiceAccount: *string,
	StagingBucket: *string,
	SubnetworkUri: *string,
	Ttl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.kmsKey">KmsKey</a></code> | <code>*string</code> | The Cloud KMS key to use for encryption. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.networkTags">NetworkTags</a></code> | <code>*[]*string</code> | Tags used for network traffic control. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.networkUri">NetworkUri</a></code> | <code>*string</code> | Network configuration for workload execution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Service account that used to execute workload. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.stagingBucket">StagingBucket</a></code> | <code>*string</code> | A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.subnetworkUri">SubnetworkUri</a></code> | <code>*string</code> | Subnetwork configuration for workload execution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.ttl">Ttl</a></code> | <code>*string</code> | The duration after which the workload will be terminated. |

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

The Cloud KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#kms_key GoogleDataprocBatch#kms_key}

---

##### `NetworkTags`<sup>Optional</sup> <a name="NetworkTags" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.networkTags"></a>

```go
NetworkTags *[]*string
```

- *Type:* *[]*string

Tags used for network traffic control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#network_tags GoogleDataprocBatch#network_tags}

---

##### `NetworkUri`<sup>Optional</sup> <a name="NetworkUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.networkUri"></a>

```go
NetworkUri *string
```

- *Type:* *string

Network configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#network_uri GoogleDataprocBatch#network_uri}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Service account that used to execute workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#service_account GoogleDataprocBatch#service_account}

---

##### `StagingBucket`<sup>Optional</sup> <a name="StagingBucket" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.stagingBucket"></a>

```go
StagingBucket *string
```

- *Type:* *string

A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files.

If you do not specify a staging bucket,
Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running,
and then create and manage project-level, per-location staging and temporary buckets.
This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#staging_bucket GoogleDataprocBatch#staging_bucket}

---

##### `SubnetworkUri`<sup>Optional</sup> <a name="SubnetworkUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.subnetworkUri"></a>

```go
SubnetworkUri *string
```

- *Type:* *string

Subnetwork configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#subnetwork_uri GoogleDataprocBatch#subnetwork_uri}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

The duration after which the workload will be terminated.

When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing
work to finish. If ttl is not specified for a batch workload, the workload will be allowed to run until it
exits naturally (or run forever without exiting). If ttl is not specified for an interactive session,
it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours.
Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idleTtl are specified (for an interactive session),
the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or
when ttl has been exceeded, whichever occurs first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#ttl GoogleDataprocBatch#ttl}

---

### GoogleDataprocBatchEnvironmentConfigPeripheralsConfig <a name="GoogleDataprocBatchEnvironmentConfigPeripheralsConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

&googledataprocbatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig {
	MetastoreService: *string,
	SparkHistoryServerConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig.property.metastoreService">MetastoreService</a></code> | <code>*string</code> | Resource name of an existing Dataproc Metastore service. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig">SparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | spark_history_server_config block. |

---

##### `MetastoreService`<sup>Optional</sup> <a name="MetastoreService" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig.property.metastoreService"></a>

```go
MetastoreService *string
```

- *Type:* *string

Resource name of an existing Dataproc Metastore service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#metastore_service GoogleDataprocBatch#metastore_service}

---

##### `SparkHistoryServerConfig`<sup>Optional</sup> <a name="SparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig"></a>

```go
SparkHistoryServerConfig GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#spark_history_server_config GoogleDataprocBatch#spark_history_server_config}

---

### GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig <a name="GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

&googledataprocbatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig {
	DataprocCluster: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster">DataprocCluster</a></code> | <code>*string</code> | Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload. |

---

##### `DataprocCluster`<sup>Optional</sup> <a name="DataprocCluster" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster"></a>

```go
DataprocCluster *string
```

- *Type:* *string

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#dataproc_cluster GoogleDataprocBatch#dataproc_cluster}

---

### GoogleDataprocBatchPysparkBatch <a name="GoogleDataprocBatchPysparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

&googledataprocbatch.GoogleDataprocBatchPysparkBatch {
	ArchiveUris: *[]*string,
	Args: *[]*string,
	FileUris: *[]*string,
	JarFileUris: *[]*string,
	MainPythonFileUri: *string,
	PythonFileUris: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.args">Args</a></code> | <code>*[]*string</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.mainPythonFileUri">MainPythonFileUri</a></code> | <code>*string</code> | The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.pythonFileUris">PythonFileUris</a></code> | <code>*[]*string</code> | HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip. |

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.archiveUris"></a>

```go
ArchiveUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#archive_uris GoogleDataprocBatch#archive_uris}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#args GoogleDataprocBatch#args}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.fileUris"></a>

```go
FileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#file_uris GoogleDataprocBatch#file_uris}

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.jarFileUris"></a>

```go
JarFileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#jar_file_uris GoogleDataprocBatch#jar_file_uris}

---

##### `MainPythonFileUri`<sup>Optional</sup> <a name="MainPythonFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.mainPythonFileUri"></a>

```go
MainPythonFileUri *string
```

- *Type:* *string

The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#main_python_file_uri GoogleDataprocBatch#main_python_file_uri}

---

##### `PythonFileUris`<sup>Optional</sup> <a name="PythonFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.pythonFileUris"></a>

```go
PythonFileUris *[]*string
```

- *Type:* *[]*string

HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#python_file_uris GoogleDataprocBatch#python_file_uris}

---

### GoogleDataprocBatchRuntimeConfig <a name="GoogleDataprocBatchRuntimeConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

&googledataprocbatch.GoogleDataprocBatchRuntimeConfig {
	AutotuningConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig,
	Cohort: *string,
	ContainerImage: *string,
	Properties: *map[string]*string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.autotuningConfig">AutotuningConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig">GoogleDataprocBatchRuntimeConfigAutotuningConfig</a></code> | autotuning_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.cohort">Cohort</a></code> | <code>*string</code> | Optional. Cohort identifier. Identifies families of the workloads having the same shape, e.g. daily ETL jobs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.containerImage">ContainerImage</a></code> | <code>*string</code> | Optional custom container image for the job runtime environment. If not specified, a default container image will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.properties">Properties</a></code> | <code>*map[string]*string</code> | A mapping of property names to values, which are used to configure workload execution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.version">Version</a></code> | <code>*string</code> | Version of the batch runtime. |

---

##### `AutotuningConfig`<sup>Optional</sup> <a name="AutotuningConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.autotuningConfig"></a>

```go
AutotuningConfig GoogleDataprocBatchRuntimeConfigAutotuningConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig">GoogleDataprocBatchRuntimeConfigAutotuningConfig</a>

autotuning_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#autotuning_config GoogleDataprocBatch#autotuning_config}

---

##### `Cohort`<sup>Optional</sup> <a name="Cohort" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.cohort"></a>

```go
Cohort *string
```

- *Type:* *string

Optional. Cohort identifier. Identifies families of the workloads having the same shape, e.g. daily ETL jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#cohort GoogleDataprocBatch#cohort}

---

##### `ContainerImage`<sup>Optional</sup> <a name="ContainerImage" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.containerImage"></a>

```go
ContainerImage *string
```

- *Type:* *string

Optional custom container image for the job runtime environment. If not specified, a default container image will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#container_image GoogleDataprocBatch#container_image}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

A mapping of property names to values, which are used to configure workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#properties GoogleDataprocBatch#properties}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Version of the batch runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#version GoogleDataprocBatch#version}

---

### GoogleDataprocBatchRuntimeConfigAutotuningConfig <a name="GoogleDataprocBatchRuntimeConfigAutotuningConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

&googledataprocbatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig {
	Scenarios: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig.property.scenarios">Scenarios</a></code> | <code>*[]*string</code> | Optional. Scenarios for which tunings are applied. Possible values: ["SCALING", "BROADCAST_HASH_JOIN", "MEMORY"]. |

---

##### `Scenarios`<sup>Optional</sup> <a name="Scenarios" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig.property.scenarios"></a>

```go
Scenarios *[]*string
```

- *Type:* *[]*string

Optional. Scenarios for which tunings are applied. Possible values: ["SCALING", "BROADCAST_HASH_JOIN", "MEMORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#scenarios GoogleDataprocBatch#scenarios}

---

### GoogleDataprocBatchRuntimeInfo <a name="GoogleDataprocBatchRuntimeInfo" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

&googledataprocbatch.GoogleDataprocBatchRuntimeInfo {

}
```


### GoogleDataprocBatchRuntimeInfoApproximateUsage <a name="GoogleDataprocBatchRuntimeInfoApproximateUsage" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

&googledataprocbatch.GoogleDataprocBatchRuntimeInfoApproximateUsage {

}
```


### GoogleDataprocBatchRuntimeInfoCurrentUsage <a name="GoogleDataprocBatchRuntimeInfoCurrentUsage" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

&googledataprocbatch.GoogleDataprocBatchRuntimeInfoCurrentUsage {

}
```


### GoogleDataprocBatchSparkBatch <a name="GoogleDataprocBatchSparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

&googledataprocbatch.GoogleDataprocBatchSparkBatch {
	ArchiveUris: *[]*string,
	Args: *[]*string,
	FileUris: *[]*string,
	JarFileUris: *[]*string,
	MainClass: *string,
	MainJarFileUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.args">Args</a></code> | <code>*[]*string</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.mainClass">MainClass</a></code> | <code>*string</code> | The name of the driver main class. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.mainJarFileUri">MainJarFileUri</a></code> | <code>*string</code> | The HCFS URI of the jar file that contains the main class. |

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.archiveUris"></a>

```go
ArchiveUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#archive_uris GoogleDataprocBatch#archive_uris}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#args GoogleDataprocBatch#args}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.fileUris"></a>

```go
FileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#file_uris GoogleDataprocBatch#file_uris}

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.jarFileUris"></a>

```go
JarFileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#jar_file_uris GoogleDataprocBatch#jar_file_uris}

---

##### `MainClass`<sup>Optional</sup> <a name="MainClass" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.mainClass"></a>

```go
MainClass *string
```

- *Type:* *string

The name of the driver main class.

The jar file that contains the class must be in the
classpath or specified in jarFileUris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#main_class GoogleDataprocBatch#main_class}

---

##### `MainJarFileUri`<sup>Optional</sup> <a name="MainJarFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.mainJarFileUri"></a>

```go
MainJarFileUri *string
```

- *Type:* *string

The HCFS URI of the jar file that contains the main class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#main_jar_file_uri GoogleDataprocBatch#main_jar_file_uri}

---

### GoogleDataprocBatchSparkRBatch <a name="GoogleDataprocBatchSparkRBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

&googledataprocbatch.GoogleDataprocBatchSparkRBatch {
	ArchiveUris: *[]*string,
	Args: *[]*string,
	FileUris: *[]*string,
	MainRFileUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.args">Args</a></code> | <code>*[]*string</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.mainRFileUri">MainRFileUri</a></code> | <code>*string</code> | The HCFS URI of the main R file to use as the driver. |

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.archiveUris"></a>

```go
ArchiveUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#archive_uris GoogleDataprocBatch#archive_uris}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#args GoogleDataprocBatch#args}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.fileUris"></a>

```go
FileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#file_uris GoogleDataprocBatch#file_uris}

---

##### `MainRFileUri`<sup>Optional</sup> <a name="MainRFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.mainRFileUri"></a>

```go
MainRFileUri *string
```

- *Type:* *string

The HCFS URI of the main R file to use as the driver.

Must be a .R or .r file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#main_r_file_uri GoogleDataprocBatch#main_r_file_uri}

---

### GoogleDataprocBatchSparkSqlBatch <a name="GoogleDataprocBatchSparkSqlBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

&googledataprocbatch.GoogleDataprocBatchSparkSqlBatch {
	JarFileUris: *[]*string,
	QueryFileUri: *string,
	QueryVariables: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | HCFS URIs of jar files to be added to the Spark CLASSPATH. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch.property.queryFileUri">QueryFileUri</a></code> | <code>*string</code> | The HCFS URI of the script that contains Spark SQL queries to execute. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch.property.queryVariables">QueryVariables</a></code> | <code>*map[string]*string</code> | Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";). |

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch.property.jarFileUris"></a>

```go
JarFileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of jar files to be added to the Spark CLASSPATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#jar_file_uris GoogleDataprocBatch#jar_file_uris}

---

##### `QueryFileUri`<sup>Optional</sup> <a name="QueryFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch.property.queryFileUri"></a>

```go
QueryFileUri *string
```

- *Type:* *string

The HCFS URI of the script that contains Spark SQL queries to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#query_file_uri GoogleDataprocBatch#query_file_uri}

---

##### `QueryVariables`<sup>Optional</sup> <a name="QueryVariables" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch.property.queryVariables"></a>

```go
QueryVariables *map[string]*string
```

- *Type:* *map[string]*string

Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#query_variables GoogleDataprocBatch#query_variables}

---

### GoogleDataprocBatchStateHistory <a name="GoogleDataprocBatchStateHistory" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

&googledataprocbatch.GoogleDataprocBatchStateHistory {

}
```


### GoogleDataprocBatchTimeouts <a name="GoogleDataprocBatchTimeouts" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

&googledataprocbatch.GoogleDataprocBatchTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#create GoogleDataprocBatch#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#delete GoogleDataprocBatch#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#update GoogleDataprocBatch#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#create GoogleDataprocBatch#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#delete GoogleDataprocBatch#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#update GoogleDataprocBatch#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference <a name="GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.NewGoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags">ResetNetworkTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkUri">ResetNetworkUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket">ResetStagingBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri">ResetSubnetworkUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetNetworkTags` <a name="ResetNetworkTags" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags"></a>

```go
func ResetNetworkTags()
```

##### `ResetNetworkUri` <a name="ResetNetworkUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkUri"></a>

```go
func ResetNetworkUri()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetStagingBucket` <a name="ResetStagingBucket" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket"></a>

```go
func ResetStagingBucket()
```

##### `ResetSubnetworkUri` <a name="ResetSubnetworkUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri"></a>

```go
func ResetSubnetworkUri()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetTtl"></a>

```go
func ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput">NetworkTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUriInput">NetworkUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput">StagingBucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput">SubnetworkUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTags">NetworkTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUri">NetworkUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket">StagingBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri">SubnetworkUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig">GoogleDataprocBatchEnvironmentConfigExecutionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `NetworkTagsInput`<sup>Optional</sup> <a name="NetworkTagsInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput"></a>

```go
func NetworkTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkUriInput`<sup>Optional</sup> <a name="NetworkUriInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUriInput"></a>

```go
func NetworkUriInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `StagingBucketInput`<sup>Optional</sup> <a name="StagingBucketInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput"></a>

```go
func StagingBucketInput() *string
```

- *Type:* *string

---

##### `SubnetworkUriInput`<sup>Optional</sup> <a name="SubnetworkUriInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput"></a>

```go
func SubnetworkUriInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `NetworkTags`<sup>Required</sup> <a name="NetworkTags" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTags"></a>

```go
func NetworkTags() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkUri`<sup>Required</sup> <a name="NetworkUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUri"></a>

```go
func NetworkUri() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `StagingBucket`<sup>Required</sup> <a name="StagingBucket" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket"></a>

```go
func StagingBucket() *string
```

- *Type:* *string

---

##### `SubnetworkUri`<sup>Required</sup> <a name="SubnetworkUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri"></a>

```go
func SubnetworkUri() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocBatchEnvironmentConfigExecutionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig">GoogleDataprocBatchEnvironmentConfigExecutionConfig</a>

---


### GoogleDataprocBatchEnvironmentConfigOutputReference <a name="GoogleDataprocBatchEnvironmentConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.NewGoogleDataprocBatchEnvironmentConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocBatchEnvironmentConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putExecutionConfig">PutExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putPeripheralsConfig">PutPeripheralsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.resetExecutionConfig">ResetExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.resetPeripheralsConfig">ResetPeripheralsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExecutionConfig` <a name="PutExecutionConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putExecutionConfig"></a>

```go
func PutExecutionConfig(value GoogleDataprocBatchEnvironmentConfigExecutionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putExecutionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig">GoogleDataprocBatchEnvironmentConfigExecutionConfig</a>

---

##### `PutPeripheralsConfig` <a name="PutPeripheralsConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putPeripheralsConfig"></a>

```go
func PutPeripheralsConfig(value GoogleDataprocBatchEnvironmentConfigPeripheralsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putPeripheralsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfig</a>

---

##### `ResetExecutionConfig` <a name="ResetExecutionConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.resetExecutionConfig"></a>

```go
func ResetExecutionConfig()
```

##### `ResetPeripheralsConfig` <a name="ResetPeripheralsConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.resetPeripheralsConfig"></a>

```go
func ResetPeripheralsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.executionConfig">ExecutionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference">GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfig">PeripheralsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.executionConfigInput">ExecutionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig">GoogleDataprocBatchEnvironmentConfigExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfigInput">PeripheralsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExecutionConfig`<sup>Required</sup> <a name="ExecutionConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.executionConfig"></a>

```go
func ExecutionConfig() GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference">GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference</a>

---

##### `PeripheralsConfig`<sup>Required</sup> <a name="PeripheralsConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfig"></a>

```go
func PeripheralsConfig() GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference</a>

---

##### `ExecutionConfigInput`<sup>Optional</sup> <a name="ExecutionConfigInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.executionConfigInput"></a>

```go
func ExecutionConfigInput() GoogleDataprocBatchEnvironmentConfigExecutionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig">GoogleDataprocBatchEnvironmentConfigExecutionConfig</a>

---

##### `PeripheralsConfigInput`<sup>Optional</sup> <a name="PeripheralsConfigInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfigInput"></a>

```go
func PeripheralsConfigInput() GoogleDataprocBatchEnvironmentConfigPeripheralsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocBatchEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a>

---


### GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference <a name="GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.NewGoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig">PutSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService">ResetMetastoreService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig">ResetSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSparkHistoryServerConfig` <a name="PutSparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig"></a>

```go
func PutSparkHistoryServerConfig(value GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---

##### `ResetMetastoreService` <a name="ResetMetastoreService" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService"></a>

```go
func ResetMetastoreService()
```

##### `ResetSparkHistoryServerConfig` <a name="ResetSparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig"></a>

```go
func ResetSparkHistoryServerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig">SparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput">MetastoreServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput">SparkHistoryServerConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService">MetastoreService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SparkHistoryServerConfig`<sup>Required</sup> <a name="SparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig"></a>

```go
func SparkHistoryServerConfig() GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a>

---

##### `MetastoreServiceInput`<sup>Optional</sup> <a name="MetastoreServiceInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput"></a>

```go
func MetastoreServiceInput() *string
```

- *Type:* *string

---

##### `SparkHistoryServerConfigInput`<sup>Optional</sup> <a name="SparkHistoryServerConfigInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput"></a>

```go
func SparkHistoryServerConfigInput() GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---

##### `MetastoreService`<sup>Required</sup> <a name="MetastoreService" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService"></a>

```go
func MetastoreService() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocBatchEnvironmentConfigPeripheralsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfig</a>

---


### GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference <a name="GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.NewGoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster">ResetDataprocCluster</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataprocCluster` <a name="ResetDataprocCluster" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster"></a>

```go
func ResetDataprocCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput">DataprocClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster">DataprocCluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataprocClusterInput`<sup>Optional</sup> <a name="DataprocClusterInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput"></a>

```go
func DataprocClusterInput() *string
```

- *Type:* *string

---

##### `DataprocCluster`<sup>Required</sup> <a name="DataprocCluster" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster"></a>

```go
func DataprocCluster() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---


### GoogleDataprocBatchPysparkBatchOutputReference <a name="GoogleDataprocBatchPysparkBatchOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.NewGoogleDataprocBatchPysparkBatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocBatchPysparkBatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetMainPythonFileUri">ResetMainPythonFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetPythonFileUris">ResetPythonFileUris</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetArchiveUris"></a>

```go
func ResetArchiveUris()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetFileUris"></a>

```go
func ResetFileUris()
```

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetJarFileUris"></a>

```go
func ResetJarFileUris()
```

##### `ResetMainPythonFileUri` <a name="ResetMainPythonFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetMainPythonFileUri"></a>

```go
func ResetMainPythonFileUri()
```

##### `ResetPythonFileUris` <a name="ResetPythonFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetPythonFileUris"></a>

```go
func ResetPythonFileUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.mainPythonFileUriInput">MainPythonFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.pythonFileUrisInput">PythonFileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.mainPythonFileUri">MainPythonFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.pythonFileUris">PythonFileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.archiveUrisInput"></a>

```go
func ArchiveUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.fileUrisInput"></a>

```go
func FileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.jarFileUrisInput"></a>

```go
func JarFileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `MainPythonFileUriInput`<sup>Optional</sup> <a name="MainPythonFileUriInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.mainPythonFileUriInput"></a>

```go
func MainPythonFileUriInput() *string
```

- *Type:* *string

---

##### `PythonFileUrisInput`<sup>Optional</sup> <a name="PythonFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.pythonFileUrisInput"></a>

```go
func PythonFileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.archiveUris"></a>

```go
func ArchiveUris() *[]*string
```

- *Type:* *[]*string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.fileUris"></a>

```go
func FileUris() *[]*string
```

- *Type:* *[]*string

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.jarFileUris"></a>

```go
func JarFileUris() *[]*string
```

- *Type:* *[]*string

---

##### `MainPythonFileUri`<sup>Required</sup> <a name="MainPythonFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.mainPythonFileUri"></a>

```go
func MainPythonFileUri() *string
```

- *Type:* *string

---

##### `PythonFileUris`<sup>Required</sup> <a name="PythonFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.pythonFileUris"></a>

```go
func PythonFileUris() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocBatchPysparkBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a>

---


### GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference <a name="GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.NewGoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.resetScenarios">ResetScenarios</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScenarios` <a name="ResetScenarios" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.resetScenarios"></a>

```go
func ResetScenarios()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenariosInput">ScenariosInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenarios">Scenarios</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig">GoogleDataprocBatchRuntimeConfigAutotuningConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScenariosInput`<sup>Optional</sup> <a name="ScenariosInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenariosInput"></a>

```go
func ScenariosInput() *[]*string
```

- *Type:* *[]*string

---

##### `Scenarios`<sup>Required</sup> <a name="Scenarios" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenarios"></a>

```go
func Scenarios() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocBatchRuntimeConfigAutotuningConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig">GoogleDataprocBatchRuntimeConfigAutotuningConfig</a>

---


### GoogleDataprocBatchRuntimeConfigOutputReference <a name="GoogleDataprocBatchRuntimeConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.NewGoogleDataprocBatchRuntimeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocBatchRuntimeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.putAutotuningConfig">PutAutotuningConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetAutotuningConfig">ResetAutotuningConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetCohort">ResetCohort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetContainerImage">ResetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutotuningConfig` <a name="PutAutotuningConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.putAutotuningConfig"></a>

```go
func PutAutotuningConfig(value GoogleDataprocBatchRuntimeConfigAutotuningConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.putAutotuningConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig">GoogleDataprocBatchRuntimeConfigAutotuningConfig</a>

---

##### `ResetAutotuningConfig` <a name="ResetAutotuningConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetAutotuningConfig"></a>

```go
func ResetAutotuningConfig()
```

##### `ResetCohort` <a name="ResetCohort" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetCohort"></a>

```go
func ResetCohort()
```

##### `ResetContainerImage` <a name="ResetContainerImage" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetContainerImage"></a>

```go
func ResetContainerImage()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.autotuningConfig">AutotuningConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference">GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.effectiveProperties">EffectiveProperties</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.autotuningConfigInput">AutotuningConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig">GoogleDataprocBatchRuntimeConfigAutotuningConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.cohortInput">CohortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.containerImageInput">ContainerImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.cohort">Cohort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.containerImage">ContainerImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutotuningConfig`<sup>Required</sup> <a name="AutotuningConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.autotuningConfig"></a>

```go
func AutotuningConfig() GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference">GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference</a>

---

##### `EffectiveProperties`<sup>Required</sup> <a name="EffectiveProperties" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.effectiveProperties"></a>

```go
func EffectiveProperties() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `AutotuningConfigInput`<sup>Optional</sup> <a name="AutotuningConfigInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.autotuningConfigInput"></a>

```go
func AutotuningConfigInput() GoogleDataprocBatchRuntimeConfigAutotuningConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig">GoogleDataprocBatchRuntimeConfigAutotuningConfig</a>

---

##### `CohortInput`<sup>Optional</sup> <a name="CohortInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.cohortInput"></a>

```go
func CohortInput() *string
```

- *Type:* *string

---

##### `ContainerImageInput`<sup>Optional</sup> <a name="ContainerImageInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.containerImageInput"></a>

```go
func ContainerImageInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Cohort`<sup>Required</sup> <a name="Cohort" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.cohort"></a>

```go
func Cohort() *string
```

- *Type:* *string

---

##### `ContainerImage`<sup>Required</sup> <a name="ContainerImage" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.containerImage"></a>

```go
func ContainerImage() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocBatchRuntimeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a>

---


### GoogleDataprocBatchRuntimeInfoApproximateUsageList <a name="GoogleDataprocBatchRuntimeInfoApproximateUsageList" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.NewGoogleDataprocBatchRuntimeInfoApproximateUsageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataprocBatchRuntimeInfoApproximateUsageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.get"></a>

```go
func Get(index *f64) GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference <a name="GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.NewGoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliAcceleratorSeconds">MilliAcceleratorSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliDcuSeconds">MilliDcuSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.shuffleStorageGbSeconds">ShuffleStorageGbSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsage">GoogleDataprocBatchRuntimeInfoApproximateUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `MilliAcceleratorSeconds`<sup>Required</sup> <a name="MilliAcceleratorSeconds" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliAcceleratorSeconds"></a>

```go
func MilliAcceleratorSeconds() *string
```

- *Type:* *string

---

##### `MilliDcuSeconds`<sup>Required</sup> <a name="MilliDcuSeconds" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliDcuSeconds"></a>

```go
func MilliDcuSeconds() *string
```

- *Type:* *string

---

##### `ShuffleStorageGbSeconds`<sup>Required</sup> <a name="ShuffleStorageGbSeconds" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.shuffleStorageGbSeconds"></a>

```go
func ShuffleStorageGbSeconds() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocBatchRuntimeInfoApproximateUsage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsage">GoogleDataprocBatchRuntimeInfoApproximateUsage</a>

---


### GoogleDataprocBatchRuntimeInfoCurrentUsageList <a name="GoogleDataprocBatchRuntimeInfoCurrentUsageList" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.NewGoogleDataprocBatchRuntimeInfoCurrentUsageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataprocBatchRuntimeInfoCurrentUsageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.get"></a>

```go
func Get(index *f64) GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference <a name="GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.NewGoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliAccelerator">MilliAccelerator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcu">MilliDcu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcuPremium">MilliDcuPremium</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGb">ShuffleStorageGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGbPremium">ShuffleStorageGbPremium</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.snapshotTime">SnapshotTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsage">GoogleDataprocBatchRuntimeInfoCurrentUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `MilliAccelerator`<sup>Required</sup> <a name="MilliAccelerator" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliAccelerator"></a>

```go
func MilliAccelerator() *string
```

- *Type:* *string

---

##### `MilliDcu`<sup>Required</sup> <a name="MilliDcu" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcu"></a>

```go
func MilliDcu() *string
```

- *Type:* *string

---

##### `MilliDcuPremium`<sup>Required</sup> <a name="MilliDcuPremium" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcuPremium"></a>

```go
func MilliDcuPremium() *string
```

- *Type:* *string

---

##### `ShuffleStorageGb`<sup>Required</sup> <a name="ShuffleStorageGb" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGb"></a>

```go
func ShuffleStorageGb() *string
```

- *Type:* *string

---

##### `ShuffleStorageGbPremium`<sup>Required</sup> <a name="ShuffleStorageGbPremium" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGbPremium"></a>

```go
func ShuffleStorageGbPremium() *string
```

- *Type:* *string

---

##### `SnapshotTime`<sup>Required</sup> <a name="SnapshotTime" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.snapshotTime"></a>

```go
func SnapshotTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocBatchRuntimeInfoCurrentUsage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsage">GoogleDataprocBatchRuntimeInfoCurrentUsage</a>

---


### GoogleDataprocBatchRuntimeInfoList <a name="GoogleDataprocBatchRuntimeInfoList" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.NewGoogleDataprocBatchRuntimeInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataprocBatchRuntimeInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.get"></a>

```go
func Get(index *f64) GoogleDataprocBatchRuntimeInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleDataprocBatchRuntimeInfoOutputReference <a name="GoogleDataprocBatchRuntimeInfoOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.NewGoogleDataprocBatchRuntimeInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataprocBatchRuntimeInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.approximateUsage">ApproximateUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList">GoogleDataprocBatchRuntimeInfoApproximateUsageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.currentUsage">CurrentUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList">GoogleDataprocBatchRuntimeInfoCurrentUsageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.diagnosticOutputUri">DiagnosticOutputUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.endpoints">Endpoints</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.outputUri">OutputUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfo">GoogleDataprocBatchRuntimeInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApproximateUsage`<sup>Required</sup> <a name="ApproximateUsage" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.approximateUsage"></a>

```go
func ApproximateUsage() GoogleDataprocBatchRuntimeInfoApproximateUsageList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList">GoogleDataprocBatchRuntimeInfoApproximateUsageList</a>

---

##### `CurrentUsage`<sup>Required</sup> <a name="CurrentUsage" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.currentUsage"></a>

```go
func CurrentUsage() GoogleDataprocBatchRuntimeInfoCurrentUsageList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList">GoogleDataprocBatchRuntimeInfoCurrentUsageList</a>

---

##### `DiagnosticOutputUri`<sup>Required</sup> <a name="DiagnosticOutputUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.diagnosticOutputUri"></a>

```go
func DiagnosticOutputUri() *string
```

- *Type:* *string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.endpoints"></a>

```go
func Endpoints() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `OutputUri`<sup>Required</sup> <a name="OutputUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.outputUri"></a>

```go
func OutputUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocBatchRuntimeInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfo">GoogleDataprocBatchRuntimeInfo</a>

---


### GoogleDataprocBatchSparkBatchOutputReference <a name="GoogleDataprocBatchSparkBatchOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.NewGoogleDataprocBatchSparkBatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocBatchSparkBatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetMainClass">ResetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetMainJarFileUri">ResetMainJarFileUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetArchiveUris"></a>

```go
func ResetArchiveUris()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetFileUris"></a>

```go
func ResetFileUris()
```

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetJarFileUris"></a>

```go
func ResetJarFileUris()
```

##### `ResetMainClass` <a name="ResetMainClass" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetMainClass"></a>

```go
func ResetMainClass()
```

##### `ResetMainJarFileUri` <a name="ResetMainJarFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetMainJarFileUri"></a>

```go
func ResetMainJarFileUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainClassInput">MainClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainJarFileUriInput">MainJarFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainClass">MainClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainJarFileUri">MainJarFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.archiveUrisInput"></a>

```go
func ArchiveUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.fileUrisInput"></a>

```go
func FileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.jarFileUrisInput"></a>

```go
func JarFileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `MainClassInput`<sup>Optional</sup> <a name="MainClassInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainClassInput"></a>

```go
func MainClassInput() *string
```

- *Type:* *string

---

##### `MainJarFileUriInput`<sup>Optional</sup> <a name="MainJarFileUriInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainJarFileUriInput"></a>

```go
func MainJarFileUriInput() *string
```

- *Type:* *string

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.archiveUris"></a>

```go
func ArchiveUris() *[]*string
```

- *Type:* *[]*string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.fileUris"></a>

```go
func FileUris() *[]*string
```

- *Type:* *[]*string

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.jarFileUris"></a>

```go
func JarFileUris() *[]*string
```

- *Type:* *[]*string

---

##### `MainClass`<sup>Required</sup> <a name="MainClass" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainClass"></a>

```go
func MainClass() *string
```

- *Type:* *string

---

##### `MainJarFileUri`<sup>Required</sup> <a name="MainJarFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainJarFileUri"></a>

```go
func MainJarFileUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocBatchSparkBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a>

---


### GoogleDataprocBatchSparkRBatchOutputReference <a name="GoogleDataprocBatchSparkRBatchOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.NewGoogleDataprocBatchSparkRBatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocBatchSparkRBatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetMainRFileUri">ResetMainRFileUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetArchiveUris"></a>

```go
func ResetArchiveUris()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetFileUris"></a>

```go
func ResetFileUris()
```

##### `ResetMainRFileUri` <a name="ResetMainRFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetMainRFileUri"></a>

```go
func ResetMainRFileUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.mainRFileUriInput">MainRFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.mainRFileUri">MainRFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.archiveUrisInput"></a>

```go
func ArchiveUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.fileUrisInput"></a>

```go
func FileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `MainRFileUriInput`<sup>Optional</sup> <a name="MainRFileUriInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.mainRFileUriInput"></a>

```go
func MainRFileUriInput() *string
```

- *Type:* *string

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.archiveUris"></a>

```go
func ArchiveUris() *[]*string
```

- *Type:* *[]*string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.fileUris"></a>

```go
func FileUris() *[]*string
```

- *Type:* *[]*string

---

##### `MainRFileUri`<sup>Required</sup> <a name="MainRFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.mainRFileUri"></a>

```go
func MainRFileUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocBatchSparkRBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a>

---


### GoogleDataprocBatchSparkSqlBatchOutputReference <a name="GoogleDataprocBatchSparkSqlBatchOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.NewGoogleDataprocBatchSparkSqlBatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocBatchSparkSqlBatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resetQueryFileUri">ResetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resetQueryVariables">ResetQueryVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resetJarFileUris"></a>

```go
func ResetJarFileUris()
```

##### `ResetQueryFileUri` <a name="ResetQueryFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resetQueryFileUri"></a>

```go
func ResetQueryFileUri()
```

##### `ResetQueryVariables` <a name="ResetQueryVariables" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resetQueryVariables"></a>

```go
func ResetQueryVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryFileUriInput">QueryFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryVariablesInput">QueryVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryFileUri">QueryFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryVariables">QueryVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.jarFileUrisInput"></a>

```go
func JarFileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryFileUriInput`<sup>Optional</sup> <a name="QueryFileUriInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryFileUriInput"></a>

```go
func QueryFileUriInput() *string
```

- *Type:* *string

---

##### `QueryVariablesInput`<sup>Optional</sup> <a name="QueryVariablesInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryVariablesInput"></a>

```go
func QueryVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.jarFileUris"></a>

```go
func JarFileUris() *[]*string
```

- *Type:* *[]*string

---

##### `QueryFileUri`<sup>Required</sup> <a name="QueryFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryFileUri"></a>

```go
func QueryFileUri() *string
```

- *Type:* *string

---

##### `QueryVariables`<sup>Required</sup> <a name="QueryVariables" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryVariables"></a>

```go
func QueryVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocBatchSparkSqlBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a>

---


### GoogleDataprocBatchStateHistoryList <a name="GoogleDataprocBatchStateHistoryList" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.NewGoogleDataprocBatchStateHistoryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataprocBatchStateHistoryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.get"></a>

```go
func Get(index *f64) GoogleDataprocBatchStateHistoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleDataprocBatchStateHistoryOutputReference <a name="GoogleDataprocBatchStateHistoryOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.NewGoogleDataprocBatchStateHistoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataprocBatchStateHistoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.stateStartTime">StateStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistory">GoogleDataprocBatchStateHistory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `StateStartTime`<sup>Required</sup> <a name="StateStartTime" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.stateStartTime"></a>

```go
func StateStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocBatchStateHistory
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistory">GoogleDataprocBatchStateHistory</a>

---


### GoogleDataprocBatchTimeoutsOutputReference <a name="GoogleDataprocBatchTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocbatch"

googledataprocbatch.NewGoogleDataprocBatchTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocBatchTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



