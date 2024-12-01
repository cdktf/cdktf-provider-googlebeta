# `googleComputeRegionNetworkFirewallPolicy` Submodule <a name="`googleComputeRegionNetworkFirewallPolicy` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionNetworkFirewallPolicy <a name="GoogleComputeRegionNetworkFirewallPolicy" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_region_network_firewall_policy google_compute_region_network_firewall_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionnetworkfirewallpolicy"

googlecomputeregionnetworkfirewallpolicy.NewGoogleComputeRegionNetworkFirewallPolicy(scope Construct, id *string, config GoogleComputeRegionNetworkFirewallPolicyConfig) GoogleComputeRegionNetworkFirewallPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig">GoogleComputeRegionNetworkFirewallPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig">GoogleComputeRegionNetworkFirewallPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeRegionNetworkFirewallPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeouts">GoogleComputeRegionNetworkFirewallPolicyTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionNetworkFirewallPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionnetworkfirewallpolicy"

googlecomputeregionnetworkfirewallpolicy.GoogleComputeRegionNetworkFirewallPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionnetworkfirewallpolicy"

googlecomputeregionnetworkfirewallpolicy.GoogleComputeRegionNetworkFirewallPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionnetworkfirewallpolicy"

googlecomputeregionnetworkfirewallpolicy.GoogleComputeRegionNetworkFirewallPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionnetworkfirewallpolicy"

googlecomputeregionnetworkfirewallpolicy.GoogleComputeRegionNetworkFirewallPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeRegionNetworkFirewallPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeRegionNetworkFirewallPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeRegionNetworkFirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_region_network_firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionNetworkFirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.regionNetworkFirewallPolicyId">RegionNetworkFirewallPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.ruleTupleCount">RuleTupleCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.selfLinkWithId">SelfLinkWithId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference">GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `RegionNetworkFirewallPolicyId`<sup>Required</sup> <a name="RegionNetworkFirewallPolicyId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.regionNetworkFirewallPolicyId"></a>

```go
func RegionNetworkFirewallPolicyId() *string
```

- *Type:* *string

---

##### `RuleTupleCount`<sup>Required</sup> <a name="RuleTupleCount" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.ruleTupleCount"></a>

```go
func RuleTupleCount() *f64
```

- *Type:* *f64

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `SelfLinkWithId`<sup>Required</sup> <a name="SelfLinkWithId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.selfLinkWithId"></a>

```go
func SelfLinkWithId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference">GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionNetworkFirewallPolicyConfig <a name="GoogleComputeRegionNetworkFirewallPolicyConfig" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionnetworkfirewallpolicy"

&googlecomputeregionnetworkfirewallpolicy.GoogleComputeRegionNetworkFirewallPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	Id: *string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.name">Name</a></code> | <code>*string</code> | User-provided name of the Network firewall policy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_region_network_firewall_policy#id GoogleComputeRegionNetworkFirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_region_network_firewall_policy#project GoogleComputeRegionNetworkFirewallPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.region">Region</a></code> | <code>*string</code> | The region of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeouts">GoogleComputeRegionNetworkFirewallPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

User-provided name of the Network firewall policy.

The name should be unique in the project in which the firewall policy is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_region_network_firewall_policy#name GoogleComputeRegionNetworkFirewallPolicy#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_region_network_firewall_policy#description GoogleComputeRegionNetworkFirewallPolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_region_network_firewall_policy#id GoogleComputeRegionNetworkFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_region_network_firewall_policy#project GoogleComputeRegionNetworkFirewallPolicy#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_region_network_firewall_policy#region GoogleComputeRegionNetworkFirewallPolicy#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeRegionNetworkFirewallPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeouts">GoogleComputeRegionNetworkFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_region_network_firewall_policy#timeouts GoogleComputeRegionNetworkFirewallPolicy#timeouts}

---

### GoogleComputeRegionNetworkFirewallPolicyTimeouts <a name="GoogleComputeRegionNetworkFirewallPolicyTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionnetworkfirewallpolicy"

&googlecomputeregionnetworkfirewallpolicy.GoogleComputeRegionNetworkFirewallPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_region_network_firewall_policy#create GoogleComputeRegionNetworkFirewallPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_region_network_firewall_policy#delete GoogleComputeRegionNetworkFirewallPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_region_network_firewall_policy#update GoogleComputeRegionNetworkFirewallPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_region_network_firewall_policy#create GoogleComputeRegionNetworkFirewallPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_region_network_firewall_policy#delete GoogleComputeRegionNetworkFirewallPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_region_network_firewall_policy#update GoogleComputeRegionNetworkFirewallPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionnetworkfirewallpolicy"

googlecomputeregionnetworkfirewallpolicy.NewGoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicy.GoogleComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



