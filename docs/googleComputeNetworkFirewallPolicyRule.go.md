# `googleComputeNetworkFirewallPolicyRule` Submodule <a name="`googleComputeNetworkFirewallPolicyRule` Submodule" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNetworkFirewallPolicyRule <a name="GoogleComputeNetworkFirewallPolicyRule" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule google_compute_network_firewall_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkfirewallpolicyrule"

googlecomputenetworkfirewallpolicyrule.NewGoogleComputeNetworkFirewallPolicyRule(scope Construct, id *string, config GoogleComputeNetworkFirewallPolicyRuleConfig) GoogleComputeNetworkFirewallPolicyRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig">GoogleComputeNetworkFirewallPolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig">GoogleComputeNetworkFirewallPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.putTargetSecureTags">PutTargetSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetEnableLogging">ResetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetRuleName">ResetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetSecurityProfileGroup">ResetSecurityProfileGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetTargetSecureTags">ResetTargetSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetTargetServiceAccounts">ResetTargetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetTlsInspect">ResetTlsInspect</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.putMatch"></a>

```go
func PutMatch(value GoogleComputeNetworkFirewallPolicyRuleMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch">GoogleComputeNetworkFirewallPolicyRuleMatch</a>

---

##### `PutTargetSecureTags` <a name="PutTargetSecureTags" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.putTargetSecureTags"></a>

```go
func PutTargetSecureTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.putTargetSecureTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeNetworkFirewallPolicyRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeouts">GoogleComputeNetworkFirewallPolicyRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetEnableLogging` <a name="ResetEnableLogging" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetEnableLogging"></a>

```go
func ResetEnableLogging()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRuleName` <a name="ResetRuleName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetRuleName"></a>

```go
func ResetRuleName()
```

##### `ResetSecurityProfileGroup` <a name="ResetSecurityProfileGroup" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetSecurityProfileGroup"></a>

```go
func ResetSecurityProfileGroup()
```

##### `ResetTargetSecureTags` <a name="ResetTargetSecureTags" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetTargetSecureTags"></a>

```go
func ResetTargetSecureTags()
```

##### `ResetTargetServiceAccounts` <a name="ResetTargetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetTargetServiceAccounts"></a>

```go
func ResetTargetServiceAccounts()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTlsInspect` <a name="ResetTlsInspect" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.resetTlsInspect"></a>

```go
func ResetTlsInspect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeNetworkFirewallPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkfirewallpolicyrule"

googlecomputenetworkfirewallpolicyrule.GoogleComputeNetworkFirewallPolicyRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkfirewallpolicyrule"

googlecomputenetworkfirewallpolicyrule.GoogleComputeNetworkFirewallPolicyRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkfirewallpolicyrule"

googlecomputenetworkfirewallpolicyrule.GoogleComputeNetworkFirewallPolicyRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkfirewallpolicyrule"

googlecomputenetworkfirewallpolicyrule.GoogleComputeNetworkFirewallPolicyRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeNetworkFirewallPolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeNetworkFirewallPolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeNetworkFirewallPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeNetworkFirewallPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference">GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.ruleTupleCount">RuleTupleCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.targetSecureTags">TargetSecureTags</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList">GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference">GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.firewallPolicyInput">FirewallPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch">GoogleComputeNetworkFirewallPolicyRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.ruleNameInput">RuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.securityProfileGroupInput">SecurityProfileGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.targetSecureTagsInput">TargetSecureTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.targetServiceAccountsInput">TargetServiceAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.tlsInspectInput">TlsInspectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.firewallPolicy">FirewallPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.securityProfileGroup">SecurityProfileGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.targetServiceAccounts">TargetServiceAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.tlsInspect">TlsInspect</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.match"></a>

```go
func Match() GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference">GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference</a>

---

##### `RuleTupleCount`<sup>Required</sup> <a name="RuleTupleCount" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.ruleTupleCount"></a>

```go
func RuleTupleCount() *f64
```

- *Type:* *f64

---

##### `TargetSecureTags`<sup>Required</sup> <a name="TargetSecureTags" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.targetSecureTags"></a>

