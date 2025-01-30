# `googleNetworkSecurityAuthzPolicy` Submodule <a name="`googleNetworkSecurityAuthzPolicy` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityAuthzPolicy <a name="GoogleNetworkSecurityAuthzPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy google_network_security_authz_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicy(scope Construct, id *string, config GoogleNetworkSecurityAuthzPolicyConfig) GoogleNetworkSecurityAuthzPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig">GoogleNetworkSecurityAuthzPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig">GoogleNetworkSecurityAuthzPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putCustomProvider">PutCustomProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putHttpRules">PutHttpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetCustomProvider">ResetCustomProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetHttpRules">ResetHttpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomProvider` <a name="PutCustomProvider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putCustomProvider"></a>

```go
func PutCustomProvider(value GoogleNetworkSecurityAuthzPolicyCustomProvider)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putCustomProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider">GoogleNetworkSecurityAuthzPolicyCustomProvider</a>

---

##### `PutHttpRules` <a name="PutHttpRules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putHttpRules"></a>

```go
func PutHttpRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putHttpRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putTarget"></a>

```go
func PutTarget(value GoogleNetworkSecurityAuthzPolicyTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget">GoogleNetworkSecurityAuthzPolicyTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkSecurityAuthzPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts">GoogleNetworkSecurityAuthzPolicyTimeouts</a>

---

##### `ResetCustomProvider` <a name="ResetCustomProvider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetCustomProvider"></a>

```go
func ResetCustomProvider()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHttpRules` <a name="ResetHttpRules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetHttpRules"></a>

```go
func ResetHttpRules()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityAuthzPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleNetworkSecurityAuthzPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkSecurityAuthzPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkSecurityAuthzPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityAuthzPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.customProvider">CustomProvider</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference">GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.httpRules">HttpRules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList">GoogleNetworkSecurityAuthzPolicyHttpRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.target">Target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference">GoogleNetworkSecurityAuthzPolicyTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference">GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.customProviderInput">CustomProviderInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider">GoogleNetworkSecurityAuthzPolicyCustomProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.httpRulesInput">HttpRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget">GoogleNetworkSecurityAuthzPolicyTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CustomProvider`<sup>Required</sup> <a name="CustomProvider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.customProvider"></a>

```go
func CustomProvider() GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference">GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `HttpRules`<sup>Required</sup> <a name="HttpRules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.httpRules"></a>

```go
func HttpRules() GoogleNetworkSecurityAuthzPolicyHttpRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList">GoogleNetworkSecurityAuthzPolicyHttpRulesList</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.target"></a>

```go
func Target() GoogleNetworkSecurityAuthzPolicyTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference">GoogleNetworkSecurityAuthzPolicyTargetOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference">GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `CustomProviderInput`<sup>Optional</sup> <a name="CustomProviderInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.customProviderInput"></a>

```go
func CustomProviderInput() GoogleNetworkSecurityAuthzPolicyCustomProvider
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider">GoogleNetworkSecurityAuthzPolicyCustomProvider</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HttpRulesInput`<sup>Optional</sup> <a name="HttpRulesInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.httpRulesInput"></a>

```go
func HttpRulesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.targetInput"></a>

```go
func TargetInput() GoogleNetworkSecurityAuthzPolicyTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget">GoogleNetworkSecurityAuthzPolicyTarget</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityAuthzPolicyConfig <a name="GoogleNetworkSecurityAuthzPolicyConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: *string,
	Location: *string,
	Name: *string,
	Target: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget,
	CustomProvider: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider,
	Description: *string,
	HttpRules: interface{},
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.action">Action</a></code> | <code>*string</code> | When the action is CUSTOM, customProvider must be specified. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Identifier. Name of the AuthzPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.target">Target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget">GoogleNetworkSecurityAuthzPolicyTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.customProvider">CustomProvider</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider">GoogleNetworkSecurityAuthzPolicyCustomProvider</a></code> | custom_provider block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.description">Description</a></code> | <code>*string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.httpRules">HttpRules</a></code> | <code>interface{}</code> | http_rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#id GoogleNetworkSecurityAuthzPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of labels associated with the AuthzExtension resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#project GoogleNetworkSecurityAuthzPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts">GoogleNetworkSecurityAuthzPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

When the action is CUSTOM, customProvider must be specified.

When the action is ALLOW, only requests matching the policy will be allowed.
When the action is DENY, only requests matching the policy will be denied.

When a request arrives, the policies are evaluated in the following order:

