# `googleDataprocGdcServiceInstance` Submodule <a name="`googleDataprocGdcServiceInstance` Submodule" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocGdcServiceInstance <a name="GoogleDataprocGdcServiceInstance" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_gdc_service_instance google_dataproc_gdc_service_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocgdcserviceinstance"

googledataprocgdcserviceinstance.NewGoogleDataprocGdcServiceInstance(scope Construct, id *string, config GoogleDataprocGdcServiceInstanceConfig) GoogleDataprocGdcServiceInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig">GoogleDataprocGdcServiceInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig">GoogleDataprocGdcServiceInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putGdceCluster">PutGdceCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putSparkServiceInstanceConfig">PutSparkServiceInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetGdceCluster">ResetGdceCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetSparkServiceInstanceConfig">ResetSparkServiceInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGdceCluster` <a name="PutGdceCluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putGdceCluster"></a>

```go
func PutGdceCluster(value GoogleDataprocGdcServiceInstanceGdceCluster)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putGdceCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a>

---

##### `PutSparkServiceInstanceConfig` <a name="PutSparkServiceInstanceConfig" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putSparkServiceInstanceConfig"></a>

```go
func PutSparkServiceInstanceConfig(value GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putSparkServiceInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDataprocGdcServiceInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetGdceCluster` <a name="ResetGdceCluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetGdceCluster"></a>

```go
func ResetGdceCluster()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetProject"></a>

```go
func ResetProject()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetSparkServiceInstanceConfig` <a name="ResetSparkServiceInstanceConfig" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetSparkServiceInstanceConfig"></a>

```go
func ResetSparkServiceInstanceConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataprocGdcServiceInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocgdcserviceinstance"

googledataprocgdcserviceinstance.GoogleDataprocGdcServiceInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocgdcserviceinstance"

googledataprocgdcserviceinstance.GoogleDataprocGdcServiceInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocgdcserviceinstance"

googledataprocgdcserviceinstance.GoogleDataprocGdcServiceInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocgdcserviceinstance"

googledataprocgdcserviceinstance.GoogleDataprocGdcServiceInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleDataprocGdcServiceInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDataprocGdcServiceInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDataprocGdcServiceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_gdc_service_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocGdcServiceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.effectiveServiceAccount">EffectiveServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.gdceCluster">GdceCluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference">GoogleDataprocGdcServiceInstanceGdceClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.requestedState">RequestedState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.sparkServiceInstanceConfig">SparkServiceInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference">GoogleDataprocGdcServiceInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.gdceClusterInput">GdceClusterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceInstanceIdInput">ServiceInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.sparkServiceInstanceConfigInput">SparkServiceInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceInstanceId">ServiceInstanceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveServiceAccount`<sup>Required</sup> <a name="EffectiveServiceAccount" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.effectiveServiceAccount"></a>

```go
func EffectiveServiceAccount() *string
```

- *Type:* *string

---

##### `GdceCluster`<sup>Required</sup> <a name="GdceCluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.gdceCluster"></a>

```go
func GdceCluster() GoogleDataprocGdcServiceInstanceGdceClusterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference">GoogleDataprocGdcServiceInstanceGdceClusterOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RequestedState`<sup>Required</sup> <a name="RequestedState" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.requestedState"></a>

```go
func RequestedState() *string
```

- *Type:* *string

---

##### `SparkServiceInstanceConfig`<sup>Required</sup> <a name="SparkServiceInstanceConfig" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.sparkServiceInstanceConfig"></a>

```go
func SparkServiceInstanceConfig() GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.timeouts"></a>

```go
func Timeouts() GoogleDataprocGdcServiceInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference">GoogleDataprocGdcServiceInstanceTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `GdceClusterInput`<sup>Optional</sup> <a name="GdceClusterInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.gdceClusterInput"></a>

```go
func GdceClusterInput() GoogleDataprocGdcServiceInstanceGdceCluster
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `ServiceInstanceIdInput`<sup>Optional</sup> <a name="ServiceInstanceIdInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceInstanceIdInput"></a>

```go
func ServiceInstanceIdInput() *string
```

- *Type:* *string

---

##### `SparkServiceInstanceConfigInput`<sup>Optional</sup> <a name="SparkServiceInstanceConfigInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.sparkServiceInstanceConfigInput"></a>

```go
func SparkServiceInstanceConfigInput() GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `ServiceInstanceId`<sup>Required</sup> <a name="ServiceInstanceId" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceInstanceId"></a>

