# `googleComputeGlobalNetworkEndpointGroup` Submodule <a name="`googleComputeGlobalNetworkEndpointGroup` Submodule" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeGlobalNetworkEndpointGroup <a name="GoogleComputeGlobalNetworkEndpointGroup" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_global_network_endpoint_group google_compute_global_network_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeglobalnetworkendpointgroup"

googlecomputeglobalnetworkendpointgroup.NewGoogleComputeGlobalNetworkEndpointGroup(scope Construct, id *string, config GoogleComputeGlobalNetworkEndpointGroupConfig) GoogleComputeGlobalNetworkEndpointGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig">GoogleComputeGlobalNetworkEndpointGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig">GoogleComputeGlobalNetworkEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.resetDefaultPort">ResetDefaultPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeGlobalNetworkEndpointGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeouts">GoogleComputeGlobalNetworkEndpointGroupTimeouts</a>

---

##### `ResetDefaultPort` <a name="ResetDefaultPort" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.resetDefaultPort"></a>

```go
func ResetDefaultPort()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeGlobalNetworkEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeglobalnetworkendpointgroup"

googlecomputeglobalnetworkendpointgroup.GoogleComputeGlobalNetworkEndpointGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeglobalnetworkendpointgroup"

googlecomputeglobalnetworkendpointgroup.GoogleComputeGlobalNetworkEndpointGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeglobalnetworkendpointgroup"

googlecomputeglobalnetworkendpointgroup.GoogleComputeGlobalNetworkEndpointGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeglobalnetworkendpointgroup"

googlecomputeglobalnetworkendpointgroup.GoogleComputeGlobalNetworkEndpointGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeGlobalNetworkEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeGlobalNetworkEndpointGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeGlobalNetworkEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_global_network_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeGlobalNetworkEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference">GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.defaultPortInput">DefaultPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.networkEndpointTypeInput">NetworkEndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.defaultPort">DefaultPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.networkEndpointType">NetworkEndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.timeouts"></a>

```go
func Timeouts() GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference">GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference</a>

---

##### `DefaultPortInput`<sup>Optional</sup> <a name="DefaultPortInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.defaultPortInput"></a>

```go
func DefaultPortInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkEndpointTypeInput`<sup>Optional</sup> <a name="NetworkEndpointTypeInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.networkEndpointTypeInput"></a>

```go
func NetworkEndpointTypeInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultPort`<sup>Required</sup> <a name="DefaultPort" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.defaultPort"></a>

```go
func DefaultPort() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkEndpointType`<sup>Required</sup> <a name="NetworkEndpointType" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.networkEndpointType"></a>

```go
func NetworkEndpointType() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeGlobalNetworkEndpointGroupConfig <a name="GoogleComputeGlobalNetworkEndpointGroupConfig" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeglobalnetworkendpointgroup"

&googlecomputeglobalnetworkendpointgroup.GoogleComputeGlobalNetworkEndpointGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	NetworkEndpointType: *string,
	DefaultPort: *f64,
	Description: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.networkEndpointType">NetworkEndpointType</a></code> | <code>*string</code> | Type of network endpoints in this network endpoint group. Possible values: ["INTERNET_IP_PORT", "INTERNET_FQDN_PORT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.defaultPort">DefaultPort</a></code> | <code>*f64</code> | The default port used if the port number is not specified in the network endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_global_network_endpoint_group#id GoogleComputeGlobalNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_global_network_endpoint_group#project GoogleComputeGlobalNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeouts">GoogleComputeGlobalNetworkEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_global_network_endpoint_group#name GoogleComputeGlobalNetworkEndpointGroup#name}

---

##### `NetworkEndpointType`<sup>Required</sup> <a name="NetworkEndpointType" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.networkEndpointType"></a>

```go
NetworkEndpointType *string
```

- *Type:* *string

Type of network endpoints in this network endpoint group. Possible values: ["INTERNET_IP_PORT", "INTERNET_FQDN_PORT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_global_network_endpoint_group#network_endpoint_type GoogleComputeGlobalNetworkEndpointGroup#network_endpoint_type}

---

##### `DefaultPort`<sup>Optional</sup> <a name="DefaultPort" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.defaultPort"></a>

```go
DefaultPort *f64
```

- *Type:* *f64

The default port used if the port number is not specified in the network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_global_network_endpoint_group#default_port GoogleComputeGlobalNetworkEndpointGroup#default_port}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_global_network_endpoint_group#description GoogleComputeGlobalNetworkEndpointGroup#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_global_network_endpoint_group#id GoogleComputeGlobalNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_global_network_endpoint_group#project GoogleComputeGlobalNetworkEndpointGroup#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeGlobalNetworkEndpointGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeouts">GoogleComputeGlobalNetworkEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_global_network_endpoint_group#timeouts GoogleComputeGlobalNetworkEndpointGroup#timeouts}

---

### GoogleComputeGlobalNetworkEndpointGroupTimeouts <a name="GoogleComputeGlobalNetworkEndpointGroupTimeouts" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeglobalnetworkendpointgroup"

&googlecomputeglobalnetworkendpointgroup.GoogleComputeGlobalNetworkEndpointGroupTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_global_network_endpoint_group#create GoogleComputeGlobalNetworkEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_global_network_endpoint_group#delete GoogleComputeGlobalNetworkEndpointGroup#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_global_network_endpoint_group#create GoogleComputeGlobalNetworkEndpointGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_global_network_endpoint_group#delete GoogleComputeGlobalNetworkEndpointGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference <a name="GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeglobalnetworkendpointgroup"

googlecomputeglobalnetworkendpointgroup.NewGoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpointGroup.GoogleComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



