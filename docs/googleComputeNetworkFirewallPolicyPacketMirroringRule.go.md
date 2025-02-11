# `googleComputeNetworkFirewallPolicyPacketMirroringRule` Submodule <a name="`googleComputeNetworkFirewallPolicyPacketMirroringRule` Submodule" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNetworkFirewallPolicyPacketMirroringRule <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRule" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule google_compute_network_firewall_policy_packet_mirroring_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicypacketmirroringrule"

googlecomputenetworkfirewallpolicypacketmirroringrule.NewGoogleComputeNetworkFirewallPolicyPacketMirroringRule(scope Construct, id *string, config GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig) GoogleComputeNetworkFirewallPolicyPacketMirroringRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putTargetSecureTags">PutTargetSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetRuleName">ResetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetSecurityProfileGroup">ResetSecurityProfileGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetTargetSecureTags">ResetTargetSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetTlsInspect">ResetTlsInspect</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putMatch"></a>

```go
func PutMatch(value GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch</a>

---

##### `PutTargetSecureTags` <a name="PutTargetSecureTags" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putTargetSecureTags"></a>

```go
func PutTargetSecureTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putTargetSecureTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRuleName` <a name="ResetRuleName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetRuleName"></a>

```go
func ResetRuleName()
```

##### `ResetSecurityProfileGroup` <a name="ResetSecurityProfileGroup" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetSecurityProfileGroup"></a>

```go
func ResetSecurityProfileGroup()
```

##### `ResetTargetSecureTags` <a name="ResetTargetSecureTags" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetTargetSecureTags"></a>

```go
func ResetTargetSecureTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTlsInspect` <a name="ResetTlsInspect" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetTlsInspect"></a>

```go
func ResetTlsInspect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeNetworkFirewallPolicyPacketMirroringRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicypacketmirroringrule"

googlecomputenetworkfirewallpolicypacketmirroringrule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicypacketmirroringrule"

googlecomputenetworkfirewallpolicypacketmirroringrule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicypacketmirroringrule"

googlecomputenetworkfirewallpolicypacketmirroringrule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicypacketmirroringrule"

googlecomputenetworkfirewallpolicypacketmirroringrule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeNetworkFirewallPolicyPacketMirroringRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeNetworkFirewallPolicyPacketMirroringRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeNetworkFirewallPolicyPacketMirroringRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeNetworkFirewallPolicyPacketMirroringRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.ruleTupleCount">RuleTupleCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.targetSecureTags">TargetSecureTags</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.firewallPolicyInput">FirewallPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.ruleNameInput">RuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.securityProfileGroupInput">SecurityProfileGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.targetSecureTagsInput">TargetSecureTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.tlsInspectInput">TlsInspectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.firewallPolicy">FirewallPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.securityProfileGroup">SecurityProfileGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.tlsInspect">TlsInspect</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.match"></a>

```go
func Match() GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference</a>

---

##### `RuleTupleCount`<sup>Required</sup> <a name="RuleTupleCount" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.ruleTupleCount"></a>

```go
func RuleTupleCount() *f64
```

- *Type:* *f64

---

##### `TargetSecureTags`<sup>Required</sup> <a name="TargetSecureTags" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.targetSecureTags"></a>

```go
func TargetSecureTags() GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.timeouts"></a>

```go
func Timeouts() GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `FirewallPolicyInput`<sup>Optional</sup> <a name="FirewallPolicyInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.firewallPolicyInput"></a>

```go
func FirewallPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.matchInput"></a>

```go
func MatchInput() GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.ruleNameInput"></a>

```go
func RuleNameInput() *string
```

- *Type:* *string

---

##### `SecurityProfileGroupInput`<sup>Optional</sup> <a name="SecurityProfileGroupInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.securityProfileGroupInput"></a>

```go
func SecurityProfileGroupInput() *string
```

- *Type:* *string

---

##### `TargetSecureTagsInput`<sup>Optional</sup> <a name="TargetSecureTagsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.targetSecureTagsInput"></a>

```go
func TargetSecureTagsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TlsInspectInput`<sup>Optional</sup> <a name="TlsInspectInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.tlsInspectInput"></a>

```go
func TlsInspectInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `FirewallPolicy`<sup>Required</sup> <a name="FirewallPolicy" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.firewallPolicy"></a>

```go
func FirewallPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `SecurityProfileGroup`<sup>Required</sup> <a name="SecurityProfileGroup" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.securityProfileGroup"></a>

```go
func SecurityProfileGroup() *string
```

- *Type:* *string

---

##### `TlsInspect`<sup>Required</sup> <a name="TlsInspect" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.tlsInspect"></a>

```go
func TlsInspect() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicypacketmirroringrule"