```go
func TargetSecureTags() GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList">GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.timeouts"></a>

```go
func Timeouts() GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference">GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.enableLoggingInput"></a>

```go
func EnableLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `FirewallPolicyInput`<sup>Optional</sup> <a name="FirewallPolicyInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.firewallPolicyInput"></a>

```go
func FirewallPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.matchInput"></a>

```go
func MatchInput() GoogleComputeNetworkFirewallPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch">GoogleComputeNetworkFirewallPolicyRuleMatch</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.ruleNameInput"></a>

```go
func RuleNameInput() *string
```

- *Type:* *string

---

##### `SecurityProfileGroupInput`<sup>Optional</sup> <a name="SecurityProfileGroupInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.securityProfileGroupInput"></a>

```go
func SecurityProfileGroupInput() *string
```

- *Type:* *string

---

##### `TargetSecureTagsInput`<sup>Optional</sup> <a name="TargetSecureTagsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.targetSecureTagsInput"></a>

```go
func TargetSecureTagsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetServiceAccountsInput`<sup>Optional</sup> <a name="TargetServiceAccountsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.targetServiceAccountsInput"></a>

```go
func TargetServiceAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TlsInspectInput`<sup>Optional</sup> <a name="TlsInspectInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.tlsInspectInput"></a>

```go
func TlsInspectInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.enableLogging"></a>

```go
func EnableLogging() interface{}
```

- *Type:* interface{}

---

##### `FirewallPolicy`<sup>Required</sup> <a name="FirewallPolicy" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.firewallPolicy"></a>

```go
func FirewallPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `SecurityProfileGroup`<sup>Required</sup> <a name="SecurityProfileGroup" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.securityProfileGroup"></a>

```go
func SecurityProfileGroup() *string
```

- *Type:* *string

---

##### `TargetServiceAccounts`<sup>Required</sup> <a name="TargetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.targetServiceAccounts"></a>

```go
func TargetServiceAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `TlsInspect`<sup>Required</sup> <a name="TlsInspect" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.tlsInspect"></a>

```go
func TlsInspect() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNetworkFirewallPolicyRuleConfig <a name="GoogleComputeNetworkFirewallPolicyRuleConfig" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkfirewallpolicyrule"

&googlecomputenetworkfirewallpolicyrule.GoogleComputeNetworkFirewallPolicyRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: *string,
	Direction: *string,
	FirewallPolicy: *string,
	Match: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch,
	Priority: *f64,
	Description: *string,
	Disabled: interface{},
	EnableLogging: interface{},
	Id: *string,
	Project: *string,
	RuleName: *string,
	SecurityProfileGroup: *string,
	TargetSecureTags: interface{},
	TargetServiceAccounts: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeouts,
	TlsInspect: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.action">Action</a></code> | <code>*string</code> | The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny", "goto_next" and "apply_security_profile_group". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.direction">Direction</a></code> | <code>*string</code> | The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.firewallPolicy">FirewallPolicy</a></code> | <code>*string</code> | The firewall policy of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch">GoogleComputeNetworkFirewallPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.description">Description</a></code> | <code>*string</code> | An optional description for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#id GoogleComputeNetworkFirewallPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#project GoogleComputeNetworkFirewallPolicyRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.ruleName">RuleName</a></code> | <code>*string</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.securityProfileGroup">SecurityProfileGroup</a></code> | <code>*string</code> | A fully-qualified URL of a SecurityProfile resource instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.targetSecureTags">TargetSecureTags</a></code> | <code>interface{}</code> | target_secure_tags block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.targetServiceAccounts">TargetServiceAccounts</a></code> | <code>*[]*string</code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeouts">GoogleComputeNetworkFirewallPolicyRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.tlsInspect">TlsInspect</a></code> | <code>interface{}</code> | Boolean flag indicating if the traffic should be TLS decrypted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny", "goto_next" and "apply_security_profile_group".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#action GoogleComputeNetworkFirewallPolicyRule#action}

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#direction GoogleComputeNetworkFirewallPolicyRule#direction}

---

##### `FirewallPolicy`<sup>Required</sup> <a name="FirewallPolicy" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.firewallPolicy"></a>

```go
FirewallPolicy *string
```

- *Type:* *string

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#firewall_policy GoogleComputeNetworkFirewallPolicyRule#firewall_policy}

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.match"></a>

```go
Match GoogleComputeNetworkFirewallPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch">GoogleComputeNetworkFirewallPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#match GoogleComputeNetworkFirewallPolicyRule#match}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#priority GoogleComputeNetworkFirewallPolicyRule#priority}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#description GoogleComputeNetworkFirewallPolicyRule#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Denotes whether the firewall policy rule is disabled.

