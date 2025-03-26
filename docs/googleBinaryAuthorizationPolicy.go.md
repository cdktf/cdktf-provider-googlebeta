# `googleBinaryAuthorizationPolicy` Submodule <a name="`googleBinaryAuthorizationPolicy` Submodule" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBinaryAuthorizationPolicy <a name="GoogleBinaryAuthorizationPolicy" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy google_binary_authorization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebinaryauthorizationpolicy"

googlebinaryauthorizationpolicy.NewGoogleBinaryAuthorizationPolicy(scope Construct, id *string, config GoogleBinaryAuthorizationPolicyConfig) GoogleBinaryAuthorizationPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig">GoogleBinaryAuthorizationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig">GoogleBinaryAuthorizationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putAdmissionWhitelistPatterns">PutAdmissionWhitelistPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putClusterAdmissionRules">PutClusterAdmissionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putDefaultAdmissionRule">PutDefaultAdmissionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetAdmissionWhitelistPatterns">ResetAdmissionWhitelistPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetClusterAdmissionRules">ResetClusterAdmissionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetGlobalPolicyEvaluationMode">ResetGlobalPolicyEvaluationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdmissionWhitelistPatterns` <a name="PutAdmissionWhitelistPatterns" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putAdmissionWhitelistPatterns"></a>

```go
func PutAdmissionWhitelistPatterns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putAdmissionWhitelistPatterns.parameter.value"></a>

- *Type:* interface{}

---

##### `PutClusterAdmissionRules` <a name="PutClusterAdmissionRules" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putClusterAdmissionRules"></a>

```go
func PutClusterAdmissionRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putClusterAdmissionRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDefaultAdmissionRule` <a name="PutDefaultAdmissionRule" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putDefaultAdmissionRule"></a>

```go
func PutDefaultAdmissionRule(value GoogleBinaryAuthorizationPolicyDefaultAdmissionRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putDefaultAdmissionRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule">GoogleBinaryAuthorizationPolicyDefaultAdmissionRule</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleBinaryAuthorizationPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts">GoogleBinaryAuthorizationPolicyTimeouts</a>

---

##### `ResetAdmissionWhitelistPatterns` <a name="ResetAdmissionWhitelistPatterns" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetAdmissionWhitelistPatterns"></a>

```go
func ResetAdmissionWhitelistPatterns()
```

##### `ResetClusterAdmissionRules` <a name="ResetClusterAdmissionRules" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetClusterAdmissionRules"></a>

```go
func ResetClusterAdmissionRules()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGlobalPolicyEvaluationMode` <a name="ResetGlobalPolicyEvaluationMode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetGlobalPolicyEvaluationMode"></a>

```go
func ResetGlobalPolicyEvaluationMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBinaryAuthorizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebinaryauthorizationpolicy"

googlebinaryauthorizationpolicy.GoogleBinaryAuthorizationPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebinaryauthorizationpolicy"

googlebinaryauthorizationpolicy.GoogleBinaryAuthorizationPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebinaryauthorizationpolicy"

googlebinaryauthorizationpolicy.GoogleBinaryAuthorizationPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebinaryauthorizationpolicy"

googlebinaryauthorizationpolicy.GoogleBinaryAuthorizationPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleBinaryAuthorizationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleBinaryAuthorizationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleBinaryAuthorizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBinaryAuthorizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.admissionWhitelistPatterns">AdmissionWhitelistPatterns</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.clusterAdmissionRules">ClusterAdmissionRules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList">GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.defaultAdmissionRule">DefaultAdmissionRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference">GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference">GoogleBinaryAuthorizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.admissionWhitelistPatternsInput">AdmissionWhitelistPatternsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.clusterAdmissionRulesInput">ClusterAdmissionRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.defaultAdmissionRuleInput">DefaultAdmissionRuleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule">GoogleBinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.globalPolicyEvaluationModeInput">GlobalPolicyEvaluationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.globalPolicyEvaluationMode">GlobalPolicyEvaluationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdmissionWhitelistPatterns`<sup>Required</sup> <a name="AdmissionWhitelistPatterns" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.admissionWhitelistPatterns"></a>

```go
func AdmissionWhitelistPatterns() GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList</a>

---

##### `ClusterAdmissionRules`<sup>Required</sup> <a name="ClusterAdmissionRules" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.clusterAdmissionRules"></a>

```go
func ClusterAdmissionRules() GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList">GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList</a>

---

##### `DefaultAdmissionRule`<sup>Required</sup> <a name="DefaultAdmissionRule" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.defaultAdmissionRule"></a>

```go
func DefaultAdmissionRule() GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference">GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleBinaryAuthorizationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference">GoogleBinaryAuthorizationPolicyTimeoutsOutputReference</a>

