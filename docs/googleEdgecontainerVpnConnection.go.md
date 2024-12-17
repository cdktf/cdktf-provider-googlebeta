# `googleEdgecontainerVpnConnection` Submodule <a name="`googleEdgecontainerVpnConnection` Submodule" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEdgecontainerVpnConnection <a name="GoogleEdgecontainerVpnConnection" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection google_edgecontainer_vpn_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgecontainervpnconnection"

googleedgecontainervpnconnection.NewGoogleEdgecontainerVpnConnection(scope Construct, id *string, config GoogleEdgecontainerVpnConnectionConfig) GoogleEdgecontainerVpnConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig">GoogleEdgecontainerVpnConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig">GoogleEdgecontainerVpnConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.putVpcProject">PutVpcProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetEnableHighAvailability">ResetEnableHighAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetNatGatewayIp">ResetNatGatewayIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetRouter">ResetRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetVpc">ResetVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetVpcProject">ResetVpcProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.putTimeouts"></a>

```go
func PutTimeouts(value GoogleEdgecontainerVpnConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts">GoogleEdgecontainerVpnConnectionTimeouts</a>

---

##### `PutVpcProject` <a name="PutVpcProject" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.putVpcProject"></a>

```go
func PutVpcProject(value GoogleEdgecontainerVpnConnectionVpcProject)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.putVpcProject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a>

---

##### `ResetEnableHighAvailability` <a name="ResetEnableHighAvailability" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetEnableHighAvailability"></a>

```go
func ResetEnableHighAvailability()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNatGatewayIp` <a name="ResetNatGatewayIp" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetNatGatewayIp"></a>

```go
func ResetNatGatewayIp()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRouter` <a name="ResetRouter" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetRouter"></a>

```go
func ResetRouter()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpc` <a name="ResetVpc" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetVpc"></a>

```go
func ResetVpc()
```

##### `ResetVpcProject` <a name="ResetVpcProject" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetVpcProject"></a>

```go
func ResetVpcProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleEdgecontainerVpnConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgecontainervpnconnection"

googleedgecontainervpnconnection.GoogleEdgecontainerVpnConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgecontainervpnconnection"

googleedgecontainervpnconnection.GoogleEdgecontainerVpnConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgecontainervpnconnection"

googleedgecontainervpnconnection.GoogleEdgecontainerVpnConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgecontainervpnconnection"

googleedgecontainervpnconnection.GoogleEdgecontainerVpnConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleEdgecontainerVpnConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleEdgecontainerVpnConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleEdgecontainerVpnConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEdgecontainerVpnConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.details">Details</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList">GoogleEdgecontainerVpnConnectionDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference">GoogleEdgecontainerVpnConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpcProject">VpcProject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference">GoogleEdgecontainerVpnConnectionVpcProjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.enableHighAvailabilityInput">EnableHighAvailabilityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.natGatewayIpInput">NatGatewayIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.routerInput">RouterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpcInput">VpcInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpcProjectInput">VpcProjectInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.enableHighAvailability">EnableHighAvailability</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.natGatewayIp">NatGatewayIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.router">Router</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpc">Vpc</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.details"></a>

```go
func Details() GoogleEdgecontainerVpnConnectionDetailsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList">GoogleEdgecontainerVpnConnectionDetailsList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.timeouts"></a>

```go
func Timeouts() GoogleEdgecontainerVpnConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference">GoogleEdgecontainerVpnConnectionTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `VpcProject`<sup>Required</sup> <a name="VpcProject" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpcProject"></a>

```go
func VpcProject() GoogleEdgecontainerVpnConnectionVpcProjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference">GoogleEdgecontainerVpnConnectionVpcProjectOutputReference</a>

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `EnableHighAvailabilityInput`<sup>Optional</sup> <a name="EnableHighAvailabilityInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.enableHighAvailabilityInput"></a>

```go
func EnableHighAvailabilityInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NatGatewayIpInput`<sup>Optional</sup> <a name="NatGatewayIpInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.natGatewayIpInput"></a>

```go
func NatGatewayIpInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.routerInput"></a>

```go
func RouterInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpcInput"></a>

```go
func VpcInput() *string
```

- *Type:* *string

---

##### `VpcProjectInput`<sup>Optional</sup> <a name="VpcProjectInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpcProjectInput"></a>

```go
func VpcProjectInput() GoogleEdgecontainerVpnConnectionVpcProject
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a>

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `EnableHighAvailability`<sup>Required</sup> <a name="EnableHighAvailability" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.enableHighAvailability"></a>

```go
func EnableHighAvailability() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NatGatewayIp`<sup>Required</sup> <a name="NatGatewayIp" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.natGatewayIp"></a>

```go
func NatGatewayIp() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.router"></a>

