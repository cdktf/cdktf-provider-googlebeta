# `googleVmwareengineNetworkPeering` Submodule <a name="`googleVmwareengineNetworkPeering` Submodule" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVmwareengineNetworkPeering <a name="GoogleVmwareengineNetworkPeering" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering google_vmwareengine_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevmwareenginenetworkpeering"

googlevmwareenginenetworkpeering.NewGoogleVmwareengineNetworkPeering(scope Construct, id *string, config GoogleVmwareengineNetworkPeeringConfig) GoogleVmwareengineNetworkPeering
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig">GoogleVmwareengineNetworkPeeringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig">GoogleVmwareengineNetworkPeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetExportCustomRoutes">ResetExportCustomRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetExportCustomRoutesWithPublicIp">ResetExportCustomRoutesWithPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetImportCustomRoutes">ResetImportCustomRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetImportCustomRoutesWithPublicIp">ResetImportCustomRoutesWithPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.putTimeouts"></a>

```go
func PutTimeouts(value GoogleVmwareengineNetworkPeeringTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts">GoogleVmwareengineNetworkPeeringTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExportCustomRoutes` <a name="ResetExportCustomRoutes" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetExportCustomRoutes"></a>

```go
func ResetExportCustomRoutes()
```

##### `ResetExportCustomRoutesWithPublicIp` <a name="ResetExportCustomRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetExportCustomRoutesWithPublicIp"></a>

```go
func ResetExportCustomRoutesWithPublicIp()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetId"></a>

```go
func ResetId()
```

##### `ResetImportCustomRoutes` <a name="ResetImportCustomRoutes" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetImportCustomRoutes"></a>

```go
func ResetImportCustomRoutes()
```

##### `ResetImportCustomRoutesWithPublicIp` <a name="ResetImportCustomRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetImportCustomRoutesWithPublicIp"></a>

```go
func ResetImportCustomRoutesWithPublicIp()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVmwareengineNetworkPeering resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevmwareenginenetworkpeering"

googlevmwareenginenetworkpeering.GoogleVmwareengineNetworkPeering_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevmwareenginenetworkpeering"

googlevmwareenginenetworkpeering.GoogleVmwareengineNetworkPeering_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevmwareenginenetworkpeering"

googlevmwareenginenetworkpeering.GoogleVmwareengineNetworkPeering_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevmwareenginenetworkpeering"

googlevmwareenginenetworkpeering.GoogleVmwareengineNetworkPeering_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleVmwareengineNetworkPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleVmwareengineNetworkPeering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleVmwareengineNetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVmwareengineNetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.stateDetails">StateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference">GoogleVmwareengineNetworkPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.vmwareEngineNetworkCanonical">VmwareEngineNetworkCanonical</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutesInput">ExportCustomRoutesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIpInput">ExportCustomRoutesWithPublicIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutesInput">ImportCustomRoutesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutesWithPublicIpInput">ImportCustomRoutesWithPublicIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetworkInput">PeerNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetworkTypeInput">PeerNetworkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.vmwareEngineNetworkInput">VmwareEngineNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutes">ExportCustomRoutes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIp">ExportCustomRoutesWithPublicIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutes">ImportCustomRoutes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutesWithPublicIp">ImportCustomRoutesWithPublicIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetwork">PeerNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetworkType">PeerNetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.vmwareEngineNetwork">VmwareEngineNetwork</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateDetails`<sup>Required</sup> <a name="StateDetails" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.stateDetails"></a>

```go
func StateDetails() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.timeouts"></a>

```go
func Timeouts() GoogleVmwareengineNetworkPeeringTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference">GoogleVmwareengineNetworkPeeringTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `VmwareEngineNetworkCanonical`<sup>Required</sup> <a name="VmwareEngineNetworkCanonical" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.vmwareEngineNetworkCanonical"></a>

```go
func VmwareEngineNetworkCanonical() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExportCustomRoutesInput`<sup>Optional</sup> <a name="ExportCustomRoutesInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutesInput"></a>

```go
func ExportCustomRoutesInput() interface{}
```

- *Type:* interface{}

---

##### `ExportCustomRoutesWithPublicIpInput`<sup>Optional</sup> <a name="ExportCustomRoutesWithPublicIpInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIpInput"></a>

