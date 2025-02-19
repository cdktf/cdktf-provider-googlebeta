# `googleComputeOrganizationSecurityPolicyRule` Submodule <a name="`googleComputeOrganizationSecurityPolicyRule` Submodule" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeOrganizationSecurityPolicyRule <a name="GoogleComputeOrganizationSecurityPolicyRule" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule google_compute_organization_security_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeorganizationsecuritypolicyrule"

googlecomputeorganizationsecuritypolicyrule.NewGoogleComputeOrganizationSecurityPolicyRule(scope Construct, id *string, config GoogleComputeOrganizationSecurityPolicyRuleConfig) GoogleComputeOrganizationSecurityPolicyRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig">GoogleComputeOrganizationSecurityPolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig">GoogleComputeOrganizationSecurityPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetEnableLogging">ResetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetPreview">ResetPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetTargetResources">ResetTargetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetTargetServiceAccounts">ResetTargetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putMatch"></a>

```go
func PutMatch(value GoogleComputeOrganizationSecurityPolicyRuleMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeOrganizationSecurityPolicyRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts">GoogleComputeOrganizationSecurityPolicyRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetEnableLogging` <a name="ResetEnableLogging" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetEnableLogging"></a>

```go
func ResetEnableLogging()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetId"></a>

```go
func ResetId()
```

##### `ResetPreview` <a name="ResetPreview" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetPreview"></a>

```go
func ResetPreview()
```

##### `ResetTargetResources` <a name="ResetTargetResources" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetTargetResources"></a>

```go
func ResetTargetResources()
```

##### `ResetTargetServiceAccounts` <a name="ResetTargetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetTargetServiceAccounts"></a>

```go
func ResetTargetServiceAccounts()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeOrganizationSecurityPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeorganizationsecuritypolicyrule"

googlecomputeorganizationsecuritypolicyrule.GoogleComputeOrganizationSecurityPolicyRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeorganizationsecuritypolicyrule"

googlecomputeorganizationsecuritypolicyrule.GoogleComputeOrganizationSecurityPolicyRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeorganizationsecuritypolicyrule"

googlecomputeorganizationsecuritypolicyrule.GoogleComputeOrganizationSecurityPolicyRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeorganizationsecuritypolicyrule"

googlecomputeorganizationsecuritypolicyrule.GoogleComputeOrganizationSecurityPolicyRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeOrganizationSecurityPolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeOrganizationSecurityPolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeOrganizationSecurityPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeOrganizationSecurityPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference">GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference">GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.previewInput">PreviewInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetResourcesInput">TargetResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetServiceAccountsInput">TargetServiceAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.preview">Preview</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetResources">TargetResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetServiceAccounts">TargetServiceAccounts</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.match"></a>

```go
func Match() GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference">GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.timeouts"></a>

```go
func Timeouts() GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference">GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.enableLoggingInput"></a>

```go
func EnableLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.matchInput"></a>

```go
func MatchInput() GoogleComputeOrganizationSecurityPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a>

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `PreviewInput`<sup>Optional</sup> <a name="PreviewInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.previewInput"></a>

```go
func PreviewInput() interface{}
```

- *Type:* interface{}

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `TargetResourcesInput`<sup>Optional</sup> <a name="TargetResourcesInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetResourcesInput"></a>

```go
func TargetResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetServiceAccountsInput`<sup>Optional</sup> <a name="TargetServiceAccountsInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetServiceAccountsInput"></a>

```go
func TargetServiceAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.enableLogging"></a>

```go
func EnableLogging() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.preview"></a>

```go
func Preview() interface{}
```

- *Type:* interface{}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `TargetResources`<sup>Required</sup> <a name="TargetResources" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetResources"></a>

```go
func TargetResources() *[]*string
```

- *Type:* *[]*string

---

##### `TargetServiceAccounts`<sup>Required</sup> <a name="TargetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetServiceAccounts"></a>