```go
func Router() *string
```

- *Type:* *string

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpc"></a>

```go
func Vpc() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEdgecontainerVpnConnectionConfig <a name="GoogleEdgecontainerVpnConnectionConfig" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgecontainervpnconnection"

&googleedgecontainervpnconnection.GoogleEdgecontainerVpnConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Cluster: *string,
	Location: *string,
	Name: *string,
	EnableHighAvailability: interface{},
	Id: *string,
	Labels: *map[string]*string,
	NatGatewayIp: *string,
	Project: *string,
	Router: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts,
	Vpc: *string,
	VpcProject: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.cluster">Cluster</a></code> | <code>*string</code> | The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.location">Location</a></code> | <code>*string</code> | Google Cloud Platform location. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.name">Name</a></code> | <code>*string</code> | The resource name of VPN connection. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.enableHighAvailability">EnableHighAvailability</a></code> | <code>interface{}</code> | Whether this VPN connection has HA enabled on cluster side. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection#id GoogleEdgecontainerVpnConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels associated with this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.natGatewayIp">NatGatewayIp</a></code> | <code>*string</code> | NAT gateway IP, or WAN IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection#project GoogleEdgecontainerVpnConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.router">Router</a></code> | <code>*string</code> | The VPN connection Cloud Router name. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts">GoogleEdgecontainerVpnConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.vpc">Vpc</a></code> | <code>*string</code> | The network ID of VPC to connect to. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.vpcProject">VpcProject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a></code> | vpc_project block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection#cluster GoogleEdgecontainerVpnConnection#cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Google Cloud Platform location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection#location GoogleEdgecontainerVpnConnection#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection#name GoogleEdgecontainerVpnConnection#name}

---

##### `EnableHighAvailability`<sup>Optional</sup> <a name="EnableHighAvailability" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.enableHighAvailability"></a>

```go
EnableHighAvailability interface{}
```

- *Type:* interface{}

Whether this VPN connection has HA enabled on cluster side.

If enabled, when creating VPN connection we will attempt to use 2 ANG floating IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection#enable_high_availability GoogleEdgecontainerVpnConnection#enable_high_availability}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection#id GoogleEdgecontainerVpnConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection#labels GoogleEdgecontainerVpnConnection#labels}

---

##### `NatGatewayIp`<sup>Optional</sup> <a name="NatGatewayIp" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.natGatewayIp"></a>

```go
NatGatewayIp *string
```

- *Type:* *string

NAT gateway IP, or WAN IP address.

If a customer has multiple NAT IPs, the customer needs to configure NAT such that only one external IP maps to the GMEC Anthos cluster.
This is empty if NAT is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection#nat_gateway_ip GoogleEdgecontainerVpnConnection#nat_gateway_ip}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection#project GoogleEdgecontainerVpnConnection#project}.

---

##### `Router`<sup>Optional</sup> <a name="Router" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.router"></a>

```go
Router *string
```

- *Type:* *string

The VPN connection Cloud Router name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection#router GoogleEdgecontainerVpnConnection#router}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.timeouts"></a>

```go
Timeouts GoogleEdgecontainerVpnConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts">GoogleEdgecontainerVpnConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection#timeouts GoogleEdgecontainerVpnConnection#timeouts}

---

##### `Vpc`<sup>Optional</sup> <a name="Vpc" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.vpc"></a>

```go
Vpc *string
```

- *Type:* *string

The network ID of VPC to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection#vpc GoogleEdgecontainerVpnConnection#vpc}

---

##### `VpcProject`<sup>Optional</sup> <a name="VpcProject" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.vpcProject"></a>

```go
VpcProject GoogleEdgecontainerVpnConnectionVpcProject
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a>

vpc_project block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection#vpc_project GoogleEdgecontainerVpnConnection#vpc_project}

---

### GoogleEdgecontainerVpnConnectionDetails <a name="GoogleEdgecontainerVpnConnectionDetails" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgecontainervpnconnection"

&googleedgecontainervpnconnection.GoogleEdgecontainerVpnConnectionDetails {

}
```


### GoogleEdgecontainerVpnConnectionDetailsCloudRouter <a name="GoogleEdgecontainerVpnConnectionDetailsCloudRouter" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgecontainervpnconnection"

&googleedgecontainervpnconnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouter {

}
```


### GoogleEdgecontainerVpnConnectionDetailsCloudVpns <a name="GoogleEdgecontainerVpnConnectionDetailsCloudVpns" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgecontainervpnconnection"

&googleedgecontainervpnconnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpns {

}
```


