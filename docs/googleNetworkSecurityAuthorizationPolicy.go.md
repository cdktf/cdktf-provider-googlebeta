# `googleNetworkSecurityAuthorizationPolicy` Submodule <a name="`googleNetworkSecurityAuthorizationPolicy` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityAuthorizationPolicy <a name="GoogleNetworkSecurityAuthorizationPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy google_network_security_authorization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecurityauthorizationpolicy"

googlenetworksecurityauthorizationpolicy.NewGoogleNetworkSecurityAuthorizationPolicy(scope Construct, id *string, config GoogleNetworkSecurityAuthorizationPolicyConfig) GoogleNetworkSecurityAuthorizationPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig">GoogleNetworkSecurityAuthorizationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig">GoogleNetworkSecurityAuthorizationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkSecurityAuthorizationPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetRules"></a>

```go
func ResetRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityAuthorizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecurityauthorizationpolicy"

googlenetworksecurityauthorizationpolicy.GoogleNetworkSecurityAuthorizationPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecurityauthorizationpolicy"

googlenetworksecurityauthorizationpolicy.GoogleNetworkSecurityAuthorizationPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecurityauthorizationpolicy"

googlenetworksecurityauthorizationpolicy.GoogleNetworkSecurityAuthorizationPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecurityauthorizationpolicy"

googlenetworksecurityauthorizationpolicy.GoogleNetworkSecurityAuthorizationPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleNetworkSecurityAuthorizationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkSecurityAuthorizationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkSecurityAuthorizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityAuthorizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList">GoogleNetworkSecurityAuthorizationPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference">GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.rules"></a>

```go
func Rules() GoogleNetworkSecurityAuthorizationPolicyRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList">GoogleNetworkSecurityAuthorizationPolicyRulesList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference">GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityAuthorizationPolicyConfig <a name="GoogleNetworkSecurityAuthorizationPolicyConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecurityauthorizationpolicy"

&googlenetworksecurityauthorizationpolicy.GoogleNetworkSecurityAuthorizationPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: *string,
	Name: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Project: *string,
	Rules: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.action">Action</a></code> | <code>*string</code> | The action to take when a rule match is found. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the AuthorizationPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.description">Description</a></code> | <code>*string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#id GoogleNetworkSecurityAuthorizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of label tags associated with the AuthorizationPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.location">Location</a></code> | <code>*string</code> | The location of the authorization policy. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#project GoogleNetworkSecurityAuthorizationPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

The action to take when a rule match is found.

