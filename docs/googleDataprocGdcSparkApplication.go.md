# `googleDataprocGdcSparkApplication` Submodule <a name="`googleDataprocGdcSparkApplication` Submodule" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocGdcSparkApplication <a name="GoogleDataprocGdcSparkApplication" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application google_dataproc_gdc_spark_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledataprocgdcsparkapplication"

googledataprocgdcsparkapplication.NewGoogleDataprocGdcSparkApplication(scope Construct, id *string, config GoogleDataprocGdcSparkApplicationConfig) GoogleDataprocGdcSparkApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig">GoogleDataprocGdcSparkApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig">GoogleDataprocGdcSparkApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putPysparkApplicationConfig">PutPysparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putSparkApplicationConfig">PutSparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putSparkRApplicationConfig">PutSparkRApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putSparkSqlApplicationConfig">PutSparkSqlApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetApplicationEnvironment">ResetApplicationEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetDependencyImages">ResetDependencyImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetPysparkApplicationConfig">ResetPysparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetSparkApplicationConfig">ResetSparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetSparkRApplicationConfig">ResetSparkRApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetSparkSqlApplicationConfig">ResetSparkSqlApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPysparkApplicationConfig` <a name="PutPysparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putPysparkApplicationConfig"></a>

```go
func PutPysparkApplicationConfig(value GoogleDataprocGdcSparkApplicationPysparkApplicationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putPysparkApplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig">GoogleDataprocGdcSparkApplicationPysparkApplicationConfig</a>

---

##### `PutSparkApplicationConfig` <a name="PutSparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putSparkApplicationConfig"></a>

```go
func PutSparkApplicationConfig(value GoogleDataprocGdcSparkApplicationSparkApplicationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putSparkApplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig">GoogleDataprocGdcSparkApplicationSparkApplicationConfig</a>

---

##### `PutSparkRApplicationConfig` <a name="PutSparkRApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putSparkRApplicationConfig"></a>

```go
func PutSparkRApplicationConfig(value GoogleDataprocGdcSparkApplicationSparkRApplicationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putSparkRApplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig">GoogleDataprocGdcSparkApplicationSparkRApplicationConfig</a>

---

##### `PutSparkSqlApplicationConfig` <a name="PutSparkSqlApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putSparkSqlApplicationConfig"></a>

```go
func PutSparkSqlApplicationConfig(value GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putSparkSqlApplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDataprocGdcSparkApplicationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts">GoogleDataprocGdcSparkApplicationTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetApplicationEnvironment` <a name="ResetApplicationEnvironment" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetApplicationEnvironment"></a>

```go
func ResetApplicationEnvironment()
```

##### `ResetDependencyImages` <a name="ResetDependencyImages" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetDependencyImages"></a>

```go
func ResetDependencyImages()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetProject"></a>

```go
func ResetProject()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetPysparkApplicationConfig` <a name="ResetPysparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetPysparkApplicationConfig"></a>

```go
func ResetPysparkApplicationConfig()
```

##### `ResetSparkApplicationConfig` <a name="ResetSparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetSparkApplicationConfig"></a>

```go
func ResetSparkApplicationConfig()
```

##### `ResetSparkRApplicationConfig` <a name="ResetSparkRApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetSparkRApplicationConfig"></a>

```go
func ResetSparkRApplicationConfig()
```

##### `ResetSparkSqlApplicationConfig` <a name="ResetSparkSqlApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetSparkSqlApplicationConfig"></a>

```go
func ResetSparkSqlApplicationConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataprocGdcSparkApplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledataprocgdcsparkapplication"

googledataprocgdcsparkapplication.GoogleDataprocGdcSparkApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledataprocgdcsparkapplication"

googledataprocgdcsparkapplication.GoogleDataprocGdcSparkApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledataprocgdcsparkapplication"

googledataprocgdcsparkapplication.GoogleDataprocGdcSparkApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledataprocgdcsparkapplication"

googledataprocgdcsparkapplication.GoogleDataprocGdcSparkApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleDataprocGdcSparkApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDataprocGdcSparkApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDataprocGdcSparkApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocGdcSparkApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.monitoringEndpoint">MonitoringEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.outputUri">OutputUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.pysparkApplicationConfig">PysparkApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference">GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkApplicationConfig">SparkApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference">GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkRApplicationConfig">SparkRApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference">GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkSqlApplicationConfig">SparkSqlApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference">GoogleDataprocGdcSparkApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.applicationEnvironmentInput">ApplicationEnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.dependencyImagesInput">DependencyImagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.pysparkApplicationConfigInput">PysparkApplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig">GoogleDataprocGdcSparkApplicationPysparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.serviceinstanceInput">ServiceinstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkApplicationConfigInput">SparkApplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig">GoogleDataprocGdcSparkApplicationSparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkApplicationIdInput">SparkApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkRApplicationConfigInput">SparkRApplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig">GoogleDataprocGdcSparkApplicationSparkRApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkSqlApplicationConfigInput">SparkSqlApplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.applicationEnvironment">ApplicationEnvironment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.dependencyImages">DependencyImages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.serviceinstance">Serviceinstance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkApplicationId">SparkApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `MonitoringEndpoint`<sup>Required</sup> <a name="MonitoringEndpoint" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.monitoringEndpoint"></a>

```go
func MonitoringEndpoint() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OutputUri`<sup>Required</sup> <a name="OutputUri" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.outputUri"></a>

```go
func OutputUri() *string
```

- *Type:* *string

---

##### `PysparkApplicationConfig`<sup>Required</sup> <a name="PysparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.pysparkApplicationConfig"></a>

```go
func PysparkApplicationConfig() GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference">GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SparkApplicationConfig`<sup>Required</sup> <a name="SparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkApplicationConfig"></a>

```go
func SparkApplicationConfig() GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference">GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference</a>

---

##### `SparkRApplicationConfig`<sup>Required</sup> <a name="SparkRApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkRApplicationConfig"></a>

```go
func SparkRApplicationConfig() GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference">GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference</a>

---

##### `SparkSqlApplicationConfig`<sup>Required</sup> <a name="SparkSqlApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkSqlApplicationConfig"></a>

```go
func SparkSqlApplicationConfig() GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.timeouts"></a>

```go
func Timeouts() GoogleDataprocGdcSparkApplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference">GoogleDataprocGdcSparkApplicationTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ApplicationEnvironmentInput`<sup>Optional</sup> <a name="ApplicationEnvironmentInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.applicationEnvironmentInput"></a>

```go
func ApplicationEnvironmentInput() *string
```

- *Type:* *string

---

##### `DependencyImagesInput`<sup>Optional</sup> <a name="DependencyImagesInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.dependencyImagesInput"></a>

```go
func DependencyImagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PysparkApplicationConfigInput`<sup>Optional</sup> <a name="PysparkApplicationConfigInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.pysparkApplicationConfigInput"></a>

```go
func PysparkApplicationConfigInput() GoogleDataprocGdcSparkApplicationPysparkApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig">GoogleDataprocGdcSparkApplicationPysparkApplicationConfig</a>

---

##### `ServiceinstanceInput`<sup>Optional</sup> <a name="ServiceinstanceInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.serviceinstanceInput"></a>

```go
func ServiceinstanceInput() *string
```

- *Type:* *string

---

##### `SparkApplicationConfigInput`<sup>Optional</sup> <a name="SparkApplicationConfigInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkApplicationConfigInput"></a>

```go
func SparkApplicationConfigInput() GoogleDataprocGdcSparkApplicationSparkApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig">GoogleDataprocGdcSparkApplicationSparkApplicationConfig</a>

---

##### `SparkApplicationIdInput`<sup>Optional</sup> <a name="SparkApplicationIdInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkApplicationIdInput"></a>

```go
func SparkApplicationIdInput() *string
```

- *Type:* *string

---

##### `SparkRApplicationConfigInput`<sup>Optional</sup> <a name="SparkRApplicationConfigInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkRApplicationConfigInput"></a>

```go
func SparkRApplicationConfigInput() GoogleDataprocGdcSparkApplicationSparkRApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig">GoogleDataprocGdcSparkApplicationSparkRApplicationConfig</a>

---

##### `SparkSqlApplicationConfigInput`<sup>Optional</sup> <a name="SparkSqlApplicationConfigInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkSqlApplicationConfigInput"></a>

```go
func SparkSqlApplicationConfigInput() GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ApplicationEnvironment`<sup>Required</sup> <a name="ApplicationEnvironment" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.applicationEnvironment"></a>

```go
func ApplicationEnvironment() *string
```

- *Type:* *string

---

##### `DependencyImages`<sup>Required</sup> <a name="DependencyImages" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.dependencyImages"></a>

```go
func DependencyImages() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Serviceinstance`<sup>Required</sup> <a name="Serviceinstance" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.serviceinstance"></a>

```go
func Serviceinstance() *string
```

- *Type:* *string

---

##### `SparkApplicationId`<sup>Required</sup> <a name="SparkApplicationId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkApplicationId"></a>

```go
func SparkApplicationId() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocGdcSparkApplicationConfig <a name="GoogleDataprocGdcSparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledataprocgdcsparkapplication"

&googledataprocgdcsparkapplication.GoogleDataprocGdcSparkApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Serviceinstance: *string,
	SparkApplicationId: *string,
	Annotations: *map[string]*string,
	ApplicationEnvironment: *string,
	DependencyImages: *[]*string,
	DisplayName: *string,
	Id: *string,
	Labels: *map[string]*string,
	Namespace: *string,
	Project: *string,
	Properties: *map[string]*string,
	PysparkApplicationConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig,
	SparkApplicationConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig,
	SparkRApplicationConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig,
	SparkSqlApplicationConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.location">Location</a></code> | <code>*string</code> | The location of the spark application. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.serviceinstance">Serviceinstance</a></code> | <code>*string</code> | The id of the service instance to which this spark application belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.sparkApplicationId">SparkApplicationId</a></code> | <code>*string</code> | The id of the application. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | The annotations to associate with this application. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.applicationEnvironment">ApplicationEnvironment</a></code> | <code>*string</code> | An ApplicationEnvironment from which to inherit configuration properties. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.dependencyImages">DependencyImages</a></code> | <code>*[]*string</code> | List of container image uris for additional file dependencies. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#id GoogleDataprocGdcSparkApplication#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels to associate with this application. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.namespace">Namespace</a></code> | <code>*string</code> | The Kubernetes namespace in which to create the application. This namespace must already exist on the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#project GoogleDataprocGdcSparkApplication#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.properties">Properties</a></code> | <code>*map[string]*string</code> | application-specific properties. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.pysparkApplicationConfig">PysparkApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig">GoogleDataprocGdcSparkApplicationPysparkApplicationConfig</a></code> | pyspark_application_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.sparkApplicationConfig">SparkApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig">GoogleDataprocGdcSparkApplicationSparkApplicationConfig</a></code> | spark_application_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.sparkRApplicationConfig">SparkRApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig">GoogleDataprocGdcSparkApplicationSparkRApplicationConfig</a></code> | spark_r_application_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.sparkSqlApplicationConfig">SparkSqlApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig</a></code> | spark_sql_application_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts">GoogleDataprocGdcSparkApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.version">Version</a></code> | <code>*string</code> | The Dataproc version of this application. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the spark application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#location GoogleDataprocGdcSparkApplication#location}

---

##### `Serviceinstance`<sup>Required</sup> <a name="Serviceinstance" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.serviceinstance"></a>

```go
Serviceinstance *string
```

- *Type:* *string

The id of the service instance to which this spark application belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#serviceinstance GoogleDataprocGdcSparkApplication#serviceinstance}

---

##### `SparkApplicationId`<sup>Required</sup> <a name="SparkApplicationId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.sparkApplicationId"></a>

```go
SparkApplicationId *string
```

- *Type:* *string

The id of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#spark_application_id GoogleDataprocGdcSparkApplication#spark_application_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

The annotations to associate with this application.

Annotations may be used to store client information, but are not used by the server.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#annotations GoogleDataprocGdcSparkApplication#annotations}

---

##### `ApplicationEnvironment`<sup>Optional</sup> <a name="ApplicationEnvironment" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.applicationEnvironment"></a>

```go
ApplicationEnvironment *string
```

- *Type:* *string

An ApplicationEnvironment from which to inherit configuration properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#application_environment GoogleDataprocGdcSparkApplication#application_environment}

---

##### `DependencyImages`<sup>Optional</sup> <a name="DependencyImages" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.dependencyImages"></a>

```go
DependencyImages *[]*string
```

- *Type:* *[]*string

List of container image uris for additional file dependencies.

Dependent files are sequentially copied from each image. If a file with the same name exists in 2 images then the file from later image is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#dependency_images GoogleDataprocGdcSparkApplication#dependency_images}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#display_name GoogleDataprocGdcSparkApplication#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#id GoogleDataprocGdcSparkApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels to associate with this application. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#labels GoogleDataprocGdcSparkApplication#labels}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The Kubernetes namespace in which to create the application. This namespace must already exist on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#namespace GoogleDataprocGdcSparkApplication#namespace}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#project GoogleDataprocGdcSparkApplication#project}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

application-specific properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#properties GoogleDataprocGdcSparkApplication#properties}

---

##### `PysparkApplicationConfig`<sup>Optional</sup> <a name="PysparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.pysparkApplicationConfig"></a>

```go
PysparkApplicationConfig GoogleDataprocGdcSparkApplicationPysparkApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig">GoogleDataprocGdcSparkApplicationPysparkApplicationConfig</a>

pyspark_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#pyspark_application_config GoogleDataprocGdcSparkApplication#pyspark_application_config}

---

##### `SparkApplicationConfig`<sup>Optional</sup> <a name="SparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.sparkApplicationConfig"></a>

```go
SparkApplicationConfig GoogleDataprocGdcSparkApplicationSparkApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig">GoogleDataprocGdcSparkApplicationSparkApplicationConfig</a>

spark_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#spark_application_config GoogleDataprocGdcSparkApplication#spark_application_config}

---

##### `SparkRApplicationConfig`<sup>Optional</sup> <a name="SparkRApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.sparkRApplicationConfig"></a>

```go
SparkRApplicationConfig GoogleDataprocGdcSparkApplicationSparkRApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig">GoogleDataprocGdcSparkApplicationSparkRApplicationConfig</a>

spark_r_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#spark_r_application_config GoogleDataprocGdcSparkApplication#spark_r_application_config}

---

##### `SparkSqlApplicationConfig`<sup>Optional</sup> <a name="SparkSqlApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.sparkSqlApplicationConfig"></a>

```go
SparkSqlApplicationConfig GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig</a>

spark_sql_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#spark_sql_application_config GoogleDataprocGdcSparkApplication#spark_sql_application_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.timeouts"></a>

```go
Timeouts GoogleDataprocGdcSparkApplicationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts">GoogleDataprocGdcSparkApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#timeouts GoogleDataprocGdcSparkApplication#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

The Dataproc version of this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#version GoogleDataprocGdcSparkApplication#version}

---

### GoogleDataprocGdcSparkApplicationPysparkApplicationConfig <a name="GoogleDataprocGdcSparkApplicationPysparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledataprocgdcsparkapplication"

&googledataprocgdcsparkapplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig {
	MainPythonFileUri: *string,
	ArchiveUris: *[]*string,
	Args: *[]*string,
	FileUris: *[]*string,
	JarFileUris: *[]*string,
	PythonFileUris: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.mainPythonFileUri">MainPythonFileUri</a></code> | <code>*string</code> | The HCFS URI of the main Python file to use as the driver. Must be a .py file. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.args">Args</a></code> | <code>*[]*string</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.pythonFileUris">PythonFileUris</a></code> | <code>*[]*string</code> | HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip. |

---

##### `MainPythonFileUri`<sup>Required</sup> <a name="MainPythonFileUri" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.mainPythonFileUri"></a>

```go
MainPythonFileUri *string
```

- *Type:* *string

The HCFS URI of the main Python file to use as the driver. Must be a .py file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#main_python_file_uri GoogleDataprocGdcSparkApplication#main_python_file_uri}

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.archiveUris"></a>

```go
ArchiveUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#archive_uris GoogleDataprocGdcSparkApplication#archive_uris}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

The arguments to pass to the driver.

Do not include arguments, such as '--conf', that can be set as job properties, since a collision may occur that causes an incorrect job submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#args GoogleDataprocGdcSparkApplication#args}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.fileUris"></a>

```go
FileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#file_uris GoogleDataprocGdcSparkApplication#file_uris}

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.jarFileUris"></a>

```go
JarFileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#jar_file_uris GoogleDataprocGdcSparkApplication#jar_file_uris}

---

##### `PythonFileUris`<sup>Optional</sup> <a name="PythonFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.pythonFileUris"></a>

```go
PythonFileUris *[]*string
```

- *Type:* *[]*string

HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#python_file_uris GoogleDataprocGdcSparkApplication#python_file_uris}

---

### GoogleDataprocGdcSparkApplicationSparkApplicationConfig <a name="GoogleDataprocGdcSparkApplicationSparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledataprocgdcsparkapplication"

&googledataprocgdcsparkapplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig {
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
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.args">Args</a></code> | <code>*[]*string</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.mainClass">MainClass</a></code> | <code>*string</code> | The name of the driver main class. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.mainJarFileUri">MainJarFileUri</a></code> | <code>*string</code> | The HCFS URI of the jar file that contains the main class. |

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.archiveUris"></a>

```go
ArchiveUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: '.jar', '.tar', '.tar.gz', '.tgz', and '.zip'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#archive_uris GoogleDataprocGdcSparkApplication#archive_uris}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

The arguments to pass to the driver.

Do not include arguments that can be set as application properties, such as '--conf', since a collision can occur that causes an incorrect application submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#args GoogleDataprocGdcSparkApplication#args}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.fileUris"></a>

```go
FileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#file_uris GoogleDataprocGdcSparkApplication#file_uris}

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.jarFileUris"></a>

```go
JarFileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#jar_file_uris GoogleDataprocGdcSparkApplication#jar_file_uris}

---

##### `MainClass`<sup>Optional</sup> <a name="MainClass" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.mainClass"></a>

```go
MainClass *string
```

- *Type:* *string

The name of the driver main class.

The jar file that contains the class must be in the classpath or specified in 'jar_file_uris'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#main_class GoogleDataprocGdcSparkApplication#main_class}

---

##### `MainJarFileUri`<sup>Optional</sup> <a name="MainJarFileUri" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.mainJarFileUri"></a>

```go
MainJarFileUri *string
```

- *Type:* *string

The HCFS URI of the jar file that contains the main class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#main_jar_file_uri GoogleDataprocGdcSparkApplication#main_jar_file_uri}

---

### GoogleDataprocGdcSparkApplicationSparkRApplicationConfig <a name="GoogleDataprocGdcSparkApplicationSparkRApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledataprocgdcsparkapplication"

&googledataprocgdcsparkapplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig {
	MainRFileUri: *string,
	ArchiveUris: *[]*string,
	Args: *[]*string,
	FileUris: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig.property.mainRFileUri">MainRFileUri</a></code> | <code>*string</code> | The HCFS URI of the main R file to use as the driver. Must be a .R file. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig.property.args">Args</a></code> | <code>*[]*string</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks. |

---

##### `MainRFileUri`<sup>Required</sup> <a name="MainRFileUri" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig.property.mainRFileUri"></a>

```go
MainRFileUri *string
```

- *Type:* *string

The HCFS URI of the main R file to use as the driver. Must be a .R file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#main_r_file_uri GoogleDataprocGdcSparkApplication#main_r_file_uri}

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig.property.archiveUris"></a>

```go
ArchiveUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#archive_uris GoogleDataprocGdcSparkApplication#archive_uris}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

The arguments to pass to the driver.

Do not include arguments, such as '--conf', that can be set as job properties, since a collision may occur that causes an incorrect job submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#args GoogleDataprocGdcSparkApplication#args}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig.property.fileUris"></a>

```go
FileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#file_uris GoogleDataprocGdcSparkApplication#file_uris}

---

### GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig <a name="GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledataprocgdcsparkapplication"

&googledataprocgdcsparkapplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig {
	JarFileUris: *[]*string,
	QueryFileUri: *string,
	QueryList: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct,
	ScriptVariables: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | HCFS URIs of jar files to be added to the Spark CLASSPATH. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig.property.queryFileUri">QueryFileUri</a></code> | <code>*string</code> | The HCFS URI of the script that contains SQL queries. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig.property.queryList">QueryList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a></code> | query_list block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig.property.scriptVariables">ScriptVariables</a></code> | <code>*map[string]*string</code> | Mapping of query variable names to values (equivalent to the Spark SQL command: SET 'name="value";'). |

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig.property.jarFileUris"></a>

```go
JarFileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of jar files to be added to the Spark CLASSPATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#jar_file_uris GoogleDataprocGdcSparkApplication#jar_file_uris}

---

##### `QueryFileUri`<sup>Optional</sup> <a name="QueryFileUri" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig.property.queryFileUri"></a>

```go
QueryFileUri *string
```

- *Type:* *string

The HCFS URI of the script that contains SQL queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#query_file_uri GoogleDataprocGdcSparkApplication#query_file_uri}

---

##### `QueryList`<sup>Optional</sup> <a name="QueryList" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig.property.queryList"></a>

```go
QueryList GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a>

query_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#query_list GoogleDataprocGdcSparkApplication#query_list}

---

##### `ScriptVariables`<sup>Optional</sup> <a name="ScriptVariables" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig.property.scriptVariables"></a>

```go
ScriptVariables *map[string]*string
```

- *Type:* *map[string]*string

Mapping of query variable names to values (equivalent to the Spark SQL command: SET 'name="value";').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#script_variables GoogleDataprocGdcSparkApplication#script_variables}

---

### GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct <a name="GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledataprocgdcsparkapplication"

&googledataprocgdcsparkapplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct {
	Queries: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct.property.queries">Queries</a></code> | <code>*[]*string</code> | The queries to run. |

---

##### `Queries`<sup>Required</sup> <a name="Queries" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct.property.queries"></a>

```go
Queries *[]*string
```

- *Type:* *[]*string

The queries to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#queries GoogleDataprocGdcSparkApplication#queries}

---

### GoogleDataprocGdcSparkApplicationTimeouts <a name="GoogleDataprocGdcSparkApplicationTimeouts" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledataprocgdcsparkapplication"

&googledataprocgdcsparkapplication.GoogleDataprocGdcSparkApplicationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#create GoogleDataprocGdcSparkApplication#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#delete GoogleDataprocGdcSparkApplication#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#update GoogleDataprocGdcSparkApplication#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#create GoogleDataprocGdcSparkApplication#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#delete GoogleDataprocGdcSparkApplication#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_spark_application#update GoogleDataprocGdcSparkApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference <a name="GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledataprocgdcsparkapplication"

googledataprocgdcsparkapplication.NewGoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetPythonFileUris">ResetPythonFileUris</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetArchiveUris"></a>

```go
func ResetArchiveUris()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetFileUris"></a>

```go
func ResetFileUris()
```

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetJarFileUris"></a>

```go
func ResetJarFileUris()
```

##### `ResetPythonFileUris` <a name="ResetPythonFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetPythonFileUris"></a>

```go
func ResetPythonFileUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.mainPythonFileUriInput">MainPythonFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.pythonFileUrisInput">PythonFileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.mainPythonFileUri">MainPythonFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.pythonFileUris">PythonFileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig">GoogleDataprocGdcSparkApplicationPysparkApplicationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.archiveUrisInput"></a>

```go
func ArchiveUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fileUrisInput"></a>

```go
func FileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.jarFileUrisInput"></a>

```go
func JarFileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `MainPythonFileUriInput`<sup>Optional</sup> <a name="MainPythonFileUriInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.mainPythonFileUriInput"></a>

```go
func MainPythonFileUriInput() *string
```

- *Type:* *string

---

##### `PythonFileUrisInput`<sup>Optional</sup> <a name="PythonFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.pythonFileUrisInput"></a>

```go
func PythonFileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.archiveUris"></a>

```go
func ArchiveUris() *[]*string
```

- *Type:* *[]*string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fileUris"></a>

```go
func FileUris() *[]*string
```

- *Type:* *[]*string

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.jarFileUris"></a>

```go
func JarFileUris() *[]*string
```

- *Type:* *[]*string

---

##### `MainPythonFileUri`<sup>Required</sup> <a name="MainPythonFileUri" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.mainPythonFileUri"></a>

```go
func MainPythonFileUri() *string
```

- *Type:* *string

---

##### `PythonFileUris`<sup>Required</sup> <a name="PythonFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.pythonFileUris"></a>

```go
func PythonFileUris() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocGdcSparkApplicationPysparkApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig">GoogleDataprocGdcSparkApplicationPysparkApplicationConfig</a>

---


### GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference <a name="GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledataprocgdcsparkapplication"

googledataprocgdcsparkapplication.NewGoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetMainClass">ResetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetMainJarFileUri">ResetMainJarFileUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetArchiveUris"></a>

```go
func ResetArchiveUris()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetFileUris"></a>

```go
func ResetFileUris()
```

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetJarFileUris"></a>

```go
func ResetJarFileUris()
```

##### `ResetMainClass` <a name="ResetMainClass" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetMainClass"></a>

```go
func ResetMainClass()
```

##### `ResetMainJarFileUri` <a name="ResetMainJarFileUri" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetMainJarFileUri"></a>

```go
func ResetMainJarFileUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainClassInput">MainClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainJarFileUriInput">MainJarFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainClass">MainClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainJarFileUri">MainJarFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig">GoogleDataprocGdcSparkApplicationSparkApplicationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.archiveUrisInput"></a>

```go
func ArchiveUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fileUrisInput"></a>

```go
func FileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.jarFileUrisInput"></a>

```go
func JarFileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `MainClassInput`<sup>Optional</sup> <a name="MainClassInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainClassInput"></a>

```go
func MainClassInput() *string
```

- *Type:* *string

---

##### `MainJarFileUriInput`<sup>Optional</sup> <a name="MainJarFileUriInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainJarFileUriInput"></a>

```go
func MainJarFileUriInput() *string
```

- *Type:* *string

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.archiveUris"></a>

```go
func ArchiveUris() *[]*string
```

- *Type:* *[]*string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fileUris"></a>

```go
func FileUris() *[]*string
```

- *Type:* *[]*string

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.jarFileUris"></a>

```go
func JarFileUris() *[]*string
```

- *Type:* *[]*string

---

##### `MainClass`<sup>Required</sup> <a name="MainClass" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainClass"></a>

```go
func MainClass() *string
```

- *Type:* *string

---

##### `MainJarFileUri`<sup>Required</sup> <a name="MainJarFileUri" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainJarFileUri"></a>

```go
func MainJarFileUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocGdcSparkApplicationSparkApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig">GoogleDataprocGdcSparkApplicationSparkApplicationConfig</a>

---


### GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference <a name="GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledataprocgdcsparkapplication"

googledataprocgdcsparkapplication.NewGoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetArchiveUris"></a>

```go
func ResetArchiveUris()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetFileUris"></a>

```go
func ResetFileUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.mainRFileUriInput">MainRFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.mainRFileUri">MainRFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig">GoogleDataprocGdcSparkApplicationSparkRApplicationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.archiveUrisInput"></a>

```go
func ArchiveUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fileUrisInput"></a>

```go
func FileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `MainRFileUriInput`<sup>Optional</sup> <a name="MainRFileUriInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.mainRFileUriInput"></a>

```go
func MainRFileUriInput() *string
```

- *Type:* *string

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.archiveUris"></a>

```go
func ArchiveUris() *[]*string
```

- *Type:* *[]*string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fileUris"></a>

```go
func FileUris() *[]*string
```

- *Type:* *[]*string

---

##### `MainRFileUri`<sup>Required</sup> <a name="MainRFileUri" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.mainRFileUri"></a>

```go
func MainRFileUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocGdcSparkApplicationSparkRApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig">GoogleDataprocGdcSparkApplicationSparkRApplicationConfig</a>

---


### GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference <a name="GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledataprocgdcsparkapplication"

googledataprocgdcsparkapplication.NewGoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.putQueryList">PutQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetQueryFileUri">ResetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetQueryList">ResetQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetScriptVariables">ResetScriptVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutQueryList` <a name="PutQueryList" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.putQueryList"></a>

```go
func PutQueryList(value GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.putQueryList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a>

---

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetJarFileUris"></a>

```go
func ResetJarFileUris()
```

##### `ResetQueryFileUri` <a name="ResetQueryFileUri" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetQueryFileUri"></a>

```go
func ResetQueryFileUri()
```

##### `ResetQueryList` <a name="ResetQueryList" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetQueryList"></a>

```go
func ResetQueryList()
```

##### `ResetScriptVariables` <a name="ResetScriptVariables" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetScriptVariables"></a>

```go
func ResetScriptVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryList">QueryList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryFileUriInput">QueryFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryListInput">QueryListInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.scriptVariablesInput">ScriptVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryFileUri">QueryFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.scriptVariables">ScriptVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueryList`<sup>Required</sup> <a name="QueryList" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryList"></a>

```go
func QueryList() GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference</a>

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.jarFileUrisInput"></a>

```go
func JarFileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryFileUriInput`<sup>Optional</sup> <a name="QueryFileUriInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryFileUriInput"></a>

```go
func QueryFileUriInput() *string
```

- *Type:* *string

---

##### `QueryListInput`<sup>Optional</sup> <a name="QueryListInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryListInput"></a>

```go
func QueryListInput() GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a>

---

##### `ScriptVariablesInput`<sup>Optional</sup> <a name="ScriptVariablesInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.scriptVariablesInput"></a>

```go
func ScriptVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.jarFileUris"></a>

```go
func JarFileUris() *[]*string
```

- *Type:* *[]*string

---

##### `QueryFileUri`<sup>Required</sup> <a name="QueryFileUri" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryFileUri"></a>

```go
func QueryFileUri() *string
```

- *Type:* *string

---

##### `ScriptVariables`<sup>Required</sup> <a name="ScriptVariables" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.scriptVariables"></a>

```go
func ScriptVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig</a>

---


### GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference <a name="GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledataprocgdcsparkapplication"

googledataprocgdcsparkapplication.NewGoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.queriesInput">QueriesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.queries">Queries</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueriesInput`<sup>Optional</sup> <a name="QueriesInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.queriesInput"></a>

```go
func QueriesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Queries`<sup>Required</sup> <a name="Queries" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.queries"></a>

```go
func Queries() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a>

---


### GoogleDataprocGdcSparkApplicationTimeoutsOutputReference <a name="GoogleDataprocGdcSparkApplicationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledataprocgdcsparkapplication"

googledataprocgdcsparkapplication.NewGoogleDataprocGdcSparkApplicationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocGdcSparkApplicationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



