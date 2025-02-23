# `googleDataprocGdcApplicationEnvironment` Submodule <a name="`googleDataprocGdcApplicationEnvironment` Submodule" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocGdcApplicationEnvironment <a name="GoogleDataprocGdcApplicationEnvironment" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment google_dataproc_gdc_application_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocgdcapplicationenvironment"

googledataprocgdcapplicationenvironment.NewGoogleDataprocGdcApplicationEnvironment(scope Construct, id *string, config GoogleDataprocGdcApplicationEnvironmentConfig) GoogleDataprocGdcApplicationEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putSparkApplicationEnvironmentConfig">PutSparkApplicationEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetApplicationEnvironmentId">ResetApplicationEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetSparkApplicationEnvironmentConfig">ResetSparkApplicationEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSparkApplicationEnvironmentConfig` <a name="PutSparkApplicationEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putSparkApplicationEnvironmentConfig"></a>

```go
func PutSparkApplicationEnvironmentConfig(value GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putSparkApplicationEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDataprocGdcApplicationEnvironmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetApplicationEnvironmentId` <a name="ResetApplicationEnvironmentId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetApplicationEnvironmentId"></a>

```go
func ResetApplicationEnvironmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSparkApplicationEnvironmentConfig` <a name="ResetSparkApplicationEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetSparkApplicationEnvironmentConfig"></a>

```go
func ResetSparkApplicationEnvironmentConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataprocGdcApplicationEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocgdcapplicationenvironment"

googledataprocgdcapplicationenvironment.GoogleDataprocGdcApplicationEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocgdcapplicationenvironment"

googledataprocgdcapplicationenvironment.GoogleDataprocGdcApplicationEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocgdcapplicationenvironment"

googledataprocgdcapplicationenvironment.GoogleDataprocGdcApplicationEnvironment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocgdcapplicationenvironment"

googledataprocgdcapplicationenvironment.GoogleDataprocGdcApplicationEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleDataprocGdcApplicationEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDataprocGdcApplicationEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDataprocGdcApplicationEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocGdcApplicationEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfig">SparkApplicationEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference">GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.applicationEnvironmentIdInput">ApplicationEnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.serviceinstanceInput">ServiceinstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfigInput">SparkApplicationEnvironmentConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.applicationEnvironmentId">ApplicationEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.serviceinstance">Serviceinstance</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SparkApplicationEnvironmentConfig`<sup>Required</sup> <a name="SparkApplicationEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfig"></a>

```go
func SparkApplicationEnvironmentConfig() GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.timeouts"></a>

```go
func Timeouts() GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference">GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ApplicationEnvironmentIdInput`<sup>Optional</sup> <a name="ApplicationEnvironmentIdInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.applicationEnvironmentIdInput"></a>

```go
func ApplicationEnvironmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceinstanceInput`<sup>Optional</sup> <a name="ServiceinstanceInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.serviceinstanceInput"></a>

```go
func ServiceinstanceInput() *string
```

- *Type:* *string

---

##### `SparkApplicationEnvironmentConfigInput`<sup>Optional</sup> <a name="SparkApplicationEnvironmentConfigInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfigInput"></a>

```go
func SparkApplicationEnvironmentConfigInput() GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ApplicationEnvironmentId`<sup>Required</sup> <a name="ApplicationEnvironmentId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.applicationEnvironmentId"></a>

```go
func ApplicationEnvironmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Serviceinstance`<sup>Required</sup> <a name="Serviceinstance" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.serviceinstance"></a>