Possible values are "ALLOW" or "DENY". Possible values: ["ALLOW", "DENY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#action GoogleNetworkSecurityAuthorizationPolicy#action}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the AuthorizationPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#name GoogleNetworkSecurityAuthorizationPolicy#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#description GoogleNetworkSecurityAuthorizationPolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#id GoogleNetworkSecurityAuthorizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of label tags associated with the AuthorizationPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#labels GoogleNetworkSecurityAuthorizationPolicy#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the authorization policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#location GoogleNetworkSecurityAuthorizationPolicy#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#project GoogleNetworkSecurityAuthorizationPolicy#project}.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#rules GoogleNetworkSecurityAuthorizationPolicy#rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkSecurityAuthorizationPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#timeouts GoogleNetworkSecurityAuthorizationPolicy#timeouts}

---

### GoogleNetworkSecurityAuthorizationPolicyRules <a name="GoogleNetworkSecurityAuthorizationPolicyRules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecurityauthorizationpolicy"

&googlenetworksecurityauthorizationpolicy.GoogleNetworkSecurityAuthorizationPolicyRules {
	Destinations: interface{},
	Sources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules.property.destinations">Destinations</a></code> | <code>interface{}</code> | destinations block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules.property.sources">Sources</a></code> | <code>interface{}</code> | sources block. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules.property.destinations"></a>

```go
Destinations interface{}
```

- *Type:* interface{}

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#destinations GoogleNetworkSecurityAuthorizationPolicy#destinations}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules.property.sources"></a>

```go
Sources interface{}
```

- *Type:* interface{}

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#sources GoogleNetworkSecurityAuthorizationPolicy#sources}

---

### GoogleNetworkSecurityAuthorizationPolicyRulesDestinations <a name="GoogleNetworkSecurityAuthorizationPolicyRulesDestinations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecurityauthorizationpolicy"

&googlenetworksecurityauthorizationpolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations {
	Hosts: *[]*string,
	Methods: *[]*string,
	Ports: *[]*f64,
	HttpHeaderMatch: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.hosts">Hosts</a></code> | <code>*[]*string</code> | List of host names to match. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.methods">Methods</a></code> | <code>*[]*string</code> | A list of HTTP methods to match. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.ports">Ports</a></code> | <code>*[]*f64</code> | List of destination ports to match. At least one port should match. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.httpHeaderMatch">HttpHeaderMatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a></code> | http_header_match block. |

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.hosts"></a>

```go
Hosts *[]*string
```

- *Type:* *[]*string

List of host names to match.

Matched against the ":authority" header in http requests. At least one host should match. Each host can be an exact match, or a prefix match (example "mydomain.*") or a suffix match (example "*.myorg.com") or a presence (any) match "*".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#hosts GoogleNetworkSecurityAuthorizationPolicy#hosts}

---

##### `Methods`<sup>Required</sup> <a name="Methods" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.methods"></a>

```go
Methods *[]*string
```

- *Type:* *[]*string

A list of HTTP methods to match.

At least one method should match. Should not be set for gRPC services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#methods GoogleNetworkSecurityAuthorizationPolicy#methods}

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.ports"></a>

```go
Ports *[]*f64
```

- *Type:* *[]*f64

List of destination ports to match. At least one port should match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#ports GoogleNetworkSecurityAuthorizationPolicy#ports}

---

##### `HttpHeaderMatch`<sup>Optional</sup> <a name="HttpHeaderMatch" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.httpHeaderMatch"></a>

```go
HttpHeaderMatch GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a>

http_header_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#http_header_match GoogleNetworkSecurityAuthorizationPolicy#http_header_match}

---

### GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch <a name="GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecurityauthorizationpolicy"

&googlenetworksecurityauthorizationpolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch {
	HeaderName: *string,
	RegexMatch: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch.property.headerName">HeaderName</a></code> | <code>*string</code> | The name of the HTTP header to match. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch.property.regexMatch">RegexMatch</a></code> | <code>*string</code> | The value of the header must match the regular expression specified in regexMatch. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

The name of the HTTP header to match.

For matching against the HTTP request's authority, use a headerMatch with the header name ":authority". For matching a request's method, use the headerName ":method".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#header_name GoogleNetworkSecurityAuthorizationPolicy#header_name}

---

##### `RegexMatch`<sup>Required</sup> <a name="RegexMatch" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch.property.regexMatch"></a>

```go
RegexMatch *string
```

- *Type:* *string

The value of the header must match the regular expression specified in regexMatch.

For regular expression grammar, please see: en.cppreference.com/w/cpp/regex/ecmascript For matching against a port specified in the HTTP request, use a headerMatch with headerName set to Host and a regular expression that satisfies the RFC2616 Host header's port specifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#regex_match GoogleNetworkSecurityAuthorizationPolicy#regex_match}

---

### GoogleNetworkSecurityAuthorizationPolicyRulesSources <a name="GoogleNetworkSecurityAuthorizationPolicyRulesSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecurityauthorizationpolicy"

&googlenetworksecurityauthorizationpolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources {
	IpBlocks: *[]*string,
	Principals: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources.property.ipBlocks">IpBlocks</a></code> | <code>*[]*string</code> | List of CIDR ranges to match based on source IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources.property.principals">Principals</a></code> | <code>*[]*string</code> | List of peer identities to match for authorization. |

---

##### `IpBlocks`<sup>Optional</sup> <a name="IpBlocks" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources.property.ipBlocks"></a>

```go
IpBlocks *[]*string
```

- *Type:* *[]*string

List of CIDR ranges to match based on source IP address.

At least one IP block should match. Single IP (e.g., "1.2.3.4") and CIDR (e.g., "1.2.3.0/24") are supported. Authorization based on source IP alone should be avoided.
The IP addresses of any load balancers or proxies should be considered untrusted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#ip_blocks GoogleNetworkSecurityAuthorizationPolicy#ip_blocks}

---

##### `Principals`<sup>Optional</sup> <a name="Principals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources.property.principals"></a>

```go
Principals *[]*string
```

- *Type:* *[]*string

List of peer identities to match for authorization.

At least one principal should match. Each peer can be an exact match, or a prefix match (example, "namespace/*") or a suffix match (example, "* /service-account") or a presence match "*".
Authorization based on the principal name without certificate validation (configured by ServerTlsPolicy resource) is considered insecure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#principals GoogleNetworkSecurityAuthorizationPolicy#principals}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleNetworkSecurityAuthorizationPolicyTimeouts <a name="GoogleNetworkSecurityAuthorizationPolicyTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecurityauthorizationpolicy"

&googlenetworksecurityauthorizationpolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#create GoogleNetworkSecurityAuthorizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#delete GoogleNetworkSecurityAuthorizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#update GoogleNetworkSecurityAuthorizationPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#create GoogleNetworkSecurityAuthorizationPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#delete GoogleNetworkSecurityAuthorizationPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authorization_policy#update GoogleNetworkSecurityAuthorizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference <a name="GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecurityauthorizationpolicy"

googlenetworksecurityauthorizationpolicy.NewGoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.regexMatchInput">RegexMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.regexMatch">RegexMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `RegexMatchInput`<sup>Optional</sup> <a name="RegexMatchInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.regexMatchInput"></a>

```go
func RegexMatchInput() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `RegexMatch`<sup>Required</sup> <a name="RegexMatch" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.regexMatch"></a>

```go
func RegexMatch() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a>

---


### GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList <a name="GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecurityauthorizationpolicy"

googlenetworksecurityauthorizationpolicy.NewGoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.get"></a>

```go
func Get(index *f64) GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference <a name="GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecurityauthorizationpolicy"

googlenetworksecurityauthorizationpolicy.NewGoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.putHttpHeaderMatch">PutHttpHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.resetHttpHeaderMatch">ResetHttpHeaderMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpHeaderMatch` <a name="PutHttpHeaderMatch" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.putHttpHeaderMatch"></a>

```go
func PutHttpHeaderMatch(value GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.putHttpHeaderMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a>

---

##### `ResetHttpHeaderMatch` <a name="ResetHttpHeaderMatch" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.resetHttpHeaderMatch"></a>

```go
func ResetHttpHeaderMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.httpHeaderMatch">HttpHeaderMatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.hostsInput">HostsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.httpHeaderMatchInput">HttpHeaderMatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.methodsInput">MethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.portsInput">PortsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.hosts">Hosts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.methods">Methods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.ports">Ports</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpHeaderMatch`<sup>Required</sup> <a name="HttpHeaderMatch" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.httpHeaderMatch"></a>

```go
func HttpHeaderMatch() GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference</a>

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.hostsInput"></a>

```go
func HostsInput() *[]*string
```

- *Type:* *[]*string

---

##### `HttpHeaderMatchInput`<sup>Optional</sup> <a name="HttpHeaderMatchInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.httpHeaderMatchInput"></a>

```go
func HttpHeaderMatchInput() GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a>

---

##### `MethodsInput`<sup>Optional</sup> <a name="MethodsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.methodsInput"></a>

```go
func MethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.portsInput"></a>

```go
func PortsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.hosts"></a>

```go
func Hosts() *[]*string
```

- *Type:* *[]*string

---

##### `Methods`<sup>Required</sup> <a name="Methods" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.methods"></a>

```go
func Methods() *[]*string
```

- *Type:* *[]*string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.ports"></a>

```go
func Ports() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthorizationPolicyRulesList <a name="GoogleNetworkSecurityAuthorizationPolicyRulesList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecurityauthorizationpolicy"

googlenetworksecurityauthorizationpolicy.NewGoogleNetworkSecurityAuthorizationPolicyRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkSecurityAuthorizationPolicyRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.get"></a>

```go
func Get(index *f64) GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference <a name="GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecurityauthorizationpolicy"

googlenetworksecurityauthorizationpolicy.NewGoogleNetworkSecurityAuthorizationPolicyRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putDestinations"></a>

```go
func PutDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSources` <a name="PutSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putSources"></a>

```go
func PutSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putSources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resetDestinations"></a>

```go
func ResetDestinations()
```

##### `ResetSources` <a name="ResetSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resetSources"></a>

```go
func ResetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList">GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.destinations"></a>

```go
func Destinations() GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList</a>

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.sources"></a>

```go
func Sources() GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList">GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.destinationsInput"></a>

```go
func DestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.sourcesInput"></a>

```go
func SourcesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList <a name="GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecurityauthorizationpolicy"

googlenetworksecurityauthorizationpolicy.NewGoogleNetworkSecurityAuthorizationPolicyRulesSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.get"></a>

```go
func Get(index *f64) GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference <a name="GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecurityauthorizationpolicy"

googlenetworksecurityauthorizationpolicy.NewGoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resetIpBlocks">ResetIpBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resetPrincipals">ResetPrincipals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpBlocks` <a name="ResetIpBlocks" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resetIpBlocks"></a>

```go
func ResetIpBlocks()
```

##### `ResetPrincipals` <a name="ResetPrincipals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resetPrincipals"></a>

```go
func ResetPrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.ipBlocksInput">IpBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.principalsInput">PrincipalsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.ipBlocks">IpBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.principals">Principals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpBlocksInput`<sup>Optional</sup> <a name="IpBlocksInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.ipBlocksInput"></a>

```go
func IpBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.principalsInput"></a>

```go
func PrincipalsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpBlocks`<sup>Required</sup> <a name="IpBlocks" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.ipBlocks"></a>

```go
func IpBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.principals"></a>

```go
func Principals() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference <a name="GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecurityauthorizationpolicy"

googlenetworksecurityauthorizationpolicy.NewGoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



