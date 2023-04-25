# `google_compute_firewall_policy_rule`

Refer to the Terraform Registory for docs: [`google_compute_firewall_policy_rule`](https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule).

# `googleComputeFirewallPolicyRule` Submodule <a name="`googleComputeFirewallPolicyRule` Submodule" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeFirewallPolicyRule <a name="GoogleComputeFirewallPolicyRule" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule google_compute_firewall_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_firewall_policy_rule

googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  direction: str,
  firewall_policy: str,
  match: GoogleComputeFirewallPolicyRuleMatch,
  priority: typing.Union[int, float],
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  id: str = None,
  target_resources: typing.List[str] = None,
  target_service_accounts: typing.List[str] = None,
  timeouts: GoogleComputeFirewallPolicyRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.action">action</a></code> | <code>str</code> | The Action to perform when the client connection triggers the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.direction">direction</a></code> | <code>str</code> | The direction in which this rule applies. Possible values: INGRESS, EGRESS. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.firewallPolicy">firewall_policy</a></code> | <code>str</code> | The firewall policy of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch">GoogleComputeFirewallPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#id GoogleComputeFirewallPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.targetResources">target_resources</a></code> | <code>typing.List[str]</code> | A list of network resource URLs to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.targetServiceAccounts">target_service_accounts</a></code> | <code>typing.List[str]</code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts">GoogleComputeFirewallPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.action"></a>

- *Type:* str

The Action to perform when the client connection triggers the rule.

Can currently be either "allow" or "deny()" where valid values for status are 403, 404, and 502.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#action GoogleComputeFirewallPolicyRule#action}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.direction"></a>

- *Type:* str

The direction in which this rule applies. Possible values: INGRESS, EGRESS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#direction GoogleComputeFirewallPolicyRule#direction}

---

##### `firewall_policy`<sup>Required</sup> <a name="firewall_policy" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.firewallPolicy"></a>

- *Type:* str

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#firewall_policy GoogleComputeFirewallPolicyRule#firewall_policy}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.match"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch">GoogleComputeFirewallPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#match GoogleComputeFirewallPolicyRule#match}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#priority GoogleComputeFirewallPolicyRule#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.description"></a>

- *Type:* str

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#description GoogleComputeFirewallPolicyRule#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether the firewall policy rule is disabled.

When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#disabled GoogleComputeFirewallPolicyRule#disabled}

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.enableLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#enable_logging GoogleComputeFirewallPolicyRule#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#id GoogleComputeFirewallPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `target_resources`<sup>Optional</sup> <a name="target_resources" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.targetResources"></a>

- *Type:* typing.List[str]

A list of network resource URLs to which this rule applies.

This field allows you to control which network's VMs get this rule. If this field is left blank, all VMs within the organization will receive the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#target_resources GoogleComputeFirewallPolicyRule#target_resources}

---

##### `target_service_accounts`<sup>Optional</sup> <a name="target_service_accounts" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.targetServiceAccounts"></a>

- *Type:* typing.List[str]

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#target_service_accounts GoogleComputeFirewallPolicyRule#target_service_accounts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts">GoogleComputeFirewallPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#timeouts GoogleComputeFirewallPolicyRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.putMatch">put_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetEnableLogging">reset_enable_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetTargetResources">reset_target_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetTargetServiceAccounts">reset_target_service_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_match` <a name="put_match" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.putMatch"></a>

```python
def put_match(
  layer4_configs: typing.Union[IResolvable, typing.List[GoogleComputeFirewallPolicyRuleMatchLayer4Configs]],
  dest_ip_ranges: typing.List[str] = None,
  src_ip_ranges: typing.List[str] = None
) -> None
```

###### `layer4_configs`<sup>Required</sup> <a name="layer4_configs" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.putMatch.parameter.layer4Configs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs">GoogleComputeFirewallPolicyRuleMatchLayer4Configs</a>]]

layer4_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#layer4_configs GoogleComputeFirewallPolicyRule#layer4_configs}

---

###### `dest_ip_ranges`<sup>Optional</sup> <a name="dest_ip_ranges" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.putMatch.parameter.destIpRanges"></a>

- *Type:* typing.List[str]

CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#dest_ip_ranges GoogleComputeFirewallPolicyRule#dest_ip_ranges}