```go
func ServiceInstanceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocGdcServiceInstanceConfig <a name="GoogleDataprocGdcServiceInstanceConfig" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocgdcserviceinstance"

&googledataprocgdcserviceinstance.GoogleDataprocGdcServiceInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	ServiceInstanceId: *string,
	DisplayName: *string,
	GdceCluster: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	ServiceAccount: *string,
	SparkServiceInstanceConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.location">Location</a></code> | <code>*string</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.serviceInstanceId">ServiceInstanceId</a></code> | <code>*string</code> | Id of the service instance. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.gdceCluster">GdceCluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a></code> | gdce_cluster block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_gdc_service_instance#id GoogleDataprocGdcServiceInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels to associate with this service instance. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_gdc_service_instance#project GoogleDataprocGdcServiceInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Requested service account to associate with ServiceInstance. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.sparkServiceInstanceConfig">SparkServiceInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | spark_service_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_gdc_service_instance#location GoogleDataprocGdcServiceInstance#location}

---

##### `ServiceInstanceId`<sup>Required</sup> <a name="ServiceInstanceId" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.serviceInstanceId"></a>

```go
ServiceInstanceId *string
```

- *Type:* *string

Id of the service instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_gdc_service_instance#service_instance_id GoogleDataprocGdcServiceInstance#service_instance_id}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_gdc_service_instance#display_name GoogleDataprocGdcServiceInstance#display_name}

---

##### `GdceCluster`<sup>Optional</sup> <a name="GdceCluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.gdceCluster"></a>

```go
GdceCluster GoogleDataprocGdcServiceInstanceGdceCluster
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a>

gdce_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_gdc_service_instance#gdce_cluster GoogleDataprocGdcServiceInstance#gdce_cluster}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_gdc_service_instance#id GoogleDataprocGdcServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels to associate with this service instance. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_gdc_service_instance#labels GoogleDataprocGdcServiceInstance#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_gdc_service_instance#project GoogleDataprocGdcServiceInstance#project}.

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Requested service account to associate with ServiceInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_gdc_service_instance#service_account GoogleDataprocGdcServiceInstance#service_account}

---

##### `SparkServiceInstanceConfig`<sup>Optional</sup> <a name="SparkServiceInstanceConfig" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.sparkServiceInstanceConfig"></a>

```go
SparkServiceInstanceConfig GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

spark_service_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_gdc_service_instance#spark_service_instance_config GoogleDataprocGdcServiceInstance#spark_service_instance_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.timeouts"></a>

```go
Timeouts GoogleDataprocGdcServiceInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_gdc_service_instance#timeouts GoogleDataprocGdcServiceInstance#timeouts}

---

### GoogleDataprocGdcServiceInstanceGdceCluster <a name="GoogleDataprocGdcServiceInstanceGdceCluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocgdcserviceinstance"

&googledataprocgdcserviceinstance.GoogleDataprocGdcServiceInstanceGdceCluster {
	GdceCluster: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster.property.gdceCluster">GdceCluster</a></code> | <code>*string</code> | Gdce cluster resource id. |

---

##### `GdceCluster`<sup>Required</sup> <a name="GdceCluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster.property.gdceCluster"></a>

```go
GdceCluster *string
```

- *Type:* *string

Gdce cluster resource id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_gdc_service_instance#gdce_cluster GoogleDataprocGdcServiceInstance#gdce_cluster}

---

### GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig <a name="GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocgdcserviceinstance"

&googledataprocgdcserviceinstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig {

}
```


### GoogleDataprocGdcServiceInstanceTimeouts <a name="GoogleDataprocGdcServiceInstanceTimeouts" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocgdcserviceinstance"

&googledataprocgdcserviceinstance.GoogleDataprocGdcServiceInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_gdc_service_instance#create GoogleDataprocGdcServiceInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_gdc_service_instance#delete GoogleDataprocGdcServiceInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_gdc_service_instance#update GoogleDataprocGdcServiceInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_gdc_service_instance#create GoogleDataprocGdcServiceInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_gdc_service_instance#delete GoogleDataprocGdcServiceInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_gdc_service_instance#update GoogleDataprocGdcServiceInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocGdcServiceInstanceGdceClusterOutputReference <a name="GoogleDataprocGdcServiceInstanceGdceClusterOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocgdcserviceinstance"

googledataprocgdcserviceinstance.NewGoogleDataprocGdcServiceInstanceGdceClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocGdcServiceInstanceGdceClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceClusterInput">GdceClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceCluster">GdceCluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GdceClusterInput`<sup>Optional</sup> <a name="GdceClusterInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceClusterInput"></a>

```go
func GdceClusterInput() *string
```

- *Type:* *string

---

##### `GdceCluster`<sup>Required</sup> <a name="GdceCluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceCluster"></a>

```go
func GdceCluster() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocGdcServiceInstanceGdceCluster
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a>

---


### GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference <a name="GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocgdcserviceinstance"

googledataprocgdcserviceinstance.NewGoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

---


### GoogleDataprocGdcServiceInstanceTimeoutsOutputReference <a name="GoogleDataprocGdcServiceInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocgdcserviceinstance"

googledataprocgdcserviceinstance.NewGoogleDataprocGdcServiceInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocGdcServiceInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



