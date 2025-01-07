# `googleNetworkServicesLbTrafficExtension` Submodule <a name="`googleNetworkServicesLbTrafficExtension` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesLbTrafficExtension <a name="GoogleNetworkServicesLbTrafficExtension" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension google_network_services_lb_traffic_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbtrafficextension"

googlenetworkserviceslbtrafficextension.NewGoogleNetworkServicesLbTrafficExtension(scope Construct, id *string, config GoogleNetworkServicesLbTrafficExtensionConfig) GoogleNetworkServicesLbTrafficExtension
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig">GoogleNetworkServicesLbTrafficExtensionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig">GoogleNetworkServicesLbTrafficExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.putExtensionChains">PutExtensionChains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetLoadBalancingScheme">ResetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExtensionChains` <a name="PutExtensionChains" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.putExtensionChains"></a>

```go
func PutExtensionChains(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.putExtensionChains.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkServicesLbTrafficExtensionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts">GoogleNetworkServicesLbTrafficExtensionTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLoadBalancingScheme` <a name="ResetLoadBalancingScheme" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetLoadBalancingScheme"></a>

```go
func ResetLoadBalancingScheme()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesLbTrafficExtension resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbtrafficextension"

googlenetworkserviceslbtrafficextension.GoogleNetworkServicesLbTrafficExtension_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbtrafficextension"

googlenetworkserviceslbtrafficextension.GoogleNetworkServicesLbTrafficExtension_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbtrafficextension"

googlenetworkserviceslbtrafficextension.GoogleNetworkServicesLbTrafficExtension_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbtrafficextension"

googlenetworkserviceslbtrafficextension.GoogleNetworkServicesLbTrafficExtension_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleNetworkServicesLbTrafficExtension resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkServicesLbTrafficExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkServicesLbTrafficExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesLbTrafficExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.extensionChains">ExtensionChains</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList">GoogleNetworkServicesLbTrafficExtensionExtensionChainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference">GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.extensionChainsInput">ExtensionChainsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.forwardingRulesInput">ForwardingRulesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.loadBalancingSchemeInput">LoadBalancingSchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.forwardingRules">ForwardingRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ExtensionChains`<sup>Required</sup> <a name="ExtensionChains" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.extensionChains"></a>

```go
func ExtensionChains() GoogleNetworkServicesLbTrafficExtensionExtensionChainsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList">GoogleNetworkServicesLbTrafficExtensionExtensionChainsList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference">GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExtensionChainsInput`<sup>Optional</sup> <a name="ExtensionChainsInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.extensionChainsInput"></a>

```go
func ExtensionChainsInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardingRulesInput`<sup>Optional</sup> <a name="ForwardingRulesInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.forwardingRulesInput"></a>

```go
func ForwardingRulesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LoadBalancingSchemeInput`<sup>Optional</sup> <a name="LoadBalancingSchemeInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.loadBalancingSchemeInput"></a>

```go
func LoadBalancingSchemeInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ForwardingRules`<sup>Required</sup> <a name="ForwardingRules" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.forwardingRules"></a>

```go
func ForwardingRules() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.loadBalancingScheme"></a>

```go
func LoadBalancingScheme() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesLbTrafficExtensionConfig <a name="GoogleNetworkServicesLbTrafficExtensionConfig" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbtrafficextension"

&googlenetworkserviceslbtrafficextension.GoogleNetworkServicesLbTrafficExtensionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExtensionChains: interface{},
	ForwardingRules: *[]*string,
	Location: *string,
	Name: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	LoadBalancingScheme: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.extensionChains">ExtensionChains</a></code> | <code>interface{}</code> | extension_chains block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.forwardingRules">ForwardingRules</a></code> | <code>*[]*string</code> | A list of references to the forwarding rules to which this service extension is attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.location">Location</a></code> | <code>*string</code> | The location of the traffic extension. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.name">Name</a></code> | <code>*string</code> | Name of the LbTrafficExtension resource in the following format: projects/{project}/locations/{location}/lbTrafficExtensions/{lbTrafficExtension}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.description">Description</a></code> | <code>*string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#id GoogleNetworkServicesLbTrafficExtension#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of labels associated with the LbTrafficExtension resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#project GoogleNetworkServicesLbTrafficExtension#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts">GoogleNetworkServicesLbTrafficExtensionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExtensionChains`<sup>Required</sup> <a name="ExtensionChains" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.extensionChains"></a>

```go
ExtensionChains interface{}
```

- *Type:* interface{}

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#extension_chains GoogleNetworkServicesLbTrafficExtension#extension_chains}

---

##### `ForwardingRules`<sup>Required</sup> <a name="ForwardingRules" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.forwardingRules"></a>

```go
ForwardingRules *[]*string
```

- *Type:* *[]*string

A list of references to the forwarding rules to which this service extension is attached to.

At least one forwarding rule is required. There can be only one LBTrafficExtension resource per forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#forwarding_rules GoogleNetworkServicesLbTrafficExtension#forwarding_rules}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the traffic extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#location GoogleNetworkServicesLbTrafficExtension#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the LbTrafficExtension resource in the following format: projects/{project}/locations/{location}/lbTrafficExtensions/{lbTrafficExtension}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#name GoogleNetworkServicesLbTrafficExtension#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#description GoogleNetworkServicesLbTrafficExtension#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#id GoogleNetworkServicesLbTrafficExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of labels associated with the LbTrafficExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#labels GoogleNetworkServicesLbTrafficExtension#labels}

---

##### `LoadBalancingScheme`<sup>Optional</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.loadBalancingScheme"></a>

```go
LoadBalancingScheme *string
```

- *Type:* *string

All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.

For more information, refer to [Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service) and
[Supported application load balancers](https://cloud.google.com/service-extensions/docs/callouts-overview#supported-lbs). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#load_balancing_scheme GoogleNetworkServicesLbTrafficExtension#load_balancing_scheme}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#project GoogleNetworkServicesLbTrafficExtension#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkServicesLbTrafficExtensionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts">GoogleNetworkServicesLbTrafficExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#timeouts GoogleNetworkServicesLbTrafficExtension#timeouts}

---

### GoogleNetworkServicesLbTrafficExtensionExtensionChains <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChains" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbtrafficextension"

&googlenetworkserviceslbtrafficextension.GoogleNetworkServicesLbTrafficExtensionExtensionChains {
	Extensions: interface{},
	MatchCondition: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains.property.extensions">Extensions</a></code> | <code>interface{}</code> | extensions block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains.property.matchCondition">MatchCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a></code> | match_condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains.property.name">Name</a></code> | <code>*string</code> | The name for this extension chain. |

---

##### `Extensions`<sup>Required</sup> <a name="Extensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains.property.extensions"></a>

```go
Extensions interface{}
```

- *Type:* interface{}

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#extensions GoogleNetworkServicesLbTrafficExtension#extensions}

---

##### `MatchCondition`<sup>Required</sup> <a name="MatchCondition" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains.property.matchCondition"></a>

```go
MatchCondition GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a>

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#match_condition GoogleNetworkServicesLbTrafficExtension#match_condition}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for this extension chain.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#name GoogleNetworkServicesLbTrafficExtension#name}

---

### GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbtrafficextension"

&googlenetworkserviceslbtrafficextension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions {
	Name: *string,
	Service: *string,
	Authority: *string,
	FailOpen: interface{},
	ForwardHeaders: *[]*string,
	SupportedEvents: *[]*string,
	Timeout: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.name">Name</a></code> | <code>*string</code> | The name for this extension. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.service">Service</a></code> | <code>*string</code> | The reference to the service that runs the extension. Must be a reference to a backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.authority">Authority</a></code> | <code>*string</code> | The :authority header in the gRPC request sent from Envoy to the extension service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.forwardHeaders">ForwardHeaders</a></code> | <code>*[]*string</code> | List of the HTTP headers to forward to the extension (from the client or backend). |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.supportedEvents">SupportedEvents</a></code> | <code>*[]*string</code> | A set of events during request or response processing for which this extension is called. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.timeout">Timeout</a></code> | <code>*string</code> | Specifies the timeout for each individual message on the stream. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for this extension.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#name GoogleNetworkServicesLbTrafficExtension#name}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.service"></a>

```go
Service *string
```

- *Type:* *string

The reference to the service that runs the extension. Must be a reference to a backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#service GoogleNetworkServicesLbTrafficExtension#service}

---

##### `Authority`<sup>Optional</sup> <a name="Authority" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.authority"></a>

```go
Authority *string
```

- *Type:* *string

The :authority header in the gRPC request sent from Envoy to the extension service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#authority GoogleNetworkServicesLbTrafficExtension#authority}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.failOpen"></a>

```go
FailOpen interface{}
```

- *Type:* interface{}

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error.
Any subsequent extensions in the extension chain are also executed.
When set to FALSE: * If response headers have not been delivered to the downstream client,
a generic 500 error is returned to the client. The error response can be tailored by
configuring a custom error response in the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#fail_open GoogleNetworkServicesLbTrafficExtension#fail_open}

---

##### `ForwardHeaders`<sup>Optional</sup> <a name="ForwardHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.forwardHeaders"></a>

```go
ForwardHeaders *[]*string
```

- *Type:* *[]*string

List of the HTTP headers to forward to the extension (from the client or backend).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#forward_headers GoogleNetworkServicesLbTrafficExtension#forward_headers}

---

##### `SupportedEvents`<sup>Optional</sup> <a name="SupportedEvents" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.supportedEvents"></a>

```go
SupportedEvents *[]*string
```

- *Type:* *[]*string

A set of events during request or response processing for which this extension is called.

This field is required for the LbTrafficExtension resource. It's not relevant for the LbRouteExtension
resource. Possible values:'EVENT_TYPE_UNSPECIFIED', 'REQUEST_HEADERS', 'REQUEST_BODY', 'RESPONSE_HEADERS',
'RESPONSE_BODY', 'RESPONSE_BODY' and 'RESPONSE_BODY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#supported_events GoogleNetworkServicesLbTrafficExtension#supported_events}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Specifies the timeout for each individual message on the stream.

The timeout must be between 10-1000 milliseconds.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#timeout GoogleNetworkServicesLbTrafficExtension#timeout}

---

### GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbtrafficextension"

&googlenetworkserviceslbtrafficextension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition {
	CelExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition.property.celExpression">CelExpression</a></code> | <code>*string</code> | A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed. |

---

##### `CelExpression`<sup>Required</sup> <a name="CelExpression" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition.property.celExpression"></a>

```go
CelExpression *string
```

- *Type:* *string

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#cel_expression GoogleNetworkServicesLbTrafficExtension#cel_expression}

---

### GoogleNetworkServicesLbTrafficExtensionTimeouts <a name="GoogleNetworkServicesLbTrafficExtensionTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbtrafficextension"

&googlenetworkserviceslbtrafficextension.GoogleNetworkServicesLbTrafficExtensionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#create GoogleNetworkServicesLbTrafficExtension#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#delete GoogleNetworkServicesLbTrafficExtension#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#update GoogleNetworkServicesLbTrafficExtension#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#create GoogleNetworkServicesLbTrafficExtension#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#delete GoogleNetworkServicesLbTrafficExtension#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#update GoogleNetworkServicesLbTrafficExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbtrafficextension"

googlenetworkserviceslbtrafficextension.NewGoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.get"></a>

```go
func Get(index *f64) GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbtrafficextension"

googlenetworkserviceslbtrafficextension.NewGoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetAuthority">ResetAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders">ResetForwardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents">ResetSupportedEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthority` <a name="ResetAuthority" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetAuthority"></a>

```go
func ResetAuthority()
```

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetFailOpen"></a>

```go
func ResetFailOpen()
```

##### `ResetForwardHeaders` <a name="ResetForwardHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders"></a>

```go
func ResetForwardHeaders()
```

##### `ResetSupportedEvents` <a name="ResetSupportedEvents" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents"></a>

```go
func ResetSupportedEvents()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.authorityInput">AuthorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput">ForwardHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput">SupportedEventsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.authority">Authority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders">ForwardHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents">SupportedEvents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorityInput`<sup>Optional</sup> <a name="AuthorityInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.authorityInput"></a>

```go
func AuthorityInput() *string
```

- *Type:* *string

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput"></a>

```go
func FailOpenInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardHeadersInput`<sup>Optional</sup> <a name="ForwardHeadersInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput"></a>

```go
func ForwardHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `SupportedEventsInput`<sup>Optional</sup> <a name="SupportedEventsInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput"></a>

```go
func SupportedEventsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `Authority`<sup>Required</sup> <a name="Authority" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.authority"></a>

```go
func Authority() *string
```

- *Type:* *string

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.failOpen"></a>

```go
func FailOpen() interface{}
```

- *Type:* interface{}

---

##### `ForwardHeaders`<sup>Required</sup> <a name="ForwardHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders"></a>

```go
func ForwardHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `SupportedEvents`<sup>Required</sup> <a name="SupportedEvents" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents"></a>

```go
func SupportedEvents() *[]*string
```

- *Type:* *[]*string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesLbTrafficExtensionExtensionChainsList <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChainsList" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbtrafficextension"

googlenetworkserviceslbtrafficextension.NewGoogleNetworkServicesLbTrafficExtensionExtensionChainsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkServicesLbTrafficExtensionExtensionChainsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.get"></a>

```go
func Get(index *f64) GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbtrafficextension"

googlenetworkserviceslbtrafficextension.NewGoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput">CelExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.celExpression">CelExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CelExpressionInput`<sup>Optional</sup> <a name="CelExpressionInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput"></a>

```go
func CelExpressionInput() *string
```

- *Type:* *string

---

##### `CelExpression`<sup>Required</sup> <a name="CelExpression" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.celExpression"></a>

```go
func CelExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a>

---


### GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbtrafficextension"

googlenetworkserviceslbtrafficextension.NewGoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putExtensions">PutExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putMatchCondition">PutMatchCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtensions` <a name="PutExtensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putExtensions"></a>

```go
func PutExtensions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putExtensions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMatchCondition` <a name="PutMatchCondition" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putMatchCondition"></a>

```go
func PutMatchCondition(value GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putMatchCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.extensions">Extensions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.matchCondition">MatchCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.extensionsInput">ExtensionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.matchConditionInput">MatchConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Extensions`<sup>Required</sup> <a name="Extensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.extensions"></a>

```go
func Extensions() GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList</a>

---

##### `MatchCondition`<sup>Required</sup> <a name="MatchCondition" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.matchCondition"></a>

```go
func MatchCondition() GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference</a>

---

##### `ExtensionsInput`<sup>Optional</sup> <a name="ExtensionsInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.extensionsInput"></a>

```go
func ExtensionsInput() interface{}
```

- *Type:* interface{}

---

##### `MatchConditionInput`<sup>Optional</sup> <a name="MatchConditionInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.matchConditionInput"></a>

```go
func MatchConditionInput() GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference <a name="GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbtrafficextension"

googlenetworkserviceslbtrafficextension.NewGoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