---

###### `src_ip_ranges`<sup>Optional</sup> <a name="src_ip_ranges" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.putMatch.parameter.srcIpRanges"></a>

- *Type:* typing.List[str]

CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#src_ip_ranges GoogleComputeFirewallPolicyRule#src_ip_ranges}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#create GoogleComputeFirewallPolicyRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#delete GoogleComputeFirewallPolicyRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#update GoogleComputeFirewallPolicyRule#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_enable_logging` <a name="reset_enable_logging" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetEnableLogging"></a>

```python
def reset_enable_logging() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_target_resources` <a name="reset_target_resources" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetTargetResources"></a>

```python
def reset_target_resources() -> None
```

##### `reset_target_service_accounts` <a name="reset_target_service_accounts" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetTargetServiceAccounts"></a>

```python
def reset_target_service_accounts() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_firewall_policy_rule

googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_firewall_policy_rule

googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_firewall_policy_rule

googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference">GoogleComputeFirewallPolicyRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.ruleTupleCount">rule_tuple_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference">GoogleComputeFirewallPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.enableLoggingInput">enable_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.firewallPolicyInput">firewall_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.matchInput">match_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch">GoogleComputeFirewallPolicyRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.targetResourcesInput">target_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.targetServiceAccountsInput">target_service_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts">GoogleComputeFirewallPolicyRuleTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.firewallPolicy">firewall_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.targetResources">target_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.targetServiceAccounts">target_service_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.match"></a>

```python
match: GoogleComputeFirewallPolicyRuleMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference">GoogleComputeFirewallPolicyRuleMatchOutputReference</a>

---

##### `rule_tuple_count`<sup>Required</sup> <a name="rule_tuple_count" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.ruleTupleCount"></a>

```python
rule_tuple_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.timeouts"></a>

```python
timeouts: GoogleComputeFirewallPolicyRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference">GoogleComputeFirewallPolicyRuleTimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging_input`<sup>Optional</sup> <a name="enable_logging_input" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.enableLoggingInput"></a>

```python
enable_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firewall_policy_input`<sup>Optional</sup> <a name="firewall_policy_input" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.firewallPolicyInput"></a>