```go
func Serviceinstance() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocGdcApplicationEnvironmentConfig <a name="GoogleDataprocGdcApplicationEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocgdcapplicationenvironment"

&googledataprocgdcapplicationenvironment.GoogleDataprocGdcApplicationEnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Serviceinstance: *string,
	Annotations: *map[string]*string,
	ApplicationEnvironmentId: *string,
	DisplayName: *string,
	Id: *string,
	Labels: *map[string]*string,
	Namespace: *string,
	Project: *string,
	SparkApplicationEnvironmentConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.location">Location</a></code> | <code>*string</code> | The location of the application environment. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.serviceinstance">Serviceinstance</a></code> | <code>*string</code> | The id of the service instance to which this application environment belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | The annotations to associate with this application environment. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.applicationEnvironmentId">ApplicationEnvironmentId</a></code> | <code>*string</code> | The id of the application environment. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment#id GoogleDataprocGdcApplicationEnvironment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels to associate with this application environment. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.namespace">Namespace</a></code> | <code>*string</code> | The name of the namespace in which to create this ApplicationEnvironment. This namespace must already exist in the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment#project GoogleDataprocGdcApplicationEnvironment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.sparkApplicationEnvironmentConfig">SparkApplicationEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | spark_application_environment_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment#location GoogleDataprocGdcApplicationEnvironment#location}

---

##### `Serviceinstance`<sup>Required</sup> <a name="Serviceinstance" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.serviceinstance"></a>

```go
Serviceinstance *string
```

- *Type:* *string

The id of the service instance to which this application environment belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment#serviceinstance GoogleDataprocGdcApplicationEnvironment#serviceinstance}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

The annotations to associate with this application environment.

Annotations may be used to store client information, but are not used by the server.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment#annotations GoogleDataprocGdcApplicationEnvironment#annotations}

---

##### `ApplicationEnvironmentId`<sup>Optional</sup> <a name="ApplicationEnvironmentId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.applicationEnvironmentId"></a>

```go
ApplicationEnvironmentId *string
```

- *Type:* *string

The id of the application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment#application_environment_id GoogleDataprocGdcApplicationEnvironment#application_environment_id}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment#display_name GoogleDataprocGdcApplicationEnvironment#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment#id GoogleDataprocGdcApplicationEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels to associate with this application environment. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment#labels GoogleDataprocGdcApplicationEnvironment#labels}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The name of the namespace in which to create this ApplicationEnvironment. This namespace must already exist in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment#namespace GoogleDataprocGdcApplicationEnvironment#namespace}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment#project GoogleDataprocGdcApplicationEnvironment#project}.

---

##### `SparkApplicationEnvironmentConfig`<sup>Optional</sup> <a name="SparkApplicationEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.sparkApplicationEnvironmentConfig"></a>

```go
SparkApplicationEnvironmentConfig GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

spark_application_environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment#spark_application_environment_config GoogleDataprocGdcApplicationEnvironment#spark_application_environment_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.timeouts"></a>

```go
Timeouts GoogleDataprocGdcApplicationEnvironmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment#timeouts GoogleDataprocGdcApplicationEnvironment#timeouts}

---

### GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig <a name="GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocgdcapplicationenvironment"

&googledataprocgdcapplicationenvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig {
	DefaultProperties: *map[string]*string,
	DefaultVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultProperties">DefaultProperties</a></code> | <code>*map[string]*string</code> | A map of default Spark properties to apply to workloads in this application environment. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultVersion">DefaultVersion</a></code> | <code>*string</code> | The default Dataproc version to use for applications submitted to this application environment. |

---

##### `DefaultProperties`<sup>Optional</sup> <a name="DefaultProperties" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultProperties"></a>

```go
DefaultProperties *map[string]*string
```

- *Type:* *map[string]*string

A map of default Spark properties to apply to workloads in this application environment.

These defaults may be overridden by per-application properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment#default_properties GoogleDataprocGdcApplicationEnvironment#default_properties}

---

##### `DefaultVersion`<sup>Optional</sup> <a name="DefaultVersion" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultVersion"></a>

```go
DefaultVersion *string
```

- *Type:* *string

The default Dataproc version to use for applications submitted to this application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment#default_version GoogleDataprocGdcApplicationEnvironment#default_version}

---

### GoogleDataprocGdcApplicationEnvironmentTimeouts <a name="GoogleDataprocGdcApplicationEnvironmentTimeouts" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocgdcapplicationenvironment"

&googledataprocgdcapplicationenvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment#create GoogleDataprocGdcApplicationEnvironment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment#delete GoogleDataprocGdcApplicationEnvironment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment#update GoogleDataprocGdcApplicationEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment#create GoogleDataprocGdcApplicationEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment#delete GoogleDataprocGdcApplicationEnvironment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_application_environment#update GoogleDataprocGdcApplicationEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference <a name="GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocgdcapplicationenvironment"

googledataprocgdcapplicationenvironment.NewGoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultProperties">ResetDefaultProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultVersion">ResetDefaultVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultProperties` <a name="ResetDefaultProperties" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultProperties"></a>

```go
func ResetDefaultProperties()
```

##### `ResetDefaultVersion` <a name="ResetDefaultVersion" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultVersion"></a>

```go
func ResetDefaultVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultPropertiesInput">DefaultPropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersionInput">DefaultVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultProperties">DefaultProperties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersion">DefaultVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultPropertiesInput`<sup>Optional</sup> <a name="DefaultPropertiesInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultPropertiesInput"></a>

```go
func DefaultPropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefaultVersionInput`<sup>Optional</sup> <a name="DefaultVersionInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersionInput"></a>

```go
func DefaultVersionInput() *string
```

- *Type:* *string

---

##### `DefaultProperties`<sup>Required</sup> <a name="DefaultProperties" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultProperties"></a>

```go
func DefaultProperties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefaultVersion`<sup>Required</sup> <a name="DefaultVersion" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersion"></a>

```go
func DefaultVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

---


### GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference <a name="GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocgdcapplicationenvironment"

googledataprocgdcapplicationenvironment.NewGoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