```go
func TargetServiceAccounts() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeOrganizationSecurityPolicyRuleConfig <a name="GoogleComputeOrganizationSecurityPolicyRuleConfig" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeorganizationsecuritypolicyrule"

&googlecomputeorganizationsecuritypolicyrule.GoogleComputeOrganizationSecurityPolicyRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: *string,
	Match: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch,
	PolicyId: *string,
	Priority: *f64,
	Description: *string,
	Direction: *string,
	EnableLogging: interface{},
	Id: *string,
	Preview: interface{},
	TargetResources: *[]*string,
	TargetServiceAccounts: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.action">Action</a></code> | <code>*string</code> | The Action to perform when the client connection triggers the rule. Can currently be either "allow", "deny" or "goto_next". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | The ID of the OrganizationSecurityPolicy this rule applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.description">Description</a></code> | <code>*string</code> | A description of the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.direction">Direction</a></code> | <code>*string</code> | The direction in which this rule applies. If unspecified an INGRESS rule is created. Possible values: ["INGRESS", "EGRESS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#id GoogleComputeOrganizationSecurityPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.preview">Preview</a></code> | <code>interface{}</code> | If set to true, the specified action is not enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.targetResources">TargetResources</a></code> | <code>*[]*string</code> | A list of network resource URLs to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.targetServiceAccounts">TargetServiceAccounts</a></code> | <code>*[]*string</code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts">GoogleComputeOrganizationSecurityPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

The Action to perform when the client connection triggers the rule. Can currently be either "allow", "deny" or "goto_next".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#action GoogleComputeOrganizationSecurityPolicyRule#action}

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.match"></a>

```go
Match GoogleComputeOrganizationSecurityPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#match GoogleComputeOrganizationSecurityPolicyRule#match}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

The ID of the OrganizationSecurityPolicy this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#policy_id GoogleComputeOrganizationSecurityPolicyRule#policy_id}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

An integer indicating the priority of a rule in the list.

The priority must be a value
between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
highest priority and 2147483647 is the lowest prority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#priority GoogleComputeOrganizationSecurityPolicyRule#priority}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#description GoogleComputeOrganizationSecurityPolicyRule#description}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

