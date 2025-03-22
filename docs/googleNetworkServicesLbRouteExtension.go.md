# `googleNetworkServicesLbRouteExtension` Submodule <a name="`googleNetworkServicesLbRouteExtension` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesLbRouteExtension <a name="GoogleNetworkServicesLbRouteExtension" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension google_network_services_lb_route_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbrouteextension"

googlenetworkserviceslbrouteextension.NewGoogleNetworkServicesLbRouteExtension(scope Construct, id *string, config GoogleNetworkServicesLbRouteExtensionConfig) GoogleNetworkServicesLbRouteExtension
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig">GoogleNetworkServicesLbRouteExtensionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig">GoogleNetworkServicesLbRouteExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putExtensionChains">PutExtensionChains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExtensionChains` <a name="PutExtensionChains" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putExtensionChains"></a>

```go
func PutExtensionChains(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putExtensionChains.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkServicesLbRouteExtensionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts">GoogleNetworkServicesLbRouteExtensionTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesLbRouteExtension resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbrouteextension"

googlenetworkserviceslbrouteextension.GoogleNetworkServicesLbRouteExtension_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbrouteextension"

googlenetworkserviceslbrouteextension.GoogleNetworkServicesLbRouteExtension_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbrouteextension"

googlenetworkserviceslbrouteextension.GoogleNetworkServicesLbRouteExtension_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbrouteextension"

googlenetworkserviceslbrouteextension.GoogleNetworkServicesLbRouteExtension_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleNetworkServicesLbRouteExtension resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkServicesLbRouteExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkServicesLbRouteExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesLbRouteExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.extensionChains">ExtensionChains</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList">GoogleNetworkServicesLbRouteExtensionExtensionChainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference">GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.extensionChainsInput">ExtensionChainsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forwardingRulesInput">ForwardingRulesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.loadBalancingSchemeInput">LoadBalancingSchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forwardingRules">ForwardingRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ExtensionChains`<sup>Required</sup> <a name="ExtensionChains" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.extensionChains"></a>

```go
func ExtensionChains() GoogleNetworkServicesLbRouteExtensionExtensionChainsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList">GoogleNetworkServicesLbRouteExtensionExtensionChainsList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference">GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExtensionChainsInput`<sup>Optional</sup> <a name="ExtensionChainsInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.extensionChainsInput"></a>

```go
func ExtensionChainsInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardingRulesInput`<sup>Optional</sup> <a name="ForwardingRulesInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forwardingRulesInput"></a>

```go
func ForwardingRulesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LoadBalancingSchemeInput`<sup>Optional</sup> <a name="LoadBalancingSchemeInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.loadBalancingSchemeInput"></a>

```go
func LoadBalancingSchemeInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ForwardingRules`<sup>Required</sup> <a name="ForwardingRules" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forwardingRules"></a>

```go
func ForwardingRules() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.loadBalancingScheme"></a>

```go
func LoadBalancingScheme() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesLbRouteExtensionConfig <a name="GoogleNetworkServicesLbRouteExtensionConfig" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbrouteextension"