```go
func ExportCustomRoutesWithPublicIpInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImportCustomRoutesInput`<sup>Optional</sup> <a name="ImportCustomRoutesInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutesInput"></a>

```go
func ImportCustomRoutesInput() interface{}
```

- *Type:* interface{}

---

##### `ImportCustomRoutesWithPublicIpInput`<sup>Optional</sup> <a name="ImportCustomRoutesWithPublicIpInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutesWithPublicIpInput"></a>

```go
func ImportCustomRoutesWithPublicIpInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PeerNetworkInput`<sup>Optional</sup> <a name="PeerNetworkInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetworkInput"></a>

```go
func PeerNetworkInput() *string
```

- *Type:* *string

---

##### `PeerNetworkTypeInput`<sup>Optional</sup> <a name="PeerNetworkTypeInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetworkTypeInput"></a>

```go
func PeerNetworkTypeInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VmwareEngineNetworkInput`<sup>Optional</sup> <a name="VmwareEngineNetworkInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.vmwareEngineNetworkInput"></a>

```go
func VmwareEngineNetworkInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExportCustomRoutes`<sup>Required</sup> <a name="ExportCustomRoutes" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutes"></a>

```go
func ExportCustomRoutes() interface{}
```

- *Type:* interface{}

---

##### `ExportCustomRoutesWithPublicIp`<sup>Required</sup> <a name="ExportCustomRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIp"></a>

```go
func ExportCustomRoutesWithPublicIp() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportCustomRoutes`<sup>Required</sup> <a name="ImportCustomRoutes" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutes"></a>

```go
func ImportCustomRoutes() interface{}
```

- *Type:* interface{}

---

##### `ImportCustomRoutesWithPublicIp`<sup>Required</sup> <a name="ImportCustomRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutesWithPublicIp"></a>

```go
func ImportCustomRoutesWithPublicIp() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PeerNetwork`<sup>Required</sup> <a name="PeerNetwork" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetwork"></a>

```go
func PeerNetwork() *string
```

- *Type:* *string

---

##### `PeerNetworkType`<sup>Required</sup> <a name="PeerNetworkType" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetworkType"></a>

```go
func PeerNetworkType() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `VmwareEngineNetwork`<sup>Required</sup> <a name="VmwareEngineNetwork" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.vmwareEngineNetwork"></a>

```go
func VmwareEngineNetwork() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVmwareengineNetworkPeeringConfig <a name="GoogleVmwareengineNetworkPeeringConfig" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevmwareenginenetworkpeering"

&googlevmwareenginenetworkpeering.GoogleVmwareengineNetworkPeeringConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	PeerNetwork: *string,
	PeerNetworkType: *string,
	VmwareEngineNetwork: *string,
	Description: *string,
	ExportCustomRoutes: interface{},
	ExportCustomRoutesWithPublicIp: interface{},
	Id: *string,
	ImportCustomRoutes: interface{},
	ImportCustomRoutesWithPublicIp: interface{},
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.name">Name</a></code> | <code>*string</code> | The ID of the Network Peering. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.peerNetwork">PeerNetwork</a></code> | <code>*string</code> | The relative resource name of the network to peer with a standard VMware Engine network. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.peerNetworkType">PeerNetworkType</a></code> | <code>*string</code> | The type of the network to peer with the VMware Engine network. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.vmwareEngineNetwork">VmwareEngineNetwork</a></code> | <code>*string</code> | The relative resource name of the VMware Engine network. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.description">Description</a></code> | <code>*string</code> | User-provided description for this network peering. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.exportCustomRoutes">ExportCustomRoutes</a></code> | <code>interface{}</code> | True if custom routes are exported to the peered network; false otherwise. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.exportCustomRoutesWithPublicIp">ExportCustomRoutesWithPublicIp</a></code> | <code>interface{}</code> | True if all subnet routes with a public IP address range are exported; false otherwise. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#id GoogleVmwareengineNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.importCustomRoutes">ImportCustomRoutes</a></code> | <code>interface{}</code> | True if custom routes are imported from the peered network; false otherwise. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.importCustomRoutesWithPublicIp">ImportCustomRoutesWithPublicIp</a></code> | <code>interface{}</code> | True if custom routes are imported from the peered network; false otherwise. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#project GoogleVmwareengineNetworkPeering#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts">GoogleVmwareengineNetworkPeeringTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The ID of the Network Peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#name GoogleVmwareengineNetworkPeering#name}

