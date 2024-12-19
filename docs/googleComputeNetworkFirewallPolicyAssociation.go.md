# `googleComputeNetworkFirewallPolicyAssociation` Submodule <a name="`googleComputeNetworkFirewallPolicyAssociation` Submodule" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNetworkFirewallPolicyAssociation <a name="GoogleComputeNetworkFirewallPolicyAssociation" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_network_firewall_policy_association google_compute_network_firewall_policy_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicyassociation"

googlecomputenetworkfirewallpolicyassociation.NewGoogleComputeNetworkFirewallPolicyAssociation(scope Construct, id *string, config GoogleComputeNetworkFirewallPolicyAssociationConfig) GoogleComputeNetworkFirewallPolicyAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig">GoogleComputeNetworkFirewallPolicyAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig">GoogleComputeNetworkFirewallPolicyAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeNetworkFirewallPolicyAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts">GoogleComputeNetworkFirewallPolicyAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeNetworkFirewallPolicyAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicyassociation"

googlecomputenetworkfirewallpolicyassociation.GoogleComputeNetworkFirewallPolicyAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicyassociation"

googlecomputenetworkfirewallpolicyassociation.GoogleComputeNetworkFirewallPolicyAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicyassociation"

googlecomputenetworkfirewallpolicyassociation.GoogleComputeNetworkFirewallPolicyAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicyassociation"

googlecomputenetworkfirewallpolicyassociation.GoogleComputeNetworkFirewallPolicyAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeNetworkFirewallPolicyAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeNetworkFirewallPolicyAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeNetworkFirewallPolicyAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_network_firewall_policy_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeNetworkFirewallPolicyAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.shortName">ShortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference">GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.attachmentTargetInput">AttachmentTargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.firewallPolicyInput">FirewallPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.attachmentTarget">AttachmentTarget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.firewallPolicy">FirewallPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.shortName"></a>

```go
func ShortName() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.timeouts"></a>

```go
func Timeouts() GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference">GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference</a>

---

##### `AttachmentTargetInput`<sup>Optional</sup> <a name="AttachmentTargetInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.attachmentTargetInput"></a>

```go
func AttachmentTargetInput() *string
```

- *Type:* *string

---

##### `FirewallPolicyInput`<sup>Optional</sup> <a name="FirewallPolicyInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.firewallPolicyInput"></a>

```go
func FirewallPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AttachmentTarget`<sup>Required</sup> <a name="AttachmentTarget" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.attachmentTarget"></a>

```go
func AttachmentTarget() *string
```

- *Type:* *string

---

##### `FirewallPolicy`<sup>Required</sup> <a name="FirewallPolicy" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.firewallPolicy"></a>

```go
func FirewallPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNetworkFirewallPolicyAssociationConfig <a name="GoogleComputeNetworkFirewallPolicyAssociationConfig" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicyassociation"

&googlecomputenetworkfirewallpolicyassociation.GoogleComputeNetworkFirewallPolicyAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AttachmentTarget: *string,
	FirewallPolicy: *string,
	Name: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.attachmentTarget">AttachmentTarget</a></code> | <code>*string</code> | The target that the firewall policy is attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.firewallPolicy">FirewallPolicy</a></code> | <code>*string</code> | The firewall policy of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.name">Name</a></code> | <code>*string</code> | The name for an association. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_network_firewall_policy_association#id GoogleComputeNetworkFirewallPolicyAssociation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_network_firewall_policy_association#project GoogleComputeNetworkFirewallPolicyAssociation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts">GoogleComputeNetworkFirewallPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttachmentTarget`<sup>Required</sup> <a name="AttachmentTarget" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.attachmentTarget"></a>

```go
AttachmentTarget *string
```

- *Type:* *string

The target that the firewall policy is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_network_firewall_policy_association#attachment_target GoogleComputeNetworkFirewallPolicyAssociation#attachment_target}

---

##### `FirewallPolicy`<sup>Required</sup> <a name="FirewallPolicy" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.firewallPolicy"></a>

```go
FirewallPolicy *string
```

- *Type:* *string

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_network_firewall_policy_association#firewall_policy GoogleComputeNetworkFirewallPolicyAssociation#firewall_policy}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for an association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_network_firewall_policy_association#name GoogleComputeNetworkFirewallPolicyAssociation#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_network_firewall_policy_association#id GoogleComputeNetworkFirewallPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_network_firewall_policy_association#project GoogleComputeNetworkFirewallPolicyAssociation#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeNetworkFirewallPolicyAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts">GoogleComputeNetworkFirewallPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_network_firewall_policy_association#timeouts GoogleComputeNetworkFirewallPolicyAssociation#timeouts}

---

### GoogleComputeNetworkFirewallPolicyAssociationTimeouts <a name="GoogleComputeNetworkFirewallPolicyAssociationTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicyassociation"

&googlecomputenetworkfirewallpolicyassociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_network_firewall_policy_association#create GoogleComputeNetworkFirewallPolicyAssociation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_network_firewall_policy_association#delete GoogleComputeNetworkFirewallPolicyAssociation#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_network_firewall_policy_association#create GoogleComputeNetworkFirewallPolicyAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_network_firewall_policy_association#delete GoogleComputeNetworkFirewallPolicyAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference <a name="GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicyassociation"

googlecomputenetworkfirewallpolicyassociation.NewGoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