&googlenetworkserviceslbrouteextension.GoogleNetworkServicesLbRouteExtensionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExtensionChains: interface{},
	ForwardingRules: *[]*string,
	LoadBalancingScheme: *string,
	Location: *string,
	Name: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.extensionChains">ExtensionChains</a></code> | <code>interface{}</code> | extension_chains block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.forwardingRules">ForwardingRules</a></code> | <code>*[]*string</code> | A list of references to the forwarding rules to which this service extension is attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.location">Location</a></code> | <code>*string</code> | The location of the route extension. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.name">Name</a></code> | <code>*string</code> | Name of the LbRouteExtension resource in the following format: projects/{project}/locations/{location}/lbRouteExtensions/{lbRouteExtension}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.description">Description</a></code> | <code>*string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#id GoogleNetworkServicesLbRouteExtension#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of labels associated with the LbRouteExtension resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#project GoogleNetworkServicesLbRouteExtension#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts">GoogleNetworkServicesLbRouteExtensionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExtensionChains`<sup>Required</sup> <a name="ExtensionChains" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.extensionChains"></a>

```go
ExtensionChains interface{}
```

- *Type:* interface{}

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#extension_chains GoogleNetworkServicesLbRouteExtension#extension_chains}

---

##### `ForwardingRules`<sup>Required</sup> <a name="ForwardingRules" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.forwardingRules"></a>

```go
ForwardingRules *[]*string
```

- *Type:* *[]*string

A list of references to the forwarding rules to which this service extension is attached to.

At least one forwarding rule is required. There can be only one LbRouteExtension resource per forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#forwarding_rules GoogleNetworkServicesLbRouteExtension#forwarding_rules}

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.loadBalancingScheme"></a>

```go
LoadBalancingScheme *string
```

- *Type:* *string

All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.

For more information, refer to [Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service) and
[Supported application load balancers](https://cloud.google.com/service-extensions/docs/callouts-overview#supported-lbs). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#load_balancing_scheme GoogleNetworkServicesLbRouteExtension#load_balancing_scheme}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the route extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#location GoogleNetworkServicesLbRouteExtension#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the LbRouteExtension resource in the following format: projects/{project}/locations/{location}/lbRouteExtensions/{lbRouteExtension}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#name GoogleNetworkServicesLbRouteExtension#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#description GoogleNetworkServicesLbRouteExtension#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#id GoogleNetworkServicesLbRouteExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of labels associated with the LbRouteExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#labels GoogleNetworkServicesLbRouteExtension#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#project GoogleNetworkServicesLbRouteExtension#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkServicesLbRouteExtensionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts">GoogleNetworkServicesLbRouteExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#timeouts GoogleNetworkServicesLbRouteExtension#timeouts}

---

### GoogleNetworkServicesLbRouteExtensionExtensionChains <a name="GoogleNetworkServicesLbRouteExtensionExtensionChains" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbrouteextension"

&googlenetworkserviceslbrouteextension.GoogleNetworkServicesLbRouteExtensionExtensionChains {
	Extensions: interface{},
	MatchCondition: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.extensions">Extensions</a></code> | <code>interface{}</code> | extensions block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.matchCondition">MatchCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a></code> | match_condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.name">Name</a></code> | <code>*string</code> | The name for this extension chain. |

---

##### `Extensions`<sup>Required</sup> <a name="Extensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.extensions"></a>

```go
Extensions interface{}
```

- *Type:* interface{}

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#extensions GoogleNetworkServicesLbRouteExtension#extensions}

---

##### `MatchCondition`<sup>Required</sup> <a name="MatchCondition" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.matchCondition"></a>

```go
MatchCondition GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#match_condition GoogleNetworkServicesLbRouteExtension#match_condition}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for this extension chain.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last character must be a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#name GoogleNetworkServicesLbRouteExtension#name}

---

### GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbrouteextension"