When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist.
If this is unspecified, the firewall policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#disabled GoogleComputeNetworkFirewallPolicyRule#disabled}

---

##### `EnableLogging`<sup>Optional</sup> <a name="EnableLogging" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.enableLogging"></a>

```go
EnableLogging interface{}
```

- *Type:* interface{}

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the configured export destination in Stackdriver.
Logs may be exported to BigQuery or Pub/Sub.
Note: you cannot enable logging on "goto_next" rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#enable_logging GoogleComputeNetworkFirewallPolicyRule#enable_logging}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#id GoogleComputeNetworkFirewallPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#project GoogleComputeNetworkFirewallPolicyRule#project}.

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.ruleName"></a>

```go
RuleName *string
```

- *Type:* *string

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#rule_name GoogleComputeNetworkFirewallPolicyRule#rule_name}

---

##### `SecurityProfileGroup`<sup>Optional</sup> <a name="SecurityProfileGroup" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.securityProfileGroup"></a>

```go
SecurityProfileGroup *string
```

- *Type:* *string

A fully-qualified URL of a SecurityProfile resource instance.

Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group
Must be specified if action = 'apply_security_profile_group' and cannot be specified for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#security_profile_group GoogleComputeNetworkFirewallPolicyRule#security_profile_group}

---

##### `TargetSecureTags`<sup>Optional</sup> <a name="TargetSecureTags" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.targetSecureTags"></a>

```go
TargetSecureTags interface{}
```

- *Type:* interface{}

target_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#target_secure_tags GoogleComputeNetworkFirewallPolicyRule#target_secure_tags}

---

##### `TargetServiceAccounts`<sup>Optional</sup> <a name="TargetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.targetServiceAccounts"></a>

```go
TargetServiceAccounts *[]*string
```

- *Type:* *[]*string

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#target_service_accounts GoogleComputeNetworkFirewallPolicyRule#target_service_accounts}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeNetworkFirewallPolicyRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeouts">GoogleComputeNetworkFirewallPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#timeouts GoogleComputeNetworkFirewallPolicyRule#timeouts}

---

##### `TlsInspect`<sup>Optional</sup> <a name="TlsInspect" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleConfig.property.tlsInspect"></a>

```go
TlsInspect interface{}
```

- *Type:* interface{}

Boolean flag indicating if the traffic should be TLS decrypted.

Can be set only if action = 'apply_security_profile_group' and cannot be set for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#tls_inspect GoogleComputeNetworkFirewallPolicyRule#tls_inspect}

---

### GoogleComputeNetworkFirewallPolicyRuleMatch <a name="GoogleComputeNetworkFirewallPolicyRuleMatch" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkfirewallpolicyrule"

