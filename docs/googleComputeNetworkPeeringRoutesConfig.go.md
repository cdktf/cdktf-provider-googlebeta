# `googleComputeNetworkPeeringRoutesConfig` Submodule <a name="`googleComputeNetworkPeeringRoutesConfig` Submodule" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNetworkPeeringRoutesConfig <a name="GoogleComputeNetworkPeeringRoutesConfig" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_network_peering_routes_config google_compute_network_peering_routes_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkpeeringroutesconfig"

googlecomputenetworkpeeringroutesconfig.NewGoogleComputeNetworkPeeringRoutesConfig(scope Construct, id *string, config GoogleComputeNetworkPeeringRoutesConfigConfig) GoogleComputeNetworkPeeringRoutesConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig">GoogleComputeNetworkPeeringRoutesConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig">GoogleComputeNetworkPeeringRoutesConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeNetworkPeeringRoutesConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts">GoogleComputeNetworkPeeringRoutesConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeNetworkPeeringRoutesConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkpeeringroutesconfig"

googlecomputenetworkpeeringroutesconfig.GoogleComputeNetworkPeeringRoutesConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkpeeringroutesconfig"

googlecomputenetworkpeeringroutesconfig.GoogleComputeNetworkPeeringRoutesConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkpeeringroutesconfig"

googlecomputenetworkpeeringroutesconfig.GoogleComputeNetworkPeeringRoutesConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkpeeringroutesconfig"

googlecomputenetworkpeeringroutesconfig.GoogleComputeNetworkPeeringRoutesConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeNetworkPeeringRoutesConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeNetworkPeeringRoutesConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeNetworkPeeringRoutesConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_network_peering_routes_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeNetworkPeeringRoutesConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference">GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportCustomRoutesInput">ExportCustomRoutesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importCustomRoutesInput">ImportCustomRoutesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.peeringInput">PeeringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportCustomRoutes">ExportCustomRoutes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importCustomRoutes">ImportCustomRoutes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.peering">Peering</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.timeouts"></a>

```go
func Timeouts() GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference">GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference</a>

---

##### `ExportCustomRoutesInput`<sup>Optional</sup> <a name="ExportCustomRoutesInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportCustomRoutesInput"></a>

```go
func ExportCustomRoutesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImportCustomRoutesInput`<sup>Optional</sup> <a name="ImportCustomRoutesInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importCustomRoutesInput"></a>

```go
func ImportCustomRoutesInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `PeeringInput`<sup>Optional</sup> <a name="PeeringInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.peeringInput"></a>

```go
func PeeringInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ExportCustomRoutes`<sup>Required</sup> <a name="ExportCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportCustomRoutes"></a>

```go
func ExportCustomRoutes() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportCustomRoutes`<sup>Required</sup> <a name="ImportCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importCustomRoutes"></a>

```go
func ImportCustomRoutes() interface{}
```

- *Type:* interface{}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Peering`<sup>Required</sup> <a name="Peering" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.peering"></a>

```go
func Peering() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNetworkPeeringRoutesConfigConfig <a name="GoogleComputeNetworkPeeringRoutesConfigConfig" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkpeeringroutesconfig"

&googlecomputenetworkpeeringroutesconfig.GoogleComputeNetworkPeeringRoutesConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExportCustomRoutes: interface{},
	ImportCustomRoutes: interface{},
	Network: *string,
	Peering: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.exportCustomRoutes">ExportCustomRoutes</a></code> | <code>interface{}</code> | Whether to export the custom routes to the peer network. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.importCustomRoutes">ImportCustomRoutes</a></code> | <code>interface{}</code> | Whether to import the custom routes to the peer network. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.network">Network</a></code> | <code>*string</code> | The name of the primary network for the peering. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.peering">Peering</a></code> | <code>*string</code> | Name of the peering. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_network_peering_routes_config#id GoogleComputeNetworkPeeringRoutesConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_network_peering_routes_config#project GoogleComputeNetworkPeeringRoutesConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts">GoogleComputeNetworkPeeringRoutesConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExportCustomRoutes`<sup>Required</sup> <a name="ExportCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.exportCustomRoutes"></a>

```go
ExportCustomRoutes interface{}
```

- *Type:* interface{}

Whether to export the custom routes to the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_network_peering_routes_config#export_custom_routes GoogleComputeNetworkPeeringRoutesConfig#export_custom_routes}

---

##### `ImportCustomRoutes`<sup>Required</sup> <a name="ImportCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.importCustomRoutes"></a>

```go
ImportCustomRoutes interface{}
```

- *Type:* interface{}

Whether to import the custom routes to the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_network_peering_routes_config#import_custom_routes GoogleComputeNetworkPeeringRoutesConfig#import_custom_routes}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The name of the primary network for the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_network_peering_routes_config#network GoogleComputeNetworkPeeringRoutesConfig#network}

---

##### `Peering`<sup>Required</sup> <a name="Peering" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.peering"></a>

```go
Peering *string
```

- *Type:* *string

Name of the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_network_peering_routes_config#peering GoogleComputeNetworkPeeringRoutesConfig#peering}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_network_peering_routes_config#id GoogleComputeNetworkPeeringRoutesConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_network_peering_routes_config#project GoogleComputeNetworkPeeringRoutesConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeNetworkPeeringRoutesConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts">GoogleComputeNetworkPeeringRoutesConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_network_peering_routes_config#timeouts GoogleComputeNetworkPeeringRoutesConfig#timeouts}

---

### GoogleComputeNetworkPeeringRoutesConfigTimeouts <a name="GoogleComputeNetworkPeeringRoutesConfigTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkpeeringroutesconfig"

&googlecomputenetworkpeeringroutesconfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_network_peering_routes_config#create GoogleComputeNetworkPeeringRoutesConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_network_peering_routes_config#delete GoogleComputeNetworkPeeringRoutesConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_network_peering_routes_config#update GoogleComputeNetworkPeeringRoutesConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_network_peering_routes_config#create GoogleComputeNetworkPeeringRoutesConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_network_peering_routes_config#delete GoogleComputeNetworkPeeringRoutesConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_network_peering_routes_config#update GoogleComputeNetworkPeeringRoutesConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference <a name="GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkpeeringroutesconfig"

googlecomputenetworkpeeringroutesconfig.NewGoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