&googlenetworkserviceslbrouteextension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions {
	Name: *string,
	Service: *string,
	Authority: *string,
	FailOpen: interface{},
	ForwardHeaders: *[]*string,
	Timeout: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.name">Name</a></code> | <code>*string</code> | The name for this extension. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.service">Service</a></code> | <code>*string</code> | The reference to the service that runs the extension. Must be a reference to a backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.authority">Authority</a></code> | <code>*string</code> | The :authority header in the gRPC request sent from Envoy to the extension service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.forwardHeaders">ForwardHeaders</a></code> | <code>*[]*string</code> | List of the HTTP headers to forward to the extension (from the client or backend). |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.timeout">Timeout</a></code> | <code>*string</code> | Specifies the timeout for each individual message on the stream. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for this extension.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#name GoogleNetworkServicesLbRouteExtension#name}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.service"></a>

```go
Service *string
```

- *Type:* *string

The reference to the service that runs the extension. Must be a reference to a backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#service GoogleNetworkServicesLbRouteExtension#service}

---

##### `Authority`<sup>Optional</sup> <a name="Authority" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.authority"></a>

```go
Authority *string
```

- *Type:* *string

The :authority header in the gRPC request sent from Envoy to the extension service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#authority GoogleNetworkServicesLbRouteExtension#authority}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.failOpen"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#fail_open GoogleNetworkServicesLbRouteExtension#fail_open}

---

##### `ForwardHeaders`<sup>Optional</sup> <a name="ForwardHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.forwardHeaders"></a>

```go
ForwardHeaders *[]*string
```

- *Type:* *[]*string

List of the HTTP headers to forward to the extension (from the client or backend).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#forward_headers GoogleNetworkServicesLbRouteExtension#forward_headers}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Specifies the timeout for each individual message on the stream.

The timeout must be between 10-1000 milliseconds.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#timeout GoogleNetworkServicesLbRouteExtension#timeout}

---

### GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbrouteextension"

&googlenetworkserviceslbrouteextension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition {
	CelExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition.property.celExpression">CelExpression</a></code> | <code>*string</code> | A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed. |

---

##### `CelExpression`<sup>Required</sup> <a name="CelExpression" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition.property.celExpression"></a>

```go
CelExpression *string
```

- *Type:* *string

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#cel_expression GoogleNetworkServicesLbRouteExtension#cel_expression}

---

### GoogleNetworkServicesLbRouteExtensionTimeouts <a name="GoogleNetworkServicesLbRouteExtensionTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbrouteextension"

&googlenetworkserviceslbrouteextension.GoogleNetworkServicesLbRouteExtensionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#create GoogleNetworkServicesLbRouteExtension#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#delete GoogleNetworkServicesLbRouteExtension#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#update GoogleNetworkServicesLbRouteExtension#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#create GoogleNetworkServicesLbRouteExtension#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#delete GoogleNetworkServicesLbRouteExtension#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_services_lb_route_extension#update GoogleNetworkServicesLbRouteExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbrouteextension"

googlenetworkserviceslbrouteextension.NewGoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.get"></a>

```go
func Get(index *f64) GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbrouteextension"

googlenetworkserviceslbrouteextension.NewGoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetAuthority">ResetAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders">ResetForwardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthority` <a name="ResetAuthority" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetAuthority"></a>

```go
func ResetAuthority()
```

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetFailOpen"></a>

```go
func ResetFailOpen()
```

##### `ResetForwardHeaders` <a name="ResetForwardHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders"></a>

```go
func ResetForwardHeaders()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authorityInput">AuthorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput">ForwardHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authority">Authority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders">ForwardHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorityInput`<sup>Optional</sup> <a name="AuthorityInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authorityInput"></a>

```go
func AuthorityInput() *string
```

- *Type:* *string

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput"></a>

```go
func FailOpenInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardHeadersInput`<sup>Optional</sup> <a name="ForwardHeadersInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput"></a>

```go
func ForwardHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `Authority`<sup>Required</sup> <a name="Authority" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authority"></a>

```go
func Authority() *string
```

- *Type:* *string

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpen"></a>

```go
func FailOpen() interface{}
```

- *Type:* interface{}

---

##### `ForwardHeaders`<sup>Required</sup> <a name="ForwardHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders"></a>

```go
func ForwardHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesLbRouteExtensionExtensionChainsList <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsList" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbrouteextension"

googlenetworkserviceslbrouteextension.NewGoogleNetworkServicesLbRouteExtensionExtensionChainsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkServicesLbRouteExtensionExtensionChainsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.get"></a>

```go
func Get(index *f64) GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbrouteextension"

googlenetworkserviceslbrouteextension.NewGoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput">CelExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpression">CelExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CelExpressionInput`<sup>Optional</sup> <a name="CelExpressionInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput"></a>

```go
func CelExpressionInput() *string
```

- *Type:* *string

---

##### `CelExpression`<sup>Required</sup> <a name="CelExpression" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpression"></a>

```go
func CelExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

---


### GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbrouteextension"

googlenetworkserviceslbrouteextension.NewGoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putExtensions">PutExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putMatchCondition">PutMatchCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtensions` <a name="PutExtensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putExtensions"></a>

```go
func PutExtensions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putExtensions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMatchCondition` <a name="PutMatchCondition" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putMatchCondition"></a>

```go
func PutMatchCondition(value GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putMatchCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensions">Extensions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchCondition">MatchCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensionsInput">ExtensionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchConditionInput">MatchConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Extensions`<sup>Required</sup> <a name="Extensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensions"></a>

```go
func Extensions() GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList</a>

---

##### `MatchCondition`<sup>Required</sup> <a name="MatchCondition" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchCondition"></a>

```go
func MatchCondition() GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference</a>

---

##### `ExtensionsInput`<sup>Optional</sup> <a name="ExtensionsInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensionsInput"></a>

```go
func ExtensionsInput() interface{}
```

- *Type:* interface{}

---

##### `MatchConditionInput`<sup>Optional</sup> <a name="MatchConditionInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchConditionInput"></a>

```go
func MatchConditionInput() GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference <a name="GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceslbrouteextension"

googlenetworkserviceslbrouteextension.NewGoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