&googlecomputenetworkfirewallpolicypacketmirroringrule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig {
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
	Match: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch,
	Priority: *f64,
	Description: *string,
	Disabled: interface{},
	Id: *string,
	Project: *string,
	RuleName: *string,
	SecurityProfileGroup: *string,
	TargetSecureTags: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts,
	TlsInspect: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.action">Action</a></code> | <code>*string</code> | The Action to perform when the client connection triggers the rule. Valid actions are "mirror", "do_not_mirror", "goto_next". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.direction">Direction</a></code> | <code>*string</code> | The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.firewallPolicy">FirewallPolicy</a></code> | <code>*string</code> | The firewall policy of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.description">Description</a></code> | <code>*string</code> | An optional description for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#id GoogleComputeNetworkFirewallPolicyPacketMirroringRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#project GoogleComputeNetworkFirewallPolicyPacketMirroringRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.ruleName">RuleName</a></code> | <code>*string</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.securityProfileGroup">SecurityProfileGroup</a></code> | <code>*string</code> | A fully-qualified URL of a SecurityProfile resource instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.targetSecureTags">TargetSecureTags</a></code> | <code>interface{}</code> | target_secure_tags block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.tlsInspect">TlsInspect</a></code> | <code>interface{}</code> | Boolean flag indicating if the traffic should be TLS decrypted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

The Action to perform when the client connection triggers the rule. Valid actions are "mirror", "do_not_mirror", "goto_next".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#action GoogleComputeNetworkFirewallPolicyPacketMirroringRule#action}

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#direction GoogleComputeNetworkFirewallPolicyPacketMirroringRule#direction}

---

##### `FirewallPolicy`<sup>Required</sup> <a name="FirewallPolicy" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.firewallPolicy"></a>

```go
FirewallPolicy *string
```

- *Type:* *string

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#firewall_policy GoogleComputeNetworkFirewallPolicyPacketMirroringRule#firewall_policy}

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.match"></a>

```go
Match GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#match GoogleComputeNetworkFirewallPolicyPacketMirroringRule#match}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#priority GoogleComputeNetworkFirewallPolicyPacketMirroringRule#priority}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#description GoogleComputeNetworkFirewallPolicyPacketMirroringRule#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Denotes whether the firewall policy rule is disabled.

When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist.
If this is unspecified, the firewall policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#disabled GoogleComputeNetworkFirewallPolicyPacketMirroringRule#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#id GoogleComputeNetworkFirewallPolicyPacketMirroringRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#project GoogleComputeNetworkFirewallPolicyPacketMirroringRule#project}.

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.ruleName"></a>

```go
RuleName *string
```

- *Type:* *string

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#rule_name GoogleComputeNetworkFirewallPolicyPacketMirroringRule#rule_name}

---

##### `SecurityProfileGroup`<sup>Optional</sup> <a name="SecurityProfileGroup" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.securityProfileGroup"></a>

```go
SecurityProfileGroup *string
```

- *Type:* *string

A fully-qualified URL of a SecurityProfile resource instance.

Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group
Must be specified if action = 'mirror' and cannot be specified for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#security_profile_group GoogleComputeNetworkFirewallPolicyPacketMirroringRule#security_profile_group}

---

##### `TargetSecureTags`<sup>Optional</sup> <a name="TargetSecureTags" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.targetSecureTags"></a>

```go
TargetSecureTags interface{}
```

- *Type:* interface{}

target_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#target_secure_tags GoogleComputeNetworkFirewallPolicyPacketMirroringRule#target_secure_tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#timeouts GoogleComputeNetworkFirewallPolicyPacketMirroringRule#timeouts}

---

##### `TlsInspect`<sup>Optional</sup> <a name="TlsInspect" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.tlsInspect"></a>

```go
TlsInspect interface{}
```

- *Type:* interface{}

Boolean flag indicating if the traffic should be TLS decrypted.

Can be set only if action = 'mirror' and cannot be set for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#tls_inspect GoogleComputeNetworkFirewallPolicyPacketMirroringRule#tls_inspect}

---

### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicypacketmirroringrule"

&googlecomputenetworkfirewallpolicypacketmirroringrule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch {
	Layer4Configs: interface{},
	DestIpRanges: *[]*string,
	SrcIpRanges: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch.property.layer4Configs">Layer4Configs</a></code> | <code>interface{}</code> | layer4_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch.property.destIpRanges">DestIpRanges</a></code> | <code>*[]*string</code> | CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000. |

---

##### `Layer4Configs`<sup>Required</sup> <a name="Layer4Configs" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch.property.layer4Configs"></a>

```go
Layer4Configs interface{}
```

- *Type:* interface{}

layer4_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#layer4_configs GoogleComputeNetworkFirewallPolicyPacketMirroringRule#layer4_configs}

---

##### `DestIpRanges`<sup>Optional</sup> <a name="DestIpRanges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch.property.destIpRanges"></a>

```go
DestIpRanges *[]*string
```

- *Type:* *[]*string

CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#dest_ip_ranges GoogleComputeNetworkFirewallPolicyPacketMirroringRule#dest_ip_ranges}

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch.property.srcIpRanges"></a>

```go
SrcIpRanges *[]*string
```

- *Type:* *[]*string

CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#src_ip_ranges GoogleComputeNetworkFirewallPolicyPacketMirroringRule#src_ip_ranges}

---

### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicypacketmirroringrule"

&googlecomputenetworkfirewallpolicypacketmirroringrule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs {
	IpProtocol: *string,
	Ports: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs.property.ports">Ports</a></code> | <code>*[]*string</code> | An optional list of ports to which this rule applies. |

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs.property.ipProtocol"></a>

```go
IpProtocol *string
```

- *Type:* *string

The IP protocol to which this rule applies.

The protocol type is required when creating a firewall rule.
This value can either be one of the following well known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#ip_protocol GoogleComputeNetworkFirewallPolicyPacketMirroringRule#ip_protocol}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs.property.ports"></a>

```go
Ports *[]*string
```

- *Type:* *[]*string

An optional list of ports to which this rule applies.

This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port.
Example inputs include: ["22"], ["80","443"], and ["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#ports GoogleComputeNetworkFirewallPolicyPacketMirroringRule#ports}

---

### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicypacketmirroringrule"

&googlecomputenetworkfirewallpolicypacketmirroringrule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags.property.name">Name</a></code> | <code>*string</code> | Name of the secure tag, created with TagManager's TagValue API. diff_suppress_func: 'tpgresource.CompareSelfLinkOrResourceName'. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the secure tag, created with TagManager's TagValue API. diff_suppress_func: 'tpgresource.CompareSelfLinkOrResourceName'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#name GoogleComputeNetworkFirewallPolicyPacketMirroringRule#name}

---

### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicypacketmirroringrule"

&googlecomputenetworkfirewallpolicypacketmirroringrule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#create GoogleComputeNetworkFirewallPolicyPacketMirroringRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#delete GoogleComputeNetworkFirewallPolicyPacketMirroringRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#update GoogleComputeNetworkFirewallPolicyPacketMirroringRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#create GoogleComputeNetworkFirewallPolicyPacketMirroringRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#delete GoogleComputeNetworkFirewallPolicyPacketMirroringRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#update GoogleComputeNetworkFirewallPolicyPacketMirroringRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicypacketmirroringrule"

googlecomputenetworkfirewallpolicypacketmirroringrule.NewGoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.get"></a>

```go
func Get(index *f64) GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicypacketmirroringrule"

googlecomputenetworkfirewallpolicypacketmirroringrule.NewGoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.resetPorts"></a>

```go
func ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.portsInput">PortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.ports">Ports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput"></a>

```go
func IpProtocolInput() *string
```

- *Type:* *string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.portsInput"></a>

```go
func PortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.ipProtocol"></a>

```go
func IpProtocol() *string
```

- *Type:* *string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.ports"></a>

```go
func Ports() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicypacketmirroringrule"

googlecomputenetworkfirewallpolicypacketmirroringrule.NewGoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.putLayer4Configs">PutLayer4Configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.resetDestIpRanges">ResetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLayer4Configs` <a name="PutLayer4Configs" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.putLayer4Configs"></a>

```go
func PutLayer4Configs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.putLayer4Configs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestIpRanges` <a name="ResetDestIpRanges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.resetDestIpRanges"></a>

```go
func ResetDestIpRanges()
```

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.resetSrcIpRanges"></a>

```go
func ResetSrcIpRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.layer4Configs">Layer4Configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.destIpRangesInput">DestIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.layer4ConfigsInput">Layer4ConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.destIpRanges">DestIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Layer4Configs`<sup>Required</sup> <a name="Layer4Configs" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.layer4Configs"></a>

```go
func Layer4Configs() GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList</a>

---

##### `DestIpRangesInput`<sup>Optional</sup> <a name="DestIpRangesInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.destIpRangesInput"></a>

```go
func DestIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Layer4ConfigsInput`<sup>Optional</sup> <a name="Layer4ConfigsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.layer4ConfigsInput"></a>

```go
func Layer4ConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.srcIpRangesInput"></a>

```go
func SrcIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestIpRanges`<sup>Required</sup> <a name="DestIpRanges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.destIpRanges"></a>

```go
func DestIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.srcIpRanges"></a>

```go
func SrcIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch</a>

---


### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicypacketmirroringrule"

googlecomputenetworkfirewallpolicypacketmirroringrule.NewGoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.get"></a>

```go
func Get(index *f64) GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicypacketmirroringrule"

googlecomputenetworkfirewallpolicypacketmirroringrule.NewGoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputenetworkfirewallpolicypacketmirroringrule"

googlecomputenetworkfirewallpolicypacketmirroringrule.NewGoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



