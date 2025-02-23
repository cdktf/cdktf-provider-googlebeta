# `googleNetworkSecurityFirewallEndpoint` Submodule <a name="`googleNetworkSecurityFirewallEndpoint` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityFirewallEndpoint <a name="GoogleNetworkSecurityFirewallEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_firewall_endpoint google_network_security_firewall_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityfirewallendpoint"

googlenetworksecurityfirewallendpoint.NewGoogleNetworkSecurityFirewallEndpoint(scope Construct, id *string, config GoogleNetworkSecurityFirewallEndpointConfig) GoogleNetworkSecurityFirewallEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig">GoogleNetworkSecurityFirewallEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig">GoogleNetworkSecurityFirewallEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkSecurityFirewallEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts">GoogleNetworkSecurityFirewallEndpointTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityFirewallEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityfirewallendpoint"

googlenetworksecurityfirewallendpoint.GoogleNetworkSecurityFirewallEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityfirewallendpoint"

googlenetworksecurityfirewallendpoint.GoogleNetworkSecurityFirewallEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityfirewallendpoint"

googlenetworksecurityfirewallendpoint.GoogleNetworkSecurityFirewallEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityfirewallendpoint"

googlenetworksecurityfirewallendpoint.GoogleNetworkSecurityFirewallEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleNetworkSecurityFirewallEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkSecurityFirewallEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkSecurityFirewallEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_firewall_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityFirewallEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.associatedNetworks">AssociatedNetworks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference">GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.billingProjectIdInput">BillingProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.billingProjectId">BillingProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociatedNetworks`<sup>Required</sup> <a name="AssociatedNetworks" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.associatedNetworks"></a>

```go
func AssociatedNetworks() *[]*string
```

- *Type:* *[]*string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference">GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BillingProjectIdInput`<sup>Optional</sup> <a name="BillingProjectIdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.billingProjectIdInput"></a>

```go
func BillingProjectIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BillingProjectId`<sup>Required</sup> <a name="BillingProjectId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.billingProjectId"></a>

```go
func BillingProjectId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityFirewallEndpointConfig <a name="GoogleNetworkSecurityFirewallEndpointConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityfirewallendpoint"

&googlenetworksecurityfirewallendpoint.GoogleNetworkSecurityFirewallEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BillingProjectId: *string,
	Location: *string,
	Name: *string,
	Parent: *string,
	Id: *string,
	Labels: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.billingProjectId">BillingProjectId</a></code> | <code>*string</code> | Project to bill on endpoint uptime usage. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.location">Location</a></code> | <code>*string</code> | The location (zone) of the firewall endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.name">Name</a></code> | <code>*string</code> | The name of the firewall endpoint resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.parent">Parent</a></code> | <code>*string</code> | The name of the parent this firewall endpoint belongs to. Format: organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_firewall_endpoint#id GoogleNetworkSecurityFirewallEndpoint#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts">GoogleNetworkSecurityFirewallEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BillingProjectId`<sup>Required</sup> <a name="BillingProjectId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.billingProjectId"></a>

```go
BillingProjectId *string
```

- *Type:* *string

Project to bill on endpoint uptime usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_firewall_endpoint#billing_project_id GoogleNetworkSecurityFirewallEndpoint#billing_project_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location (zone) of the firewall endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_firewall_endpoint#location GoogleNetworkSecurityFirewallEndpoint#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the firewall endpoint resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_firewall_endpoint#name GoogleNetworkSecurityFirewallEndpoint#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The name of the parent this firewall endpoint belongs to. Format: organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_firewall_endpoint#parent GoogleNetworkSecurityFirewallEndpoint#parent}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_firewall_endpoint#id GoogleNetworkSecurityFirewallEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_firewall_endpoint#labels GoogleNetworkSecurityFirewallEndpoint#labels}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkSecurityFirewallEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts">GoogleNetworkSecurityFirewallEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_firewall_endpoint#timeouts GoogleNetworkSecurityFirewallEndpoint#timeouts}

---

### GoogleNetworkSecurityFirewallEndpointTimeouts <a name="GoogleNetworkSecurityFirewallEndpointTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityfirewallendpoint"

&googlenetworksecurityfirewallendpoint.GoogleNetworkSecurityFirewallEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_firewall_endpoint#create GoogleNetworkSecurityFirewallEndpoint#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_firewall_endpoint#delete GoogleNetworkSecurityFirewallEndpoint#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_firewall_endpoint#update GoogleNetworkSecurityFirewallEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_firewall_endpoint#create GoogleNetworkSecurityFirewallEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_firewall_endpoint#delete GoogleNetworkSecurityFirewallEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_firewall_endpoint#update GoogleNetworkSecurityFirewallEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference <a name="GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityfirewallendpoint"

googlenetworksecurityfirewallendpoint.NewGoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