---

##### `AdmissionWhitelistPatternsInput`<sup>Optional</sup> <a name="AdmissionWhitelistPatternsInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.admissionWhitelistPatternsInput"></a>

```go
func AdmissionWhitelistPatternsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterAdmissionRulesInput`<sup>Optional</sup> <a name="ClusterAdmissionRulesInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.clusterAdmissionRulesInput"></a>

```go
func ClusterAdmissionRulesInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultAdmissionRuleInput`<sup>Optional</sup> <a name="DefaultAdmissionRuleInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.defaultAdmissionRuleInput"></a>

```go
func DefaultAdmissionRuleInput() GoogleBinaryAuthorizationPolicyDefaultAdmissionRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule">GoogleBinaryAuthorizationPolicyDefaultAdmissionRule</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GlobalPolicyEvaluationModeInput`<sup>Optional</sup> <a name="GlobalPolicyEvaluationModeInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.globalPolicyEvaluationModeInput"></a>

```go
func GlobalPolicyEvaluationModeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GlobalPolicyEvaluationMode`<sup>Required</sup> <a name="GlobalPolicyEvaluationMode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.globalPolicyEvaluationMode"></a>

```go
func GlobalPolicyEvaluationMode() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns <a name="GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebinaryauthorizationpolicy"

&googlebinaryauthorizationpolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns {
	NamePattern: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns.property.namePattern">NamePattern</a></code> | <code>*string</code> | An image name pattern to whitelist, in the form 'registry/path/to/image'. |

---

##### `NamePattern`<sup>Required</sup> <a name="NamePattern" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns.property.namePattern"></a>

```go
NamePattern *string
```

- *Type:* *string

An image name pattern to whitelist, in the form 'registry/path/to/image'.

This supports a trailing * as a
wildcard, but this is allowed only in text after the registry/
part.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#name_pattern GoogleBinaryAuthorizationPolicy#name_pattern}

---

### GoogleBinaryAuthorizationPolicyClusterAdmissionRules <a name="GoogleBinaryAuthorizationPolicyClusterAdmissionRules" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebinaryauthorizationpolicy"

&googlebinaryauthorizationpolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules {
	Cluster: *string,
	EnforcementMode: *string,
	EvaluationMode: *string,
	RequireAttestationsBy: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.cluster">Cluster</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#cluster GoogleBinaryAuthorizationPolicy#cluster}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.enforcementMode">EnforcementMode</a></code> | <code>*string</code> | The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.evaluationMode">EvaluationMode</a></code> | <code>*string</code> | How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.requireAttestationsBy">RequireAttestationsBy</a></code> | <code>*[]*string</code> | The resource names of the attestors that must attest to a container image. |

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#cluster GoogleBinaryAuthorizationPolicy#cluster}.

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.enforcementMode"></a>

```go
EnforcementMode *string
```

- *Type:* *string

The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#enforcement_mode GoogleBinaryAuthorizationPolicy#enforcement_mode}

---

##### `EvaluationMode`<sup>Required</sup> <a name="EvaluationMode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.evaluationMode"></a>

```go
EvaluationMode *string
```

- *Type:* *string

How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#evaluation_mode GoogleBinaryAuthorizationPolicy#evaluation_mode}

---

##### `RequireAttestationsBy`<sup>Optional</sup> <a name="RequireAttestationsBy" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.requireAttestationsBy"></a>

```go
RequireAttestationsBy *[]*string
```

- *Type:* *[]*string

The resource names of the attestors that must attest to a container image.

If the attestor is in a different project from the
policy, it should be specified in the format 'projects/* /attestors/*'.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.

Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#require_attestations_by GoogleBinaryAuthorizationPolicy#require_attestations_by}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleBinaryAuthorizationPolicyConfig <a name="GoogleBinaryAuthorizationPolicyConfig" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebinaryauthorizationpolicy"

&googlebinaryauthorizationpolicy.GoogleBinaryAuthorizationPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultAdmissionRule: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule,
	AdmissionWhitelistPatterns: interface{},
	ClusterAdmissionRules: interface{},
	Description: *string,
	GlobalPolicyEvaluationMode: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.defaultAdmissionRule">DefaultAdmissionRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule">GoogleBinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | default_admission_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.admissionWhitelistPatterns">AdmissionWhitelistPatterns</a></code> | <code>interface{}</code> | admission_whitelist_patterns block. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.clusterAdmissionRules">ClusterAdmissionRules</a></code> | <code>interface{}</code> | cluster_admission_rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.description">Description</a></code> | <code>*string</code> | A descriptive comment. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.globalPolicyEvaluationMode">GlobalPolicyEvaluationMode</a></code> | <code>*string</code> | Controls the evaluation of a Google-maintained global admission policy for common system-level images. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#id GoogleBinaryAuthorizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#project GoogleBinaryAuthorizationPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts">GoogleBinaryAuthorizationPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultAdmissionRule`<sup>Required</sup> <a name="DefaultAdmissionRule" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.defaultAdmissionRule"></a>