1. If there is a CUSTOM policy that matches the request, the CUSTOM policy is evaluated using the custom authorization providers and the request is denied if the provider rejects the request.
2. If there are any DENY policies that match the request, the request is denied.
3. If there are no ALLOW policies for the resource or if any of the ALLOW policies match the request, the request is allowed.
4. Else the request is denied by default if none of the configured AuthzPolicies with ALLOW action match the request. Possible values: ["ALLOW", "DENY", "CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#action GoogleNetworkSecurityAuthzPolicy#action}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#location GoogleNetworkSecurityAuthzPolicy#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Identifier. Name of the AuthzPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#name GoogleNetworkSecurityAuthzPolicy#name}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.target"></a>

```go
Target GoogleNetworkSecurityAuthzPolicyTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget">GoogleNetworkSecurityAuthzPolicyTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#target GoogleNetworkSecurityAuthzPolicy#target}

---

##### `CustomProvider`<sup>Optional</sup> <a name="CustomProvider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.customProvider"></a>

```go
CustomProvider GoogleNetworkSecurityAuthzPolicyCustomProvider
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider">GoogleNetworkSecurityAuthzPolicyCustomProvider</a>

custom_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#custom_provider GoogleNetworkSecurityAuthzPolicy#custom_provider}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#description GoogleNetworkSecurityAuthzPolicy#description}

---

##### `HttpRules`<sup>Optional</sup> <a name="HttpRules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.httpRules"></a>

```go
HttpRules interface{}
```

- *Type:* interface{}

http_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#http_rules GoogleNetworkSecurityAuthzPolicy#http_rules}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#id GoogleNetworkSecurityAuthzPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of labels associated with the AuthzExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#labels GoogleNetworkSecurityAuthzPolicy#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#project GoogleNetworkSecurityAuthzPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkSecurityAuthzPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts">GoogleNetworkSecurityAuthzPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#timeouts GoogleNetworkSecurityAuthzPolicy#timeouts}

---

### GoogleNetworkSecurityAuthzPolicyCustomProvider <a name="GoogleNetworkSecurityAuthzPolicyCustomProvider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider {
	AuthzExtension: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension,
	CloudIap: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider.property.authzExtension">AuthzExtension</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension">GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension</a></code> | authz_extension block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider.property.cloudIap">CloudIap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap">GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap</a></code> | cloud_iap block. |

---

##### `AuthzExtension`<sup>Optional</sup> <a name="AuthzExtension" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider.property.authzExtension"></a>

```go
AuthzExtension GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension">GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension</a>

authz_extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#authz_extension GoogleNetworkSecurityAuthzPolicy#authz_extension}

---

##### `CloudIap`<sup>Optional</sup> <a name="CloudIap" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider.property.cloudIap"></a>

```go
CloudIap GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap">GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap</a>

cloud_iap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#cloud_iap GoogleNetworkSecurityAuthzPolicy#cloud_iap}

---

### GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension <a name="GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension {
	Resources: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension.property.resources">Resources</a></code> | <code>*[]*string</code> | A list of references to authorization extensions that will be invoked for requests matching this policy. |

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

A list of references to authorization extensions that will be invoked for requests matching this policy.

Limited to 1 custom provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#resources GoogleNetworkSecurityAuthzPolicy#resources}

---

### GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap <a name="GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enable Cloud IAP at the AuthzPolicy level. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enable Cloud IAP at the AuthzPolicy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#enabled GoogleNetworkSecurityAuthzPolicy#enabled}

---

### GoogleNetworkSecurityAuthzPolicyHttpRules <a name="GoogleNetworkSecurityAuthzPolicyHttpRules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyHttpRules {
	From: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom,
	To: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo,
	When: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules.property.from">From</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom">GoogleNetworkSecurityAuthzPolicyHttpRulesFrom</a></code> | from block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules.property.to">To</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo">GoogleNetworkSecurityAuthzPolicyHttpRulesTo</a></code> | to block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules.property.when">When</a></code> | <code>*string</code> | CEL expression that describes the conditions to be satisfied for the action. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules.property.from"></a>

```go
From GoogleNetworkSecurityAuthzPolicyHttpRulesFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom">GoogleNetworkSecurityAuthzPolicyHttpRulesFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#from GoogleNetworkSecurityAuthzPolicy#from}

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules.property.to"></a>

```go
To GoogleNetworkSecurityAuthzPolicyHttpRulesTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo">GoogleNetworkSecurityAuthzPolicyHttpRulesTo</a>

to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#to GoogleNetworkSecurityAuthzPolicy#to}

---

##### `When`<sup>Optional</sup> <a name="When" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules.property.when"></a>

```go
When *string
```

- *Type:* *string

CEL expression that describes the conditions to be satisfied for the action.

The result of the CEL expression is ANDed with the from and to. Refer to the CEL language reference for a list of available attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#when GoogleNetworkSecurityAuthzPolicy#when}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesFrom <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom {
	NotSources: interface{},
	Sources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom.property.notSources">NotSources</a></code> | <code>interface{}</code> | not_sources block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom.property.sources">Sources</a></code> | <code>interface{}</code> | sources block. |

---

##### `NotSources`<sup>Optional</sup> <a name="NotSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom.property.notSources"></a>

```go
NotSources interface{}
```

- *Type:* interface{}

not_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#not_sources GoogleNetworkSecurityAuthzPolicy#not_sources}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom.property.sources"></a>

```go
Sources interface{}
```

- *Type:* interface{}

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#sources GoogleNetworkSecurityAuthzPolicy#sources}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources {
	Principals: interface{},
	Resources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources.property.principals">Principals</a></code> | <code>interface{}</code> | principals block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources.property.resources">Resources</a></code> | <code>interface{}</code> | resources block. |

---

##### `Principals`<sup>Optional</sup> <a name="Principals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources.property.principals"></a>

```go
Principals interface{}
```

- *Type:* interface{}

principals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#principals GoogleNetworkSecurityAuthzPolicy#principals}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources.property.resources"></a>

```go
Resources interface{}
```

- *Type:* interface{}

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#resources GoogleNetworkSecurityAuthzPolicy#resources}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals {
	Contains: *string,
	Exact: *string,
	IgnoreCase: interface{},
	Prefix: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.contains">Contains</a></code> | <code>*string</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.exact">Exact</a></code> | <code>*string</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.prefix">Prefix</a></code> | <code>*string</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.suffix">Suffix</a></code> | <code>*string</code> | The input string must have the suffix specified here. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.ignoreCase"></a>

```go
IgnoreCase interface{}
```

- *Type:* interface{}

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources {
	IamServiceAccount: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount,
	TagValueIdSet: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources.property.iamServiceAccount">IamServiceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount</a></code> | iam_service_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources.property.tagValueIdSet">TagValueIdSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet</a></code> | tag_value_id_set block. |

---

##### `IamServiceAccount`<sup>Optional</sup> <a name="IamServiceAccount" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources.property.iamServiceAccount"></a>

```go
IamServiceAccount GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount</a>

iam_service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#iam_service_account GoogleNetworkSecurityAuthzPolicy#iam_service_account}

---

##### `TagValueIdSet`<sup>Optional</sup> <a name="TagValueIdSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources.property.tagValueIdSet"></a>

```go
TagValueIdSet GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet</a>

tag_value_id_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#tag_value_id_set GoogleNetworkSecurityAuthzPolicy#tag_value_id_set}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount {
	Contains: *string,
	Exact: *string,
	IgnoreCase: interface{},
	Prefix: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.contains">Contains</a></code> | <code>*string</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.exact">Exact</a></code> | <code>*string</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.prefix">Prefix</a></code> | <code>*string</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.suffix">Suffix</a></code> | <code>*string</code> | The input string must have the suffix specified here. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.ignoreCase"></a>

```go
IgnoreCase interface{}
```

- *Type:* interface{}

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet {
	Ids: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet.property.ids">Ids</a></code> | <code>*[]*string</code> | A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request. |

---

##### `Ids`<sup>Optional</sup> <a name="Ids" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet.property.ids"></a>

```go
Ids *[]*string
```

- *Type:* *[]*string

A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request.

The match follows AND semantics which means all the ids must match.
Limited to 5 matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#ids GoogleNetworkSecurityAuthzPolicy#ids}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources {
	Principals: interface{},
	Resources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources.property.principals">Principals</a></code> | <code>interface{}</code> | principals block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources.property.resources">Resources</a></code> | <code>interface{}</code> | resources block. |

---

##### `Principals`<sup>Optional</sup> <a name="Principals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources.property.principals"></a>

```go
Principals interface{}
```

- *Type:* interface{}

principals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#principals GoogleNetworkSecurityAuthzPolicy#principals}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources.property.resources"></a>

```go
Resources interface{}
```

- *Type:* interface{}

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#resources GoogleNetworkSecurityAuthzPolicy#resources}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals {
	Contains: *string,
	Exact: *string,
	IgnoreCase: interface{},
	Prefix: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.contains">Contains</a></code> | <code>*string</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.exact">Exact</a></code> | <code>*string</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.prefix">Prefix</a></code> | <code>*string</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.suffix">Suffix</a></code> | <code>*string</code> | The input string must have the suffix specified here. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.ignoreCase"></a>

```go
IgnoreCase interface{}
```

- *Type:* interface{}

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources {
	IamServiceAccount: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount,
	TagValueIdSet: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources.property.iamServiceAccount">IamServiceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount</a></code> | iam_service_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources.property.tagValueIdSet">TagValueIdSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet</a></code> | tag_value_id_set block. |

---

##### `IamServiceAccount`<sup>Optional</sup> <a name="IamServiceAccount" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources.property.iamServiceAccount"></a>

```go
IamServiceAccount GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount</a>

iam_service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#iam_service_account GoogleNetworkSecurityAuthzPolicy#iam_service_account}

---

##### `TagValueIdSet`<sup>Optional</sup> <a name="TagValueIdSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources.property.tagValueIdSet"></a>

```go
TagValueIdSet GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet</a>

tag_value_id_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#tag_value_id_set GoogleNetworkSecurityAuthzPolicy#tag_value_id_set}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount {
	Contains: *string,
	Exact: *string,
	IgnoreCase: interface{},
	Prefix: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.contains">Contains</a></code> | <code>*string</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.exact">Exact</a></code> | <code>*string</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.prefix">Prefix</a></code> | <code>*string</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.suffix">Suffix</a></code> | <code>*string</code> | The input string must have the suffix specified here. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.ignoreCase"></a>

```go
IgnoreCase interface{}
```

- *Type:* interface{}

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet {
	Ids: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet.property.ids">Ids</a></code> | <code>*[]*string</code> | A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request. |

---

##### `Ids`<sup>Optional</sup> <a name="Ids" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet.property.ids"></a>

```go
Ids *[]*string
```

- *Type:* *[]*string

A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request.

The match follows AND semantics which means all the ids must match.
Limited to 5 matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#ids GoogleNetworkSecurityAuthzPolicy#ids}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesTo <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesTo" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo {
	Operations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo.property.operations">Operations</a></code> | <code>interface{}</code> | operations block. |

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo.property.operations"></a>

```go
Operations interface{}
```

- *Type:* interface{}

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#operations GoogleNetworkSecurityAuthzPolicy#operations}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations {
	HeaderSet: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet,
	Hosts: interface{},
	Methods: *[]*string,
	Paths: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations.property.headerSet">HeaderSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet</a></code> | header_set block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations.property.hosts">Hosts</a></code> | <code>interface{}</code> | hosts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations.property.methods">Methods</a></code> | <code>*[]*string</code> | A list of HTTP methods to match against. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations.property.paths">Paths</a></code> | <code>interface{}</code> | paths block. |

---

##### `HeaderSet`<sup>Optional</sup> <a name="HeaderSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations.property.headerSet"></a>

```go
HeaderSet GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet</a>

header_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#header_set GoogleNetworkSecurityAuthzPolicy#header_set}

---

##### `Hosts`<sup>Optional</sup> <a name="Hosts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations.property.hosts"></a>

```go
Hosts interface{}
```

- *Type:* interface{}

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#hosts GoogleNetworkSecurityAuthzPolicy#hosts}

---

##### `Methods`<sup>Optional</sup> <a name="Methods" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations.property.methods"></a>

```go
Methods *[]*string
```

- *Type:* *[]*string

A list of HTTP methods to match against.

Each entry must be a valid HTTP method name (GET, PUT, POST, HEAD, PATCH, DELETE, OPTIONS). It only allows exact match and is always case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#methods GoogleNetworkSecurityAuthzPolicy#methods}

---

##### `Paths`<sup>Optional</sup> <a name="Paths" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations.property.paths"></a>

```go
Paths interface{}
```

- *Type:* interface{}

paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#paths GoogleNetworkSecurityAuthzPolicy#paths}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet {
	Headers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet.property.headers">Headers</a></code> | <code>interface{}</code> | headers block. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#headers GoogleNetworkSecurityAuthzPolicy#headers}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders {
	Name: *string,
	Value: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders.property.name">Name</a></code> | <code>*string</code> | Specifies the name of the header in the request. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders.property.value">Value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue</a></code> | value block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name of the header in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#name GoogleNetworkSecurityAuthzPolicy#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders.property.value"></a>

```go
Value GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#value GoogleNetworkSecurityAuthzPolicy#value}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue {
	Contains: *string,
	Exact: *string,
	IgnoreCase: interface{},
	Prefix: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.contains">Contains</a></code> | <code>*string</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.exact">Exact</a></code> | <code>*string</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.prefix">Prefix</a></code> | <code>*string</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.suffix">Suffix</a></code> | <code>*string</code> | The input string must have the suffix specified here. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.ignoreCase"></a>

```go
IgnoreCase interface{}
```

- *Type:* interface{}

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts {
	Contains: *string,
	Exact: *string,
	IgnoreCase: interface{},
	Prefix: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.contains">Contains</a></code> | <code>*string</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.exact">Exact</a></code> | <code>*string</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.prefix">Prefix</a></code> | <code>*string</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.suffix">Suffix</a></code> | <code>*string</code> | The input string must have the suffix specified here. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.ignoreCase"></a>

```go
IgnoreCase interface{}
```

- *Type:* interface{}

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths {
	Contains: *string,
	Exact: *string,
	IgnoreCase: interface{},
	Prefix: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.contains">Contains</a></code> | <code>*string</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.exact">Exact</a></code> | <code>*string</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.prefix">Prefix</a></code> | <code>*string</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.suffix">Suffix</a></code> | <code>*string</code> | The input string must have the suffix specified here. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.ignoreCase"></a>

```go
IgnoreCase interface{}
```

- *Type:* interface{}

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}

---

### GoogleNetworkSecurityAuthzPolicyTarget <a name="GoogleNetworkSecurityAuthzPolicyTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyTarget {
	LoadBalancingScheme: *string,
	Resources: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | All gateways and forwarding rules referenced by this policy and extensions must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget.property.resources">Resources</a></code> | <code>*[]*string</code> | A list of references to the Forwarding Rules on which this policy will be applied. |

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget.property.loadBalancingScheme"></a>

```go
LoadBalancingScheme *string
```

- *Type:* *string

All gateways and forwarding rules referenced by this policy and extensions must share the same load balancing scheme.

For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED", "INTERNAL_SELF_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#load_balancing_scheme GoogleNetworkSecurityAuthzPolicy#load_balancing_scheme}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

A list of references to the Forwarding Rules on which this policy will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#resources GoogleNetworkSecurityAuthzPolicy#resources}

---

### GoogleNetworkSecurityAuthzPolicyTimeouts <a name="GoogleNetworkSecurityAuthzPolicyTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

&googlenetworksecurityauthzpolicy.GoogleNetworkSecurityAuthzPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#create GoogleNetworkSecurityAuthzPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#delete GoogleNetworkSecurityAuthzPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#update GoogleNetworkSecurityAuthzPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#create GoogleNetworkSecurityAuthzPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#delete GoogleNetworkSecurityAuthzPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_authz_policy#update GoogleNetworkSecurityAuthzPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference <a name="GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension">GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension">GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension</a>

---


### GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference <a name="GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap">GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap">GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap</a>

---


### GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference <a name="GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.putAuthzExtension">PutAuthzExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.putCloudIap">PutCloudIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.resetAuthzExtension">ResetAuthzExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.resetCloudIap">ResetCloudIap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthzExtension` <a name="PutAuthzExtension" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.putAuthzExtension"></a>

```go
func PutAuthzExtension(value GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.putAuthzExtension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension">GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension</a>

---

##### `PutCloudIap` <a name="PutCloudIap" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.putCloudIap"></a>

```go
func PutCloudIap(value GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.putCloudIap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap">GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap</a>

---

##### `ResetAuthzExtension` <a name="ResetAuthzExtension" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.resetAuthzExtension"></a>

```go
func ResetAuthzExtension()
```

##### `ResetCloudIap` <a name="ResetCloudIap" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.resetCloudIap"></a>

```go
func ResetCloudIap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.authzExtension">AuthzExtension</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference">GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.cloudIap">CloudIap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference">GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.authzExtensionInput">AuthzExtensionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension">GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.cloudIapInput">CloudIapInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap">GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider">GoogleNetworkSecurityAuthzPolicyCustomProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthzExtension`<sup>Required</sup> <a name="AuthzExtension" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.authzExtension"></a>

```go
func AuthzExtension() GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference">GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference</a>

---

##### `CloudIap`<sup>Required</sup> <a name="CloudIap" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.cloudIap"></a>

```go
func CloudIap() GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference">GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference</a>

---

##### `AuthzExtensionInput`<sup>Optional</sup> <a name="AuthzExtensionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.authzExtensionInput"></a>

```go
func AuthzExtensionInput() GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension">GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension</a>

---

##### `CloudIapInput`<sup>Optional</sup> <a name="CloudIapInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.cloudIapInput"></a>

```go
func CloudIapInput() GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap">GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityAuthzPolicyCustomProvider
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider">GoogleNetworkSecurityAuthzPolicyCustomProvider</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.get"></a>

```go
func Get(index *f64) GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.putPrincipals">PutPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.resetPrincipals">ResetPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrincipals` <a name="PutPrincipals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.putPrincipals"></a>

```go
func PutPrincipals(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.putPrincipals.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResources` <a name="PutResources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.putResources"></a>

```go
func PutResources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.putResources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPrincipals` <a name="ResetPrincipals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.resetPrincipals"></a>

```go
func ResetPrincipals()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.resetResources"></a>

```go
func ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.principals">Principals</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.principalsInput">PrincipalsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.principals"></a>

```go
func Principals() GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.resources"></a>

```go
func Resources() GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList</a>

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.principalsInput"></a>

```go
func PrincipalsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.get"></a>

```go
func Get(index *f64) GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetIgnoreCase"></a>

```go
func ResetIgnoreCase()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.ignoreCaseInput"></a>

```go
func IgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.ignoreCase"></a>

```go
func IgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetIgnoreCase"></a>

```go
func ResetIgnoreCase()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.ignoreCaseInput"></a>

```go
func IgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.ignoreCase"></a>

```go
func IgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.get"></a>

```go
func Get(index *f64) GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.putIamServiceAccount">PutIamServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.putTagValueIdSet">PutTagValueIdSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.resetIamServiceAccount">ResetIamServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.resetTagValueIdSet">ResetTagValueIdSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIamServiceAccount` <a name="PutIamServiceAccount" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.putIamServiceAccount"></a>

```go
func PutIamServiceAccount(value GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.putIamServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount</a>

---

##### `PutTagValueIdSet` <a name="PutTagValueIdSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.putTagValueIdSet"></a>

```go
func PutTagValueIdSet(value GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.putTagValueIdSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet</a>

---

##### `ResetIamServiceAccount` <a name="ResetIamServiceAccount" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.resetIamServiceAccount"></a>

```go
func ResetIamServiceAccount()
```

##### `ResetTagValueIdSet` <a name="ResetTagValueIdSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.resetTagValueIdSet"></a>

```go
func ResetTagValueIdSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.iamServiceAccount">IamServiceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.tagValueIdSet">TagValueIdSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.iamServiceAccountInput">IamServiceAccountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.tagValueIdSetInput">TagValueIdSetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IamServiceAccount`<sup>Required</sup> <a name="IamServiceAccount" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.iamServiceAccount"></a>

```go
func IamServiceAccount() GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference</a>

---

##### `TagValueIdSet`<sup>Required</sup> <a name="TagValueIdSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.tagValueIdSet"></a>

```go
func TagValueIdSet() GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference</a>

---

##### `IamServiceAccountInput`<sup>Optional</sup> <a name="IamServiceAccountInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.iamServiceAccountInput"></a>

```go
func IamServiceAccountInput() GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount</a>

---

##### `TagValueIdSetInput`<sup>Optional</sup> <a name="TagValueIdSetInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.tagValueIdSetInput"></a>

```go
func TagValueIdSetInput() GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.resetIds">ResetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIds` <a name="ResetIds" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.resetIds"></a>

```go
func ResetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.idsInput">IdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.ids">Ids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdsInput`<sup>Optional</sup> <a name="IdsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.idsInput"></a>

```go
func IdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.ids"></a>

```go
func Ids() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.putNotSources">PutNotSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.resetNotSources">ResetNotSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotSources` <a name="PutNotSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.putNotSources"></a>

```go
func PutNotSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.putNotSources.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSources` <a name="PutSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.putSources"></a>

```go
func PutSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.putSources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetNotSources` <a name="ResetNotSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.resetNotSources"></a>

```go
func ResetNotSources()
```

##### `ResetSources` <a name="ResetSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.resetSources"></a>

```go
func ResetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.notSources">NotSources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.notSourcesInput">NotSourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom">GoogleNetworkSecurityAuthzPolicyHttpRulesFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotSources`<sup>Required</sup> <a name="NotSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.notSources"></a>

```go
func NotSources() GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList</a>

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.sources"></a>

```go
func Sources() GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList</a>

---

##### `NotSourcesInput`<sup>Optional</sup> <a name="NotSourcesInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.notSourcesInput"></a>

```go
func NotSourcesInput() interface{}
```

- *Type:* interface{}

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.sourcesInput"></a>

```go
func SourcesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityAuthzPolicyHttpRulesFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom">GoogleNetworkSecurityAuthzPolicyHttpRulesFrom</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.get"></a>

```go
func Get(index *f64) GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.putPrincipals">PutPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.resetPrincipals">ResetPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrincipals` <a name="PutPrincipals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.putPrincipals"></a>

```go
func PutPrincipals(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.putPrincipals.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResources` <a name="PutResources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.putResources"></a>

```go
func PutResources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.putResources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPrincipals` <a name="ResetPrincipals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.resetPrincipals"></a>

```go
func ResetPrincipals()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.resetResources"></a>

```go
func ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.principals">Principals</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.principalsInput">PrincipalsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.principals"></a>

```go
func Principals() GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.resources"></a>

```go
func Resources() GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList</a>

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.principalsInput"></a>

```go
func PrincipalsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.get"></a>

```go
func Get(index *f64) GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetIgnoreCase"></a>

```go
func ResetIgnoreCase()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.ignoreCaseInput"></a>

```go
func IgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.ignoreCase"></a>

```go
func IgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetIgnoreCase"></a>

```go
func ResetIgnoreCase()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.ignoreCaseInput"></a>

```go
func IgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.ignoreCase"></a>

```go
func IgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.get"></a>

```go
func Get(index *f64) GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.putIamServiceAccount">PutIamServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.putTagValueIdSet">PutTagValueIdSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.resetIamServiceAccount">ResetIamServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.resetTagValueIdSet">ResetTagValueIdSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIamServiceAccount` <a name="PutIamServiceAccount" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.putIamServiceAccount"></a>

```go
func PutIamServiceAccount(value GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.putIamServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount</a>

---

##### `PutTagValueIdSet` <a name="PutTagValueIdSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.putTagValueIdSet"></a>

```go
func PutTagValueIdSet(value GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.putTagValueIdSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet</a>

---

##### `ResetIamServiceAccount` <a name="ResetIamServiceAccount" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.resetIamServiceAccount"></a>

```go
func ResetIamServiceAccount()
```

##### `ResetTagValueIdSet` <a name="ResetTagValueIdSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.resetTagValueIdSet"></a>

```go
func ResetTagValueIdSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.iamServiceAccount">IamServiceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.tagValueIdSet">TagValueIdSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.iamServiceAccountInput">IamServiceAccountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.tagValueIdSetInput">TagValueIdSetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IamServiceAccount`<sup>Required</sup> <a name="IamServiceAccount" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.iamServiceAccount"></a>

```go
func IamServiceAccount() GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference</a>

---

##### `TagValueIdSet`<sup>Required</sup> <a name="TagValueIdSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.tagValueIdSet"></a>

```go
func TagValueIdSet() GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference</a>

---

##### `IamServiceAccountInput`<sup>Optional</sup> <a name="IamServiceAccountInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.iamServiceAccountInput"></a>

```go
func IamServiceAccountInput() GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount</a>

---

##### `TagValueIdSetInput`<sup>Optional</sup> <a name="TagValueIdSetInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.tagValueIdSetInput"></a>

```go
func TagValueIdSetInput() GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.resetIds">ResetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIds` <a name="ResetIds" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.resetIds"></a>

```go
func ResetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.idsInput">IdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.ids">Ids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdsInput`<sup>Optional</sup> <a name="IdsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.idsInput"></a>

```go
func IdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.ids"></a>

```go
func Ids() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesList <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkSecurityAuthzPolicyHttpRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.get"></a>

```go
func Get(index *f64) GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.putFrom">PutFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.putTo">PutTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.resetTo">ResetTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.resetWhen">ResetWhen</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFrom` <a name="PutFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.putFrom"></a>

```go
func PutFrom(value GoogleNetworkSecurityAuthzPolicyHttpRulesFrom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.putFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom">GoogleNetworkSecurityAuthzPolicyHttpRulesFrom</a>

---

##### `PutTo` <a name="PutTo" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.putTo"></a>

```go
func PutTo(value GoogleNetworkSecurityAuthzPolicyHttpRulesTo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.putTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo">GoogleNetworkSecurityAuthzPolicyHttpRulesTo</a>

---

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.resetFrom"></a>

```go
func ResetFrom()
```

##### `ResetTo` <a name="ResetTo" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.resetTo"></a>

```go
func ResetTo()
```

##### `ResetWhen` <a name="ResetWhen" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.resetWhen"></a>

```go
func ResetWhen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.from">From</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.to">To</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.fromInput">FromInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom">GoogleNetworkSecurityAuthzPolicyHttpRulesFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.toInput">ToInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo">GoogleNetworkSecurityAuthzPolicyHttpRulesTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.whenInput">WhenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.when">When</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.from"></a>

```go
func From() GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference</a>

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.to"></a>

```go
func To() GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference</a>

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.fromInput"></a>

```go
func FromInput() GoogleNetworkSecurityAuthzPolicyHttpRulesFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom">GoogleNetworkSecurityAuthzPolicyHttpRulesFrom</a>

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.toInput"></a>

```go
func ToInput() GoogleNetworkSecurityAuthzPolicyHttpRulesTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo">GoogleNetworkSecurityAuthzPolicyHttpRulesTo</a>

---

##### `WhenInput`<sup>Optional</sup> <a name="WhenInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.whenInput"></a>

```go
func WhenInput() *string
```

- *Type:* *string

---

##### `When`<sup>Required</sup> <a name="When" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.when"></a>

```go
func When() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.get"></a>

```go
func Get(index *f64) GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.putValue"></a>

```go
func PutValue(value GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.value"></a>

```go
func Value() GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetIgnoreCase"></a>

```go
func ResetIgnoreCase()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.ignoreCaseInput"></a>

```go
func IgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.ignoreCase"></a>

```go
func IgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.putHeaders"></a>

```go
func PutHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.putHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.headers"></a>

```go
func Headers() GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.get"></a>

```go
func Get(index *f64) GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetIgnoreCase"></a>

```go
func ResetIgnoreCase()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.ignoreCaseInput"></a>

```go
func IgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.ignoreCase"></a>

```go
func IgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.get"></a>

```go
func Get(index *f64) GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putHeaderSet">PutHeaderSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putHosts">PutHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putPaths">PutPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetHeaderSet">ResetHeaderSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetHosts">ResetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetMethods">ResetMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetPaths">ResetPaths</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaderSet` <a name="PutHeaderSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putHeaderSet"></a>

```go
func PutHeaderSet(value GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putHeaderSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet</a>

---

##### `PutHosts` <a name="PutHosts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putHosts"></a>

```go
func PutHosts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putHosts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPaths` <a name="PutPaths" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putPaths"></a>

```go
func PutPaths(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putPaths.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeaderSet` <a name="ResetHeaderSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetHeaderSet"></a>

```go
func ResetHeaderSet()
```

##### `ResetHosts` <a name="ResetHosts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetHosts"></a>

```go
func ResetHosts()
```

##### `ResetMethods` <a name="ResetMethods" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetMethods"></a>

```go
func ResetMethods()
```

##### `ResetPaths` <a name="ResetPaths" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetPaths"></a>

```go
func ResetPaths()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.headerSet">HeaderSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.hosts">Hosts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.paths">Paths</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.headerSetInput">HeaderSetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.hostsInput">HostsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.methodsInput">MethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.pathsInput">PathsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.methods">Methods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderSet`<sup>Required</sup> <a name="HeaderSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.headerSet"></a>

```go
func HeaderSet() GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference</a>

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.hosts"></a>

```go
func Hosts() GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList</a>

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.paths"></a>

```go
func Paths() GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList</a>

---

##### `HeaderSetInput`<sup>Optional</sup> <a name="HeaderSetInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.headerSetInput"></a>

```go
func HeaderSetInput() GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet</a>

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.hostsInput"></a>

```go
func HostsInput() interface{}
```

- *Type:* interface{}

---

##### `MethodsInput`<sup>Optional</sup> <a name="MethodsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.methodsInput"></a>

```go
func MethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.pathsInput"></a>

```go
func PathsInput() interface{}
```

- *Type:* interface{}

---

##### `Methods`<sup>Required</sup> <a name="Methods" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.methods"></a>

```go
func Methods() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.get"></a>

```go
func Get(index *f64) GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetIgnoreCase"></a>

```go
func ResetIgnoreCase()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.ignoreCaseInput"></a>

```go
func IgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.ignoreCase"></a>

```go
func IgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.putOperations">PutOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.resetOperations">ResetOperations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperations` <a name="PutOperations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.putOperations"></a>

```go
func PutOperations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.putOperations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOperations` <a name="ResetOperations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.resetOperations"></a>

```go
func ResetOperations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.operations">Operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.operationsInput">OperationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo">GoogleNetworkSecurityAuthzPolicyHttpRulesTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.operations"></a>

```go
func Operations() GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList</a>

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.operationsInput"></a>

```go
func OperationsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityAuthzPolicyHttpRulesTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo">GoogleNetworkSecurityAuthzPolicyHttpRulesTo</a>

---


### GoogleNetworkSecurityAuthzPolicyTargetOutputReference <a name="GoogleNetworkSecurityAuthzPolicyTargetOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityAuthzPolicyTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.resetResources"></a>

```go
func ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.loadBalancingSchemeInput">LoadBalancingSchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget">GoogleNetworkSecurityAuthzPolicyTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoadBalancingSchemeInput`<sup>Optional</sup> <a name="LoadBalancingSchemeInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.loadBalancingSchemeInput"></a>

```go
func LoadBalancingSchemeInput() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.loadBalancingScheme"></a>

```go
func LoadBalancingScheme() *string
```

- *Type:* *string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityAuthzPolicyTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget">GoogleNetworkSecurityAuthzPolicyTarget</a>

---


### GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference <a name="GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityauthzpolicy"

googlenetworksecurityauthzpolicy.NewGoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