```python
firewall_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.matchInput"></a>

```python
match_input: GoogleComputeFirewallPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch">GoogleComputeFirewallPolicyRuleMatch</a>

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_resources_input`<sup>Optional</sup> <a name="target_resources_input" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.targetResourcesInput"></a>

```python
target_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_service_accounts_input`<sup>Optional</sup> <a name="target_service_accounts_input" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.targetServiceAccountsInput"></a>

```python
target_service_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[GoogleComputeFirewallPolicyRuleTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts">GoogleComputeFirewallPolicyRuleTimeouts</a>, cdktf.IResolvable]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firewall_policy`<sup>Required</sup> <a name="firewall_policy" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.firewallPolicy"></a>

```python
firewall_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_resources`<sup>Required</sup> <a name="target_resources" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.targetResources"></a>

```python
target_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_service_accounts`<sup>Required</sup> <a name="target_service_accounts" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.targetServiceAccounts"></a>

```python
target_service_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeFirewallPolicyRuleConfig <a name="GoogleComputeFirewallPolicyRuleConfig" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_firewall_policy_rule

googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  direction: str,
  firewall_policy: str,
  match: GoogleComputeFirewallPolicyRuleMatch,
  priority: typing.Union[int, float],
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  id: str = None,
  target_resources: typing.List[str] = None,
  target_service_accounts: typing.List[str] = None,
  timeouts: GoogleComputeFirewallPolicyRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.action">action</a></code> | <code>str</code> | The Action to perform when the client connection triggers the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.direction">direction</a></code> | <code>str</code> | The direction in which this rule applies. Possible values: INGRESS, EGRESS. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.firewallPolicy">firewall_policy</a></code> | <code>str</code> | The firewall policy of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch">GoogleComputeFirewallPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.description">description</a></code> | <code>str</code> | An optional description for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#id GoogleComputeFirewallPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.targetResources">target_resources</a></code> | <code>typing.List[str]</code> | A list of network resource URLs to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.targetServiceAccounts">target_service_accounts</a></code> | <code>typing.List[str]</code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts">GoogleComputeFirewallPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.action"></a>

```python
action: str
```

- *Type:* str

The Action to perform when the client connection triggers the rule.

Can currently be either "allow" or "deny()" where valid values for status are 403, 404, and 502.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#action GoogleComputeFirewallPolicyRule#action}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.direction"></a>

```python
direction: str
```

- *Type:* str

The direction in which this rule applies. Possible values: INGRESS, EGRESS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#direction GoogleComputeFirewallPolicyRule#direction}

---

##### `firewall_policy`<sup>Required</sup> <a name="firewall_policy" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.firewallPolicy"></a>

```python
firewall_policy: str
```

- *Type:* str

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#firewall_policy GoogleComputeFirewallPolicyRule#firewall_policy}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.match"></a>

```python
match: GoogleComputeFirewallPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch">GoogleComputeFirewallPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#match GoogleComputeFirewallPolicyRule#match}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#priority GoogleComputeFirewallPolicyRule#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#description GoogleComputeFirewallPolicyRule#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether the firewall policy rule is disabled.

When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#disabled GoogleComputeFirewallPolicyRule#disabled}

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#enable_logging GoogleComputeFirewallPolicyRule#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#id GoogleComputeFirewallPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `target_resources`<sup>Optional</sup> <a name="target_resources" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.targetResources"></a>

```python
target_resources: typing.List[str]
```

- *Type:* typing.List[str]

A list of network resource URLs to which this rule applies.

This field allows you to control which network's VMs get this rule. If this field is left blank, all VMs within the organization will receive the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#target_resources GoogleComputeFirewallPolicyRule#target_resources}

---

##### `target_service_accounts`<sup>Optional</sup> <a name="target_service_accounts" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.targetServiceAccounts"></a>

```python
target_service_accounts: typing.List[str]
```

- *Type:* typing.List[str]

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#target_service_accounts GoogleComputeFirewallPolicyRule#target_service_accounts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeFirewallPolicyRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts">GoogleComputeFirewallPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#timeouts GoogleComputeFirewallPolicyRule#timeouts}

---

### GoogleComputeFirewallPolicyRuleMatch <a name="GoogleComputeFirewallPolicyRuleMatch" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_firewall_policy_rule

googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch(
  layer4_configs: typing.Union[IResolvable, typing.List[GoogleComputeFirewallPolicyRuleMatchLayer4Configs]],
  dest_ip_ranges: typing.List[str] = None,
  src_ip_ranges: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.layer4Configs">layer4_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs">GoogleComputeFirewallPolicyRuleMatchLayer4Configs</a>]]</code> | layer4_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.destIpRanges">dest_ip_ranges</a></code> | <code>typing.List[str]</code> | CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 256. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 256. |

---

##### `layer4_configs`<sup>Required</sup> <a name="layer4_configs" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.layer4Configs"></a>

```python
layer4_configs: typing.Union[IResolvable, typing.List[GoogleComputeFirewallPolicyRuleMatchLayer4Configs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs">GoogleComputeFirewallPolicyRuleMatchLayer4Configs</a>]]

layer4_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#layer4_configs GoogleComputeFirewallPolicyRule#layer4_configs}

---

##### `dest_ip_ranges`<sup>Optional</sup> <a name="dest_ip_ranges" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.destIpRanges"></a>

```python
dest_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#dest_ip_ranges GoogleComputeFirewallPolicyRule#dest_ip_ranges}

---

##### `src_ip_ranges`<sup>Optional</sup> <a name="src_ip_ranges" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#src_ip_ranges GoogleComputeFirewallPolicyRule#src_ip_ranges}

---

### GoogleComputeFirewallPolicyRuleMatchLayer4Configs <a name="GoogleComputeFirewallPolicyRuleMatchLayer4Configs" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_firewall_policy_rule

googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs(
  ip_protocol: str,
  ports: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs.property.ports">ports</a></code> | <code>typing.List[str]</code> | An optional list of ports to which this rule applies. |

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

The IP protocol to which this rule applies.

The protocol type is required when creating a firewall rule. This value can either be one of the following well known protocol strings (`tcp`, `udp`, `icmp`, `esp`, `ah`, `ipip`, `sctp`), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#ip_protocol GoogleComputeFirewallPolicyRule#ip_protocol}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

An optional list of ports to which this rule applies.

This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port. Example inputs include: ``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#ports GoogleComputeFirewallPolicyRule#ports}

---

### GoogleComputeFirewallPolicyRuleTimeouts <a name="GoogleComputeFirewallPolicyRuleTimeouts" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_firewall_policy_rule

googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#create GoogleComputeFirewallPolicyRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#delete GoogleComputeFirewallPolicyRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#update GoogleComputeFirewallPolicyRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#create GoogleComputeFirewallPolicyRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#delete GoogleComputeFirewallPolicyRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_firewall_policy_rule#update GoogleComputeFirewallPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList <a name="GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_firewall_policy_rule

googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs">GoogleComputeFirewallPolicyRuleMatchLayer4Configs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeFirewallPolicyRuleMatchLayer4Configs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs">GoogleComputeFirewallPolicyRuleMatchLayer4Configs</a>]]

---


### GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference <a name="GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_firewall_policy_rule

googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resetPorts">reset_ports</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ports` <a name="reset_ports" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ports">ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs">GoogleComputeFirewallPolicyRuleMatchLayer4Configs</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.portsInput"></a>

```python
ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GoogleComputeFirewallPolicyRuleMatchLayer4Configs, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs">GoogleComputeFirewallPolicyRuleMatchLayer4Configs</a>, cdktf.IResolvable]

---


### GoogleComputeFirewallPolicyRuleMatchOutputReference <a name="GoogleComputeFirewallPolicyRuleMatchOutputReference" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_firewall_policy_rule

googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.putLayer4Configs">put_layer4_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetDestIpRanges">reset_dest_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetSrcIpRanges">reset_src_ip_ranges</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_layer4_configs` <a name="put_layer4_configs" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.putLayer4Configs"></a>

```python
def put_layer4_configs(
  value: typing.Union[IResolvable, typing.List[GoogleComputeFirewallPolicyRuleMatchLayer4Configs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.putLayer4Configs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs">GoogleComputeFirewallPolicyRuleMatchLayer4Configs</a>]]

---

##### `reset_dest_ip_ranges` <a name="reset_dest_ip_ranges" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetDestIpRanges"></a>

```python
def reset_dest_ip_ranges() -> None
```

##### `reset_src_ip_ranges` <a name="reset_src_ip_ranges" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetSrcIpRanges"></a>

```python
def reset_src_ip_ranges() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.layer4Configs">layer4_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList">GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destIpRangesInput">dest_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.layer4ConfigsInput">layer4_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs">GoogleComputeFirewallPolicyRuleMatchLayer4Configs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcIpRangesInput">src_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destIpRanges">dest_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch">GoogleComputeFirewallPolicyRuleMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `layer4_configs`<sup>Required</sup> <a name="layer4_configs" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.layer4Configs"></a>

```python
layer4_configs: GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList">GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList</a>

---

##### `dest_ip_ranges_input`<sup>Optional</sup> <a name="dest_ip_ranges_input" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destIpRangesInput"></a>

```python
dest_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `layer4_configs_input`<sup>Optional</sup> <a name="layer4_configs_input" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.layer4ConfigsInput"></a>

```python
layer4_configs_input: typing.Union[IResolvable, typing.List[GoogleComputeFirewallPolicyRuleMatchLayer4Configs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs">GoogleComputeFirewallPolicyRuleMatchLayer4Configs</a>]]

---

##### `src_ip_ranges_input`<sup>Optional</sup> <a name="src_ip_ranges_input" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcIpRangesInput"></a>

```python
src_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_ip_ranges`<sup>Required</sup> <a name="dest_ip_ranges" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destIpRanges"></a>

```python
dest_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_ip_ranges`<sup>Required</sup> <a name="src_ip_ranges" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeFirewallPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch">GoogleComputeFirewallPolicyRuleMatch</a>

---


### GoogleComputeFirewallPolicyRuleTimeoutsOutputReference <a name="GoogleComputeFirewallPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_firewall_policy_rule

googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts">GoogleComputeFirewallPolicyRuleTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GoogleComputeFirewallPolicyRuleTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts">GoogleComputeFirewallPolicyRuleTimeouts</a>, cdktf.IResolvable]

---