---

##### `PeerNetwork`<sup>Required</sup> <a name="PeerNetwork" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.peerNetwork"></a>

```go
PeerNetwork *string
```

- *Type:* *string

The relative resource name of the network to peer with a standard VMware Engine network.

The provided network can be a consumer VPC network or another standard VMware Engine network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#peer_network GoogleVmwareengineNetworkPeering#peer_network}

---

##### `PeerNetworkType`<sup>Required</sup> <a name="PeerNetworkType" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.peerNetworkType"></a>

```go
PeerNetworkType *string
```

- *Type:* *string

The type of the network to peer with the VMware Engine network.

Possible values: ["STANDARD", "VMWARE_ENGINE_NETWORK", "PRIVATE_SERVICES_ACCESS", "NETAPP_CLOUD_VOLUMES", "THIRD_PARTY_SERVICE", "DELL_POWERSCALE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#peer_network_type GoogleVmwareengineNetworkPeering#peer_network_type}

---

##### `VmwareEngineNetwork`<sup>Required</sup> <a name="VmwareEngineNetwork" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.vmwareEngineNetwork"></a>

```go
VmwareEngineNetwork *string
```

- *Type:* *string

The relative resource name of the VMware Engine network.

Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#vmware_engine_network GoogleVmwareengineNetworkPeering#vmware_engine_network}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User-provided description for this network peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#description GoogleVmwareengineNetworkPeering#description}

---

##### `ExportCustomRoutes`<sup>Optional</sup> <a name="ExportCustomRoutes" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.exportCustomRoutes"></a>

```go
ExportCustomRoutes interface{}
```

- *Type:* interface{}

True if custom routes are exported to the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#export_custom_routes GoogleVmwareengineNetworkPeering#export_custom_routes}

---

##### `ExportCustomRoutesWithPublicIp`<sup>Optional</sup> <a name="ExportCustomRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.exportCustomRoutesWithPublicIp"></a>

```go
ExportCustomRoutesWithPublicIp interface{}
```

- *Type:* interface{}

True if all subnet routes with a public IP address range are exported; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#export_custom_routes_with_public_ip GoogleVmwareengineNetworkPeering#export_custom_routes_with_public_ip}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#id GoogleVmwareengineNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportCustomRoutes`<sup>Optional</sup> <a name="ImportCustomRoutes" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.importCustomRoutes"></a>

```go
ImportCustomRoutes interface{}
```

- *Type:* interface{}

True if custom routes are imported from the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#import_custom_routes GoogleVmwareengineNetworkPeering#import_custom_routes}

---

##### `ImportCustomRoutesWithPublicIp`<sup>Optional</sup> <a name="ImportCustomRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.importCustomRoutesWithPublicIp"></a>

```go
ImportCustomRoutesWithPublicIp interface{}
```

- *Type:* interface{}

True if custom routes are imported from the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#import_custom_routes_with_public_ip GoogleVmwareengineNetworkPeering#import_custom_routes_with_public_ip}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#project GoogleVmwareengineNetworkPeering#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.timeouts"></a>

```go
Timeouts GoogleVmwareengineNetworkPeeringTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts">GoogleVmwareengineNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#timeouts GoogleVmwareengineNetworkPeering#timeouts}

---

### GoogleVmwareengineNetworkPeeringTimeouts <a name="GoogleVmwareengineNetworkPeeringTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevmwareenginenetworkpeering"

&googlevmwareenginenetworkpeering.GoogleVmwareengineNetworkPeeringTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#create GoogleVmwareengineNetworkPeering#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#delete GoogleVmwareengineNetworkPeering#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#update GoogleVmwareengineNetworkPeering#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#create GoogleVmwareengineNetworkPeering#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#delete GoogleVmwareengineNetworkPeering#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#update GoogleVmwareengineNetworkPeering#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVmwareengineNetworkPeeringTimeoutsOutputReference <a name="GoogleVmwareengineNetworkPeeringTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevmwareenginenetworkpeering"

googlevmwareenginenetworkpeering.NewGoogleVmwareengineNetworkPeeringTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVmwareengineNetworkPeeringTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