&googlecomputenetworkfirewallpolicyrule.GoogleComputeNetworkFirewallPolicyRuleMatch {
	Layer4Configs: interface{},
	DestAddressGroups: *[]*string,
	DestFqdns: *[]*string,
	DestIpRanges: *[]*string,
	DestNetworkScope: *string,
	DestRegionCodes: *[]*string,
	DestThreatIntelligences: *[]*string,
	SrcAddressGroups: *[]*string,
	SrcFqdns: *[]*string,
	SrcIpRanges: *[]*string,
	SrcNetworks: *[]*string,
	SrcNetworkScope: *string,
	SrcRegionCodes: *[]*string,
	SrcSecureTags: interface{},
	SrcThreatIntelligences: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.layer4Configs">Layer4Configs</a></code> | <code>interface{}</code> | layer4_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.destAddressGroups">DestAddressGroups</a></code> | <code>*[]*string</code> | Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.destFqdns">DestFqdns</a></code> | <code>*[]*string</code> | Fully Qualified Domain Name (FQDN) which should be matched against traffic destination. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.destIpRanges">DestIpRanges</a></code> | <code>*[]*string</code> | CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.destNetworkScope">DestNetworkScope</a></code> | <code>*string</code> | Network scope of the traffic destination. Possible values: ["INTERNET", "INTRA_VPC", "NON_INTERNET", "VPC_NETWORKS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.destRegionCodes">DestRegionCodes</a></code> | <code>*[]*string</code> | Region codes whose IP addresses will be used to match for destination of traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.destThreatIntelligences">DestThreatIntelligences</a></code> | <code>*[]*string</code> | Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.srcAddressGroups">SrcAddressGroups</a></code> | <code>*[]*string</code> | Address groups which should be matched against the traffic source. Maximum number of source address groups is 10. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.srcFqdns">SrcFqdns</a></code> | <code>*[]*string</code> | Fully Qualified Domain Name (FQDN) which should be matched against traffic source. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.srcNetworks">SrcNetworks</a></code> | <code>*[]*string</code> | Networks of the traffic source. It can be either a full or partial url. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.srcNetworkScope">SrcNetworkScope</a></code> | <code>*string</code> | Network scope of the traffic source. Possible values: ["INTERNET", "INTRA_VPC", "NON_INTERNET", "VPC_NETWORKS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.srcRegionCodes">SrcRegionCodes</a></code> | <code>*[]*string</code> | Region codes whose IP addresses will be used to match for source of traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.srcSecureTags">SrcSecureTags</a></code> | <code>interface{}</code> | src_secure_tags block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.srcThreatIntelligences">SrcThreatIntelligences</a></code> | <code>*[]*string</code> | Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source. |

---

##### `Layer4Configs`<sup>Required</sup> <a name="Layer4Configs" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.layer4Configs"></a>

```go
Layer4Configs interface{}
```

- *Type:* interface{}

layer4_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#layer4_configs GoogleComputeNetworkFirewallPolicyRule#layer4_configs}

---

##### `DestAddressGroups`<sup>Optional</sup> <a name="DestAddressGroups" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.destAddressGroups"></a>

```go
DestAddressGroups *[]*string
```

- *Type:* *[]*string

Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#dest_address_groups GoogleComputeNetworkFirewallPolicyRule#dest_address_groups}

---

##### `DestFqdns`<sup>Optional</sup> <a name="DestFqdns" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.destFqdns"></a>

```go
DestFqdns *[]*string
```

- *Type:* *[]*string

Fully Qualified Domain Name (FQDN) which should be matched against traffic destination.

Maximum number of destination fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#dest_fqdns GoogleComputeNetworkFirewallPolicyRule#dest_fqdns}

---

##### `DestIpRanges`<sup>Optional</sup> <a name="DestIpRanges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.destIpRanges"></a>

```go
DestIpRanges *[]*string
```

- *Type:* *[]*string

CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#dest_ip_ranges GoogleComputeNetworkFirewallPolicyRule#dest_ip_ranges}

---

##### `DestNetworkScope`<sup>Optional</sup> <a name="DestNetworkScope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.destNetworkScope"></a>

```go
DestNetworkScope *string
```

- *Type:* *string

Network scope of the traffic destination. Possible values: ["INTERNET", "INTRA_VPC", "NON_INTERNET", "VPC_NETWORKS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#dest_network_scope GoogleComputeNetworkFirewallPolicyRule#dest_network_scope}

---

##### `DestRegionCodes`<sup>Optional</sup> <a name="DestRegionCodes" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.destRegionCodes"></a>

```go
DestRegionCodes *[]*string
```

- *Type:* *[]*string

Region codes whose IP addresses will be used to match for destination of traffic.

Should be specified as 2 letter country code defined as per ISO 3166 alpha-2 country codes. ex."US" Maximum number of dest region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#dest_region_codes GoogleComputeNetworkFirewallPolicyRule#dest_region_codes}

---

##### `DestThreatIntelligences`<sup>Optional</sup> <a name="DestThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.destThreatIntelligences"></a>

```go
DestThreatIntelligences *[]*string
```

- *Type:* *[]*string

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#dest_threat_intelligences GoogleComputeNetworkFirewallPolicyRule#dest_threat_intelligences}

---

##### `SrcAddressGroups`<sup>Optional</sup> <a name="SrcAddressGroups" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.srcAddressGroups"></a>

```go
SrcAddressGroups *[]*string
```

- *Type:* *[]*string

Address groups which should be matched against the traffic source. Maximum number of source address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#src_address_groups GoogleComputeNetworkFirewallPolicyRule#src_address_groups}

---

##### `SrcFqdns`<sup>Optional</sup> <a name="SrcFqdns" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.srcFqdns"></a>

```go
SrcFqdns *[]*string
```

- *Type:* *[]*string

Fully Qualified Domain Name (FQDN) which should be matched against traffic source.

Maximum number of source fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#src_fqdns GoogleComputeNetworkFirewallPolicyRule#src_fqdns}

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.srcIpRanges"></a>

```go
SrcIpRanges *[]*string
```

- *Type:* *[]*string

CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#src_ip_ranges GoogleComputeNetworkFirewallPolicyRule#src_ip_ranges}

---

##### `SrcNetworks`<sup>Optional</sup> <a name="SrcNetworks" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.srcNetworks"></a>

```go
SrcNetworks *[]*string
```

- *Type:* *[]*string

Networks of the traffic source. It can be either a full or partial url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#src_networks GoogleComputeNetworkFirewallPolicyRule#src_networks}

---

##### `SrcNetworkScope`<sup>Optional</sup> <a name="SrcNetworkScope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.srcNetworkScope"></a>

```go
SrcNetworkScope *string
```

- *Type:* *string

Network scope of the traffic source. Possible values: ["INTERNET", "INTRA_VPC", "NON_INTERNET", "VPC_NETWORKS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#src_network_scope GoogleComputeNetworkFirewallPolicyRule#src_network_scope}

---

##### `SrcRegionCodes`<sup>Optional</sup> <a name="SrcRegionCodes" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.srcRegionCodes"></a>

```go
SrcRegionCodes *[]*string
```

- *Type:* *[]*string

Region codes whose IP addresses will be used to match for source of traffic.

Should be specified as 2 letter country code defined as per ISO 3166 alpha-2 country codes. ex."US" Maximum number of source region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#src_region_codes GoogleComputeNetworkFirewallPolicyRule#src_region_codes}

---

##### `SrcSecureTags`<sup>Optional</sup> <a name="SrcSecureTags" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.srcSecureTags"></a>

```go
SrcSecureTags interface{}
```

- *Type:* interface{}

src_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#src_secure_tags GoogleComputeNetworkFirewallPolicyRule#src_secure_tags}

---

##### `SrcThreatIntelligences`<sup>Optional</sup> <a name="SrcThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch.property.srcThreatIntelligences"></a>

```go
SrcThreatIntelligences *[]*string
```

- *Type:* *[]*string

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#src_threat_intelligences GoogleComputeNetworkFirewallPolicyRule#src_threat_intelligences}

---

### GoogleComputeNetworkFirewallPolicyRuleMatchLayer4Configs <a name="GoogleComputeNetworkFirewallPolicyRuleMatchLayer4Configs" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4Configs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4Configs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkfirewallpolicyrule"

&googlecomputenetworkfirewallpolicyrule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4Configs {
	IpProtocol: *string,
	Ports: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4Configs.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4Configs.property.ports">Ports</a></code> | <code>*[]*string</code> | An optional list of ports to which this rule applies. |

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4Configs.property.ipProtocol"></a>

```go
IpProtocol *string
```

- *Type:* *string

The IP protocol to which this rule applies.

The protocol type is required when creating a firewall rule.
This value can either be one of the following well known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#ip_protocol GoogleComputeNetworkFirewallPolicyRule#ip_protocol}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4Configs.property.ports"></a>

```go
Ports *[]*string
```

- *Type:* *[]*string

An optional list of ports to which this rule applies.

This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port.
Example inputs include: ["22"], ["80","443"], and ["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#ports GoogleComputeNetworkFirewallPolicyRule#ports}

---

### GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTags <a name="GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTags" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkfirewallpolicyrule"

&googlecomputenetworkfirewallpolicyrule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTags {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTags.property.name">Name</a></code> | <code>*string</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTags.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the secure tag, created with TagManager's TagValue API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#name GoogleComputeNetworkFirewallPolicyRule#name}

---

### GoogleComputeNetworkFirewallPolicyRuleTargetSecureTags <a name="GoogleComputeNetworkFirewallPolicyRuleTargetSecureTags" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkfirewallpolicyrule"

&googlecomputenetworkfirewallpolicyrule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTags {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTags.property.name">Name</a></code> | <code>*string</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTags.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the secure tag, created with TagManager's TagValue API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#name GoogleComputeNetworkFirewallPolicyRule#name}

---

### GoogleComputeNetworkFirewallPolicyRuleTimeouts <a name="GoogleComputeNetworkFirewallPolicyRuleTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkfirewallpolicyrule"

&googlecomputenetworkfirewallpolicyrule.GoogleComputeNetworkFirewallPolicyRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#create GoogleComputeNetworkFirewallPolicyRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#delete GoogleComputeNetworkFirewallPolicyRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#update GoogleComputeNetworkFirewallPolicyRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#create GoogleComputeNetworkFirewallPolicyRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#delete GoogleComputeNetworkFirewallPolicyRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_rule#update GoogleComputeNetworkFirewallPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList <a name="GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkfirewallpolicyrule"

googlecomputenetworkfirewallpolicyrule.NewGoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.get"></a>

```go
func Get(index *f64) GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference <a name="GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkfirewallpolicyrule"

googlecomputenetworkfirewallpolicyrule.NewGoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resetPorts"></a>

```go
func ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.portsInput">PortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ports">Ports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput"></a>

```go
func IpProtocolInput() *string
```

- *Type:* *string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.portsInput"></a>

```go
func PortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocol"></a>

```go
func IpProtocol() *string
```

- *Type:* *string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ports"></a>

```go
func Ports() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference <a name="GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkfirewallpolicyrule"

googlecomputenetworkfirewallpolicyrule.NewGoogleComputeNetworkFirewallPolicyRuleMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.putLayer4Configs">PutLayer4Configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.putSrcSecureTags">PutSrcSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestAddressGroups">ResetDestAddressGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestFqdns">ResetDestFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestIpRanges">ResetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestNetworkScope">ResetDestNetworkScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestRegionCodes">ResetDestRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestThreatIntelligences">ResetDestThreatIntelligences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcAddressGroups">ResetSrcAddressGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcFqdns">ResetSrcFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcNetworks">ResetSrcNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcNetworkScope">ResetSrcNetworkScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcRegionCodes">ResetSrcRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcSecureTags">ResetSrcSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcThreatIntelligences">ResetSrcThreatIntelligences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLayer4Configs` <a name="PutLayer4Configs" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.putLayer4Configs"></a>

```go
func PutLayer4Configs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.putLayer4Configs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSrcSecureTags` <a name="PutSrcSecureTags" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.putSrcSecureTags"></a>

```go
func PutSrcSecureTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.putSrcSecureTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestAddressGroups` <a name="ResetDestAddressGroups" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestAddressGroups"></a>

```go
func ResetDestAddressGroups()
```

##### `ResetDestFqdns` <a name="ResetDestFqdns" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestFqdns"></a>

```go
func ResetDestFqdns()
```

##### `ResetDestIpRanges` <a name="ResetDestIpRanges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestIpRanges"></a>

```go
func ResetDestIpRanges()
```

##### `ResetDestNetworkScope` <a name="ResetDestNetworkScope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestNetworkScope"></a>

```go
func ResetDestNetworkScope()
```

##### `ResetDestRegionCodes` <a name="ResetDestRegionCodes" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestRegionCodes"></a>

```go
func ResetDestRegionCodes()
```

##### `ResetDestThreatIntelligences` <a name="ResetDestThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestThreatIntelligences"></a>

```go
func ResetDestThreatIntelligences()
```

##### `ResetSrcAddressGroups` <a name="ResetSrcAddressGroups" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcAddressGroups"></a>

```go
func ResetSrcAddressGroups()
```

##### `ResetSrcFqdns` <a name="ResetSrcFqdns" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcFqdns"></a>

```go
func ResetSrcFqdns()
```

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcIpRanges"></a>

```go
func ResetSrcIpRanges()
```

##### `ResetSrcNetworks` <a name="ResetSrcNetworks" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcNetworks"></a>

```go
func ResetSrcNetworks()
```

##### `ResetSrcNetworkScope` <a name="ResetSrcNetworkScope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcNetworkScope"></a>

```go
func ResetSrcNetworkScope()
```

##### `ResetSrcRegionCodes` <a name="ResetSrcRegionCodes" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcRegionCodes"></a>

```go
func ResetSrcRegionCodes()
```

##### `ResetSrcSecureTags` <a name="ResetSrcSecureTags" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcSecureTags"></a>

```go
func ResetSrcSecureTags()
```

##### `ResetSrcThreatIntelligences` <a name="ResetSrcThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcThreatIntelligences"></a>

```go
func ResetSrcThreatIntelligences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.layer4Configs">Layer4Configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList">GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTags">SrcSecureTags</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList">GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destAddressGroupsInput">DestAddressGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destFqdnsInput">DestFqdnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRangesInput">DestIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destNetworkScopeInput">DestNetworkScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destRegionCodesInput">DestRegionCodesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligencesInput">DestThreatIntelligencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.layer4ConfigsInput">Layer4ConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcAddressGroupsInput">SrcAddressGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcFqdnsInput">SrcFqdnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworkScopeInput">SrcNetworkScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworksInput">SrcNetworksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcRegionCodesInput">SrcRegionCodesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTagsInput">SrcSecureTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligencesInput">SrcThreatIntelligencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destAddressGroups">DestAddressGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destFqdns">DestFqdns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRanges">DestIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destNetworkScope">DestNetworkScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destRegionCodes">DestRegionCodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligences">DestThreatIntelligences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcAddressGroups">SrcAddressGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcFqdns">SrcFqdns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworks">SrcNetworks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworkScope">SrcNetworkScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcRegionCodes">SrcRegionCodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligences">SrcThreatIntelligences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch">GoogleComputeNetworkFirewallPolicyRuleMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Layer4Configs`<sup>Required</sup> <a name="Layer4Configs" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.layer4Configs"></a>

```go
func Layer4Configs() GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList">GoogleComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList</a>

---

##### `SrcSecureTags`<sup>Required</sup> <a name="SrcSecureTags" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTags"></a>

```go
func SrcSecureTags() GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList">GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList</a>

---

##### `DestAddressGroupsInput`<sup>Optional</sup> <a name="DestAddressGroupsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destAddressGroupsInput"></a>

```go
func DestAddressGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestFqdnsInput`<sup>Optional</sup> <a name="DestFqdnsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destFqdnsInput"></a>

```go
func DestFqdnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestIpRangesInput`<sup>Optional</sup> <a name="DestIpRangesInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRangesInput"></a>

```go
func DestIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestNetworkScopeInput`<sup>Optional</sup> <a name="DestNetworkScopeInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destNetworkScopeInput"></a>

```go
func DestNetworkScopeInput() *string
```

- *Type:* *string

---

##### `DestRegionCodesInput`<sup>Optional</sup> <a name="DestRegionCodesInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destRegionCodesInput"></a>

```go
func DestRegionCodesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestThreatIntelligencesInput`<sup>Optional</sup> <a name="DestThreatIntelligencesInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligencesInput"></a>

```go
func DestThreatIntelligencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Layer4ConfigsInput`<sup>Optional</sup> <a name="Layer4ConfigsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.layer4ConfigsInput"></a>

```go
func Layer4ConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `SrcAddressGroupsInput`<sup>Optional</sup> <a name="SrcAddressGroupsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcAddressGroupsInput"></a>

```go
func SrcAddressGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcFqdnsInput`<sup>Optional</sup> <a name="SrcFqdnsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcFqdnsInput"></a>

```go
func SrcFqdnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRangesInput"></a>

```go
func SrcIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcNetworkScopeInput`<sup>Optional</sup> <a name="SrcNetworkScopeInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworkScopeInput"></a>

```go
func SrcNetworkScopeInput() *string
```

- *Type:* *string

---

##### `SrcNetworksInput`<sup>Optional</sup> <a name="SrcNetworksInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworksInput"></a>

```go
func SrcNetworksInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcRegionCodesInput`<sup>Optional</sup> <a name="SrcRegionCodesInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcRegionCodesInput"></a>

```go
func SrcRegionCodesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcSecureTagsInput`<sup>Optional</sup> <a name="SrcSecureTagsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTagsInput"></a>

```go
func SrcSecureTagsInput() interface{}
```

- *Type:* interface{}

---

##### `SrcThreatIntelligencesInput`<sup>Optional</sup> <a name="SrcThreatIntelligencesInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligencesInput"></a>

```go
func SrcThreatIntelligencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestAddressGroups`<sup>Required</sup> <a name="DestAddressGroups" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destAddressGroups"></a>

```go
func DestAddressGroups() *[]*string
```

- *Type:* *[]*string

---

##### `DestFqdns`<sup>Required</sup> <a name="DestFqdns" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destFqdns"></a>

```go
func DestFqdns() *[]*string
```

- *Type:* *[]*string

---

##### `DestIpRanges`<sup>Required</sup> <a name="DestIpRanges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRanges"></a>

```go
func DestIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `DestNetworkScope`<sup>Required</sup> <a name="DestNetworkScope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destNetworkScope"></a>

```go
func DestNetworkScope() *string
```

- *Type:* *string

---

##### `DestRegionCodes`<sup>Required</sup> <a name="DestRegionCodes" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destRegionCodes"></a>

```go
func DestRegionCodes() *[]*string
```

- *Type:* *[]*string

---

##### `DestThreatIntelligences`<sup>Required</sup> <a name="DestThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligences"></a>

```go
func DestThreatIntelligences() *[]*string
```

- *Type:* *[]*string

---

##### `SrcAddressGroups`<sup>Required</sup> <a name="SrcAddressGroups" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcAddressGroups"></a>

```go
func SrcAddressGroups() *[]*string
```

- *Type:* *[]*string

---

##### `SrcFqdns`<sup>Required</sup> <a name="SrcFqdns" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcFqdns"></a>

```go
func SrcFqdns() *[]*string
```

- *Type:* *[]*string

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRanges"></a>

```go
func SrcIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `SrcNetworks`<sup>Required</sup> <a name="SrcNetworks" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworks"></a>

```go
func SrcNetworks() *[]*string
```

- *Type:* *[]*string

---

##### `SrcNetworkScope`<sup>Required</sup> <a name="SrcNetworkScope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworkScope"></a>

```go
func SrcNetworkScope() *string
```

- *Type:* *string

---

##### `SrcRegionCodes`<sup>Required</sup> <a name="SrcRegionCodes" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcRegionCodes"></a>

```go
func SrcRegionCodes() *[]*string
```

- *Type:* *[]*string

---

##### `SrcThreatIntelligences`<sup>Required</sup> <a name="SrcThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligences"></a>

```go
func SrcThreatIntelligences() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeNetworkFirewallPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatch">GoogleComputeNetworkFirewallPolicyRuleMatch</a>

---


### GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList <a name="GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkfirewallpolicyrule"

googlecomputenetworkfirewallpolicyrule.NewGoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.get"></a>

```go
func Get(index *f64) GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference <a name="GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkfirewallpolicyrule"

googlecomputenetworkfirewallpolicyrule.NewGoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList <a name="GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkfirewallpolicyrule"

googlecomputenetworkfirewallpolicyrule.NewGoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.get"></a>

```go
func Get(index *f64) GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference <a name="GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkfirewallpolicyrule"

googlecomputenetworkfirewallpolicyrule.NewGoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference <a name="GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputenetworkfirewallpolicyrule"

googlecomputenetworkfirewallpolicyrule.NewGoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyRule.GoogleComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