### GoogleEdgecontainerVpnConnectionTimeouts <a name="GoogleEdgecontainerVpnConnectionTimeouts" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgecontainervpnconnection"

&googleedgecontainervpnconnection.GoogleEdgecontainerVpnConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection#create GoogleEdgecontainerVpnConnection#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection#delete GoogleEdgecontainerVpnConnection#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection#update GoogleEdgecontainerVpnConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection#create GoogleEdgecontainerVpnConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection#delete GoogleEdgecontainerVpnConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection#update GoogleEdgecontainerVpnConnection#update}.

---

### GoogleEdgecontainerVpnConnectionVpcProject <a name="GoogleEdgecontainerVpnConnectionVpcProject" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgecontainervpnconnection"

&googleedgecontainervpnconnection.GoogleEdgecontainerVpnConnectionVpcProject {
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject.property.projectId">ProjectId</a></code> | <code>*string</code> | The project of the VPC to connect to. If not specified, it is the same as the cluster project. |

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The project of the VPC to connect to. If not specified, it is the same as the cluster project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_edgecontainer_vpn_connection#project_id GoogleEdgecontainerVpnConnection#project_id}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEdgecontainerVpnConnectionDetailsCloudRouterList <a name="GoogleEdgecontainerVpnConnectionDetailsCloudRouterList" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgecontainervpnconnection"

googleedgecontainervpnconnection.NewGoogleEdgecontainerVpnConnectionDetailsCloudRouterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleEdgecontainerVpnConnectionDetailsCloudRouterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.get"></a>

```go
func Get(index *f64) GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference <a name="GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgecontainervpnconnection"

googleedgecontainervpnconnection.NewGoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouter">GoogleEdgecontainerVpnConnectionDetailsCloudRouter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEdgecontainerVpnConnectionDetailsCloudRouter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouter">GoogleEdgecontainerVpnConnectionDetailsCloudRouter</a>

---


### GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList <a name="GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgecontainervpnconnection"

googleedgecontainervpnconnection.NewGoogleEdgecontainerVpnConnectionDetailsCloudVpnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.get"></a>

```go
func Get(index *f64) GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference <a name="GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgecontainervpnconnection"

googleedgecontainervpnconnection.NewGoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.gateway">Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpns">GoogleEdgecontainerVpnConnectionDetailsCloudVpns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.gateway"></a>

```go
func Gateway() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEdgecontainerVpnConnectionDetailsCloudVpns
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpns">GoogleEdgecontainerVpnConnectionDetailsCloudVpns</a>

---


### GoogleEdgecontainerVpnConnectionDetailsList <a name="GoogleEdgecontainerVpnConnectionDetailsList" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgecontainervpnconnection"

googleedgecontainervpnconnection.NewGoogleEdgecontainerVpnConnectionDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleEdgecontainerVpnConnectionDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.get"></a>

```go
func Get(index *f64) GoogleEdgecontainerVpnConnectionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleEdgecontainerVpnConnectionDetailsOutputReference <a name="GoogleEdgecontainerVpnConnectionDetailsOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgecontainervpnconnection"

googleedgecontainervpnconnection.NewGoogleEdgecontainerVpnConnectionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleEdgecontainerVpnConnectionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.cloudRouter">CloudRouter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList">GoogleEdgecontainerVpnConnectionDetailsCloudRouterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.cloudVpns">CloudVpns</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList">GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.error">Error</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetails">GoogleEdgecontainerVpnConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudRouter`<sup>Required</sup> <a name="CloudRouter" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.cloudRouter"></a>

```go
func CloudRouter() GoogleEdgecontainerVpnConnectionDetailsCloudRouterList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList">GoogleEdgecontainerVpnConnectionDetailsCloudRouterList</a>

---

##### `CloudVpns`<sup>Required</sup> <a name="CloudVpns" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.cloudVpns"></a>

```go
func CloudVpns() GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList">GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList</a>

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.error"></a>

```go
func Error() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEdgecontainerVpnConnectionDetails
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetails">GoogleEdgecontainerVpnConnectionDetails</a>

---


### GoogleEdgecontainerVpnConnectionTimeoutsOutputReference <a name="GoogleEdgecontainerVpnConnectionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgecontainervpnconnection"

googleedgecontainervpnconnection.NewGoogleEdgecontainerVpnConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEdgecontainerVpnConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleEdgecontainerVpnConnectionVpcProjectOutputReference <a name="GoogleEdgecontainerVpnConnectionVpcProjectOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgecontainervpnconnection"

googleedgecontainervpnconnection.NewGoogleEdgecontainerVpnConnectionVpcProjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEdgecontainerVpnConnectionVpcProjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEdgecontainerVpnConnectionVpcProject
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a>

---