The direction in which this rule applies. If unspecified an INGRESS rule is created. Possible values: ["INGRESS", "EGRESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#direction GoogleComputeOrganizationSecurityPolicyRule#direction}

---

##### `EnableLogging`<sup>Optional</sup> <a name="EnableLogging" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.enableLogging"></a>

```go
EnableLogging interface{}
```

- *Type:* interface{}

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the
configured export destination in Stackdriver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#enable_logging GoogleComputeOrganizationSecurityPolicyRule#enable_logging}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#id GoogleComputeOrganizationSecurityPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Preview`<sup>Optional</sup> <a name="Preview" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.preview"></a>

```go
Preview interface{}
```

- *Type:* interface{}

If set to true, the specified action is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#preview GoogleComputeOrganizationSecurityPolicyRule#preview}

---

##### `TargetResources`<sup>Optional</sup> <a name="TargetResources" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.targetResources"></a>

```go
TargetResources *[]*string
```

- *Type:* *[]*string

A list of network resource URLs to which this rule applies.

This field allows you to control which network's VMs get
this rule. If this field is left blank, all VMs
within the organization will receive the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#target_resources GoogleComputeOrganizationSecurityPolicyRule#target_resources}

---

##### `TargetServiceAccounts`<sup>Optional</sup> <a name="TargetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.targetServiceAccounts"></a>

```go
TargetServiceAccounts *[]*string
```

- *Type:* *[]*string

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#target_service_accounts GoogleComputeOrganizationSecurityPolicyRule#target_service_accounts}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeOrganizationSecurityPolicyRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts">GoogleComputeOrganizationSecurityPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#timeouts GoogleComputeOrganizationSecurityPolicyRule#timeouts}

---

### GoogleComputeOrganizationSecurityPolicyRuleMatch <a name="GoogleComputeOrganizationSecurityPolicyRuleMatch" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeorganizationsecuritypolicyrule"

&googlecomputeorganizationsecuritypolicyrule.GoogleComputeOrganizationSecurityPolicyRuleMatch {
	Config: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig,
	Description: *string,
	VersionedExpr: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig">GoogleComputeOrganizationSecurityPolicyRuleMatchConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.property.description">Description</a></code> | <code>*string</code> | A description of the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.property.versionedExpr">VersionedExpr</a></code> | <code>*string</code> | Preconfigured versioned expression. For organization security policy rules, the only supported type is "FIREWALL". Default value: "FIREWALL" Possible values: ["FIREWALL"]. |

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.property.config"></a>

```go
Config GoogleComputeOrganizationSecurityPolicyRuleMatchConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig">GoogleComputeOrganizationSecurityPolicyRuleMatchConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#config GoogleComputeOrganizationSecurityPolicyRule#config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#description GoogleComputeOrganizationSecurityPolicyRule#description}

---

##### `VersionedExpr`<sup>Optional</sup> <a name="VersionedExpr" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.property.versionedExpr"></a>

```go
VersionedExpr *string
```

- *Type:* *string

Preconfigured versioned expression. For organization security policy rules, the only supported type is "FIREWALL". Default value: "FIREWALL" Possible values: ["FIREWALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#versioned_expr GoogleComputeOrganizationSecurityPolicyRule#versioned_expr}

---

### GoogleComputeOrganizationSecurityPolicyRuleMatchConfig <a name="GoogleComputeOrganizationSecurityPolicyRuleMatchConfig" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeorganizationsecuritypolicyrule"

&googlecomputeorganizationsecuritypolicyrule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig {
	Layer4Config: interface{},
	DestIpRanges: *[]*string,
	SrcIpRanges: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig.property.layer4Config">Layer4Config</a></code> | <code>interface{}</code> | layer4_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig.property.destIpRanges">DestIpRanges</a></code> | <code>*[]*string</code> | Destination IP address range in CIDR format. Required for EGRESS rules. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | Source IP address range in CIDR format. Required for INGRESS rules. |

---

##### `Layer4Config`<sup>Required</sup> <a name="Layer4Config" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig.property.layer4Config"></a>

```go
Layer4Config interface{}
```

- *Type:* interface{}

layer4_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#layer4_config GoogleComputeOrganizationSecurityPolicyRule#layer4_config}

---

##### `DestIpRanges`<sup>Optional</sup> <a name="DestIpRanges" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig.property.destIpRanges"></a>

```go
DestIpRanges *[]*string
```

- *Type:* *[]*string

Destination IP address range in CIDR format. Required for EGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#dest_ip_ranges GoogleComputeOrganizationSecurityPolicyRule#dest_ip_ranges}

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig.property.srcIpRanges"></a>

```go
SrcIpRanges *[]*string
```

- *Type:* *[]*string

Source IP address range in CIDR format. Required for INGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#src_ip_ranges GoogleComputeOrganizationSecurityPolicyRule#src_ip_ranges}

---

### GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config <a name="GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeorganizationsecuritypolicyrule"

&googlecomputeorganizationsecuritypolicyrule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config {
	IpProtocol: *string,
	Ports: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config.property.ports">Ports</a></code> | <code>*[]*string</code> | An optional list of ports to which this rule applies. |

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config.property.ipProtocol"></a>

```go
IpProtocol *string
```

- *Type:* *string

The IP protocol to which this rule applies.

The protocol
type is required when creating a firewall rule.
This value can either be one of the following well
known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp),
or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#ip_protocol GoogleComputeOrganizationSecurityPolicyRule#ip_protocol}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config.property.ports"></a>

```go
Ports *[]*string
```

- *Type:* *[]*string

An optional list of ports to which this rule applies.

This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.

Example inputs include: ["22"], ["80","443"], and
["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#ports GoogleComputeOrganizationSecurityPolicyRule#ports}

---

### GoogleComputeOrganizationSecurityPolicyRuleTimeouts <a name="GoogleComputeOrganizationSecurityPolicyRuleTimeouts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeorganizationsecuritypolicyrule"

&googlecomputeorganizationsecuritypolicyrule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#create GoogleComputeOrganizationSecurityPolicyRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#delete GoogleComputeOrganizationSecurityPolicyRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#update GoogleComputeOrganizationSecurityPolicyRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#create GoogleComputeOrganizationSecurityPolicyRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#delete GoogleComputeOrganizationSecurityPolicyRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_rule#update GoogleComputeOrganizationSecurityPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList <a name="GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeorganizationsecuritypolicyrule"

googlecomputeorganizationsecuritypolicyrule.NewGoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.get"></a>

```go
func Get(index *f64) GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference <a name="GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeorganizationsecuritypolicyrule"

googlecomputeorganizationsecuritypolicyrule.NewGoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.resetPorts"></a>

```go
func ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.portsInput">PortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.ports">Ports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.ipProtocolInput"></a>

```go
func IpProtocolInput() *string
```

- *Type:* *string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.portsInput"></a>

```go
func PortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.ipProtocol"></a>

```go
func IpProtocol() *string
```

- *Type:* *string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.ports"></a>

```go
func Ports() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference <a name="GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeorganizationsecuritypolicyrule"

googlecomputeorganizationsecuritypolicyrule.NewGoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.putLayer4Config">PutLayer4Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resetDestIpRanges">ResetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLayer4Config` <a name="PutLayer4Config" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.putLayer4Config"></a>

```go
func PutLayer4Config(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.putLayer4Config.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestIpRanges` <a name="ResetDestIpRanges" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resetDestIpRanges"></a>

```go
func ResetDestIpRanges()
```

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resetSrcIpRanges"></a>

```go
func ResetSrcIpRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.layer4Config">Layer4Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList">GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.destIpRangesInput">DestIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.layer4ConfigInput">Layer4ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.destIpRanges">DestIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig">GoogleComputeOrganizationSecurityPolicyRuleMatchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Layer4Config`<sup>Required</sup> <a name="Layer4Config" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.layer4Config"></a>

```go
func Layer4Config() GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList">GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList</a>

---

##### `DestIpRangesInput`<sup>Optional</sup> <a name="DestIpRangesInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.destIpRangesInput"></a>

```go
func DestIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Layer4ConfigInput`<sup>Optional</sup> <a name="Layer4ConfigInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.layer4ConfigInput"></a>

```go
func Layer4ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput"></a>

```go
func SrcIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestIpRanges`<sup>Required</sup> <a name="DestIpRanges" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.destIpRanges"></a>

```go
func DestIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges"></a>

```go
func SrcIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeOrganizationSecurityPolicyRuleMatchConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig">GoogleComputeOrganizationSecurityPolicyRuleMatchConfig</a>

---


### GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference <a name="GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeorganizationsecuritypolicyrule"

googlecomputeorganizationsecuritypolicyrule.NewGoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetVersionedExpr">ResetVersionedExpr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.putConfig"></a>

```go
func PutConfig(value GoogleComputeOrganizationSecurityPolicyRuleMatchConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig">GoogleComputeOrganizationSecurityPolicyRuleMatchConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetVersionedExpr` <a name="ResetVersionedExpr" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetVersionedExpr"></a>

```go
func ResetVersionedExpr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference">GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig">GoogleComputeOrganizationSecurityPolicyRuleMatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExprInput">VersionedExprInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExpr">VersionedExpr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.config"></a>

```go
func Config() GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference">GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.configInput"></a>

```go
func ConfigInput() GoogleComputeOrganizationSecurityPolicyRuleMatchConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig">GoogleComputeOrganizationSecurityPolicyRuleMatchConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `VersionedExprInput`<sup>Optional</sup> <a name="VersionedExprInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExprInput"></a>

```go
func VersionedExprInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `VersionedExpr`<sup>Required</sup> <a name="VersionedExpr" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExpr"></a>

```go
func VersionedExpr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeOrganizationSecurityPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a>

---


### GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference <a name="GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeorganizationsecuritypolicyrule"

googlecomputeorganizationsecuritypolicyrule.NewGoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