```go
DefaultAdmissionRule GoogleBinaryAuthorizationPolicyDefaultAdmissionRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule">GoogleBinaryAuthorizationPolicyDefaultAdmissionRule</a>

default_admission_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#default_admission_rule GoogleBinaryAuthorizationPolicy#default_admission_rule}

---

##### `AdmissionWhitelistPatterns`<sup>Optional</sup> <a name="AdmissionWhitelistPatterns" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.admissionWhitelistPatterns"></a>

```go
AdmissionWhitelistPatterns interface{}
```

- *Type:* interface{}

admission_whitelist_patterns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#admission_whitelist_patterns GoogleBinaryAuthorizationPolicy#admission_whitelist_patterns}

---

##### `ClusterAdmissionRules`<sup>Optional</sup> <a name="ClusterAdmissionRules" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.clusterAdmissionRules"></a>

```go
ClusterAdmissionRules interface{}
```

- *Type:* interface{}

cluster_admission_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#cluster_admission_rules GoogleBinaryAuthorizationPolicy#cluster_admission_rules}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A descriptive comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#description GoogleBinaryAuthorizationPolicy#description}

---

##### `GlobalPolicyEvaluationMode`<sup>Optional</sup> <a name="GlobalPolicyEvaluationMode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.globalPolicyEvaluationMode"></a>

```go
GlobalPolicyEvaluationMode *string
```

- *Type:* *string

Controls the evaluation of a Google-maintained global admission policy for common system-level images.

Images not covered by the global
policy will be subject to the project admission policy. Possible values: ["ENABLE", "DISABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#global_policy_evaluation_mode GoogleBinaryAuthorizationPolicy#global_policy_evaluation_mode}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#id GoogleBinaryAuthorizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#project GoogleBinaryAuthorizationPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleBinaryAuthorizationPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts">GoogleBinaryAuthorizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#timeouts GoogleBinaryAuthorizationPolicy#timeouts}

---

### GoogleBinaryAuthorizationPolicyDefaultAdmissionRule <a name="GoogleBinaryAuthorizationPolicyDefaultAdmissionRule" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebinaryauthorizationpolicy"

&googlebinaryauthorizationpolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule {
	EnforcementMode: *string,
	EvaluationMode: *string,
	RequireAttestationsBy: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule.property.enforcementMode">EnforcementMode</a></code> | <code>*string</code> | The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule.property.evaluationMode">EvaluationMode</a></code> | <code>*string</code> | How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule.property.requireAttestationsBy">RequireAttestationsBy</a></code> | <code>*[]*string</code> | The resource names of the attestors that must attest to a container image. |

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule.property.enforcementMode"></a>

```go
EnforcementMode *string
```

- *Type:* *string

The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#enforcement_mode GoogleBinaryAuthorizationPolicy#enforcement_mode}

---

##### `EvaluationMode`<sup>Required</sup> <a name="EvaluationMode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule.property.evaluationMode"></a>

```go
EvaluationMode *string
```

- *Type:* *string

How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#evaluation_mode GoogleBinaryAuthorizationPolicy#evaluation_mode}

---

##### `RequireAttestationsBy`<sup>Optional</sup> <a name="RequireAttestationsBy" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule.property.requireAttestationsBy"></a>

```go
RequireAttestationsBy *[]*string
```

- *Type:* *[]*string

The resource names of the attestors that must attest to a container image.

If the attestor is in a different project from the
policy, it should be specified in the format 'projects/* /attestors/*'.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.

Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#require_attestations_by GoogleBinaryAuthorizationPolicy#require_attestations_by}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleBinaryAuthorizationPolicyTimeouts <a name="GoogleBinaryAuthorizationPolicyTimeouts" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebinaryauthorizationpolicy"

&googlebinaryauthorizationpolicy.GoogleBinaryAuthorizationPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#create GoogleBinaryAuthorizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#delete GoogleBinaryAuthorizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#update GoogleBinaryAuthorizationPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#create GoogleBinaryAuthorizationPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#delete GoogleBinaryAuthorizationPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_binary_authorization_policy#update GoogleBinaryAuthorizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList <a name="GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebinaryauthorizationpolicy"

googlebinaryauthorizationpolicy.NewGoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.get"></a>

```go
func Get(index *f64) GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference <a name="GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebinaryauthorizationpolicy"

googlebinaryauthorizationpolicy.NewGoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePatternInput">NamePatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePattern">NamePattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamePatternInput`<sup>Optional</sup> <a name="NamePatternInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePatternInput"></a>

```go
func NamePatternInput() *string
```

- *Type:* *string

---

##### `NamePattern`<sup>Required</sup> <a name="NamePattern" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePattern"></a>

```go
func NamePattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList <a name="GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebinaryauthorizationpolicy"

googlebinaryauthorizationpolicy.NewGoogleBinaryAuthorizationPolicyClusterAdmissionRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.get"></a>

```go
func Get(index *f64) GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference <a name="GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebinaryauthorizationpolicy"

googlebinaryauthorizationpolicy.NewGoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resetRequireAttestationsBy">ResetRequireAttestationsBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRequireAttestationsBy` <a name="ResetRequireAttestationsBy" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resetRequireAttestationsBy"></a>

```go
func ResetRequireAttestationsBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementModeInput">EnforcementModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationModeInput">EvaluationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsByInput">RequireAttestationsByInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementMode">EnforcementMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationMode">EvaluationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsBy">RequireAttestationsBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `EnforcementModeInput`<sup>Optional</sup> <a name="EnforcementModeInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementModeInput"></a>

```go
func EnforcementModeInput() *string
```

- *Type:* *string

---

##### `EvaluationModeInput`<sup>Optional</sup> <a name="EvaluationModeInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationModeInput"></a>

```go
func EvaluationModeInput() *string
```

- *Type:* *string

---

##### `RequireAttestationsByInput`<sup>Optional</sup> <a name="RequireAttestationsByInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsByInput"></a>

```go
func RequireAttestationsByInput() *[]*string
```

- *Type:* *[]*string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementMode"></a>

```go
func EnforcementMode() *string
```

- *Type:* *string

---

##### `EvaluationMode`<sup>Required</sup> <a name="EvaluationMode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationMode"></a>

```go
func EvaluationMode() *string
```

- *Type:* *string

---

##### `RequireAttestationsBy`<sup>Required</sup> <a name="RequireAttestationsBy" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsBy"></a>

```go
func RequireAttestationsBy() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference <a name="GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebinaryauthorizationpolicy"

googlebinaryauthorizationpolicy.NewGoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resetRequireAttestationsBy">ResetRequireAttestationsBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRequireAttestationsBy` <a name="ResetRequireAttestationsBy" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resetRequireAttestationsBy"></a>

```go
func ResetRequireAttestationsBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementModeInput">EnforcementModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationModeInput">EvaluationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsByInput">RequireAttestationsByInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementMode">EnforcementMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationMode">EvaluationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsBy">RequireAttestationsBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule">GoogleBinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnforcementModeInput`<sup>Optional</sup> <a name="EnforcementModeInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementModeInput"></a>

```go
func EnforcementModeInput() *string
```

- *Type:* *string

---

##### `EvaluationModeInput`<sup>Optional</sup> <a name="EvaluationModeInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationModeInput"></a>

```go
func EvaluationModeInput() *string
```

- *Type:* *string

---

##### `RequireAttestationsByInput`<sup>Optional</sup> <a name="RequireAttestationsByInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsByInput"></a>

```go
func RequireAttestationsByInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementMode"></a>

```go
func EnforcementMode() *string
```

- *Type:* *string

---

##### `EvaluationMode`<sup>Required</sup> <a name="EvaluationMode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationMode"></a>

```go
func EvaluationMode() *string
```

- *Type:* *string

---

##### `RequireAttestationsBy`<sup>Required</sup> <a name="RequireAttestationsBy" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsBy"></a>

```go
func RequireAttestationsBy() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBinaryAuthorizationPolicyDefaultAdmissionRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule">GoogleBinaryAuthorizationPolicyDefaultAdmissionRule</a>

---


### GoogleBinaryAuthorizationPolicyTimeoutsOutputReference <a name="GoogleBinaryAuthorizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebinaryauthorizationpolicy"

googlebinaryauthorizationpolicy.NewGoogleBinaryAuthorizationPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBinaryAuthorizationPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



