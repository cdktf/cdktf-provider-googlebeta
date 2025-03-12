# `googleComputeNetworkFirewallPolicyPacketMirroringRule` Submodule <a name="`googleComputeNetworkFirewallPolicyPacketMirroringRule` Submodule" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNetworkFirewallPolicyPacketMirroringRule <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRule" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule google_compute_network_firewall_policy_packet_mirroring_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_network_firewall_policy_packet_mirroring_rule

googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule(
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
  match: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch,
  priority: typing.Union[int, float],
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  rule_name: str = None,
  security_profile_group: str = None,
  target_secure_tags: typing.Union[IResolvable, typing.List[GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags]] = None,
  timeouts: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts = None,
  tls_inspect: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.action">action</a></code> | <code>str</code> | The Action to perform when the client connection triggers the rule. Valid actions are "mirror", "do_not_mirror", "goto_next". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.direction">direction</a></code> | <code>str</code> | The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.firewallPolicy">firewall_policy</a></code> | <code>str</code> | The firewall policy of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#id GoogleComputeNetworkFirewallPolicyPacketMirroringRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#project GoogleComputeNetworkFirewallPolicyPacketMirroringRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.ruleName">rule_name</a></code> | <code>str</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.securityProfileGroup">security_profile_group</a></code> | <code>str</code> | A fully-qualified URL of a SecurityProfile resource instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.targetSecureTags">target_secure_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags</a>]]</code> | target_secure_tags block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.tlsInspect">tls_inspect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean flag indicating if the traffic should be TLS decrypted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.action"></a>

- *Type:* str

The Action to perform when the client connection triggers the rule. Valid actions are "mirror", "do_not_mirror", "goto_next".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#action GoogleComputeNetworkFirewallPolicyPacketMirroringRule#action}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.direction"></a>

- *Type:* str

The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#direction GoogleComputeNetworkFirewallPolicyPacketMirroringRule#direction}

---

##### `firewall_policy`<sup>Required</sup> <a name="firewall_policy" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.firewallPolicy"></a>

- *Type:* str

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#firewall_policy GoogleComputeNetworkFirewallPolicyPacketMirroringRule#firewall_policy}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.match"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#match GoogleComputeNetworkFirewallPolicyPacketMirroringRule#match}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#priority GoogleComputeNetworkFirewallPolicyPacketMirroringRule#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.description"></a>

- *Type:* str

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#description GoogleComputeNetworkFirewallPolicyPacketMirroringRule#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether the firewall policy rule is disabled.

When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist.
If this is unspecified, the firewall policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#disabled GoogleComputeNetworkFirewallPolicyPacketMirroringRule#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#id GoogleComputeNetworkFirewallPolicyPacketMirroringRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#project GoogleComputeNetworkFirewallPolicyPacketMirroringRule#project}.

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.ruleName"></a>

- *Type:* str

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#rule_name GoogleComputeNetworkFirewallPolicyPacketMirroringRule#rule_name}

---

##### `security_profile_group`<sup>Optional</sup> <a name="security_profile_group" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.securityProfileGroup"></a>

- *Type:* str

A fully-qualified URL of a SecurityProfile resource instance.

Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group
Must be specified if action = 'mirror' and cannot be specified for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#security_profile_group GoogleComputeNetworkFirewallPolicyPacketMirroringRule#security_profile_group}

---

##### `target_secure_tags`<sup>Optional</sup> <a name="target_secure_tags" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.targetSecureTags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags</a>]]

target_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#target_secure_tags GoogleComputeNetworkFirewallPolicyPacketMirroringRule#target_secure_tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#timeouts GoogleComputeNetworkFirewallPolicyPacketMirroringRule#timeouts}

---

##### `tls_inspect`<sup>Optional</sup> <a name="tls_inspect" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.tlsInspect"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean flag indicating if the traffic should be TLS decrypted.

Can be set only if action = 'mirror' and cannot be set for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#tls_inspect GoogleComputeNetworkFirewallPolicyPacketMirroringRule#tls_inspect}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putMatch">put_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putTargetSecureTags">put_target_secure_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetRuleName">reset_rule_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetSecurityProfileGroup">reset_security_profile_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetTargetSecureTags">reset_target_secure_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetTlsInspect">reset_tls_inspect</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_match` <a name="put_match" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putMatch"></a>

```python
def put_match(
  layer4_configs: typing.Union[IResolvable, typing.List[GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs]],
  dest_ip_ranges: typing.List[str] = None,
  src_ip_ranges: typing.List[str] = None
) -> None
```

###### `layer4_configs`<sup>Required</sup> <a name="layer4_configs" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putMatch.parameter.layer4Configs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs</a>]]

layer4_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#layer4_configs GoogleComputeNetworkFirewallPolicyPacketMirroringRule#layer4_configs}

---

###### `dest_ip_ranges`<sup>Optional</sup> <a name="dest_ip_ranges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putMatch.parameter.destIpRanges"></a>

- *Type:* typing.List[str]

CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#dest_ip_ranges GoogleComputeNetworkFirewallPolicyPacketMirroringRule#dest_ip_ranges}

---

###### `src_ip_ranges`<sup>Optional</sup> <a name="src_ip_ranges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putMatch.parameter.srcIpRanges"></a>

- *Type:* typing.List[str]

CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#src_ip_ranges GoogleComputeNetworkFirewallPolicyPacketMirroringRule#src_ip_ranges}

---

##### `put_target_secure_tags` <a name="put_target_secure_tags" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putTargetSecureTags"></a>

```python
def put_target_secure_tags(
  value: typing.Union[IResolvable, typing.List[GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putTargetSecureTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#create GoogleComputeNetworkFirewallPolicyPacketMirroringRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#delete GoogleComputeNetworkFirewallPolicyPacketMirroringRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#update GoogleComputeNetworkFirewallPolicyPacketMirroringRule#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_rule_name` <a name="reset_rule_name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetRuleName"></a>

```python
def reset_rule_name() -> None
```

##### `reset_security_profile_group` <a name="reset_security_profile_group" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetSecurityProfileGroup"></a>

```python
def reset_security_profile_group() -> None
```

##### `reset_target_secure_tags` <a name="reset_target_secure_tags" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetTargetSecureTags"></a>

```python
def reset_target_secure_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tls_inspect` <a name="reset_tls_inspect" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetTlsInspect"></a>

```python
def reset_tls_inspect() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeNetworkFirewallPolicyPacketMirroringRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_network_firewall_policy_packet_mirroring_rule

googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_network_firewall_policy_packet_mirroring_rule

googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_network_firewall_policy_packet_mirroring_rule

googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_network_firewall_policy_packet_mirroring_rule

googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeNetworkFirewallPolicyPacketMirroringRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeNetworkFirewallPolicyPacketMirroringRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeNetworkFirewallPolicyPacketMirroringRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeNetworkFirewallPolicyPacketMirroringRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.ruleTupleCount">rule_tuple_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.targetSecureTags">target_secure_tags</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.firewallPolicyInput">firewall_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.matchInput">match_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.securityProfileGroupInput">security_profile_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.targetSecureTagsInput">target_secure_tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.tlsInspectInput">tls_inspect_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.firewallPolicy">firewall_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.securityProfileGroup">security_profile_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.tlsInspect">tls_inspect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.match"></a>

```python
match: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference</a>

---

##### `rule_tuple_count`<sup>Required</sup> <a name="rule_tuple_count" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.ruleTupleCount"></a>

```python
rule_tuple_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_secure_tags`<sup>Required</sup> <a name="target_secure_tags" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.targetSecureTags"></a>

```python
target_secure_tags: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.timeouts"></a>

```python
timeouts: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firewall_policy_input`<sup>Optional</sup> <a name="firewall_policy_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.firewallPolicyInput"></a>

```python
firewall_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.matchInput"></a>

```python
match_input: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch</a>

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `security_profile_group_input`<sup>Optional</sup> <a name="security_profile_group_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.securityProfileGroupInput"></a>

```python
security_profile_group_input: str
```

- *Type:* str

---

##### `target_secure_tags_input`<sup>Optional</sup> <a name="target_secure_tags_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.targetSecureTagsInput"></a>

```python
target_secure_tags_input: typing.Union[IResolvable, typing.List[GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts</a>]

---

##### `tls_inspect_input`<sup>Optional</sup> <a name="tls_inspect_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.tlsInspectInput"></a>

```python
tls_inspect_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firewall_policy`<sup>Required</sup> <a name="firewall_policy" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.firewallPolicy"></a>

```python
firewall_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `security_profile_group`<sup>Required</sup> <a name="security_profile_group" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.securityProfileGroup"></a>

```python
security_profile_group: str
```

- *Type:* str

---

##### `tls_inspect`<sup>Required</sup> <a name="tls_inspect" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.tlsInspect"></a>

```python
tls_inspect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_network_firewall_policy_packet_mirroring_rule

googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig(
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
  match: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch,
  priority: typing.Union[int, float],
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  rule_name: str = None,
  security_profile_group: str = None,
  target_secure_tags: typing.Union[IResolvable, typing.List[GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags]] = None,
  timeouts: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts = None,
  tls_inspect: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.action">action</a></code> | <code>str</code> | The Action to perform when the client connection triggers the rule. Valid actions are "mirror", "do_not_mirror", "goto_next". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.direction">direction</a></code> | <code>str</code> | The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.firewallPolicy">firewall_policy</a></code> | <code>str</code> | The firewall policy of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.description">description</a></code> | <code>str</code> | An optional description for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#id GoogleComputeNetworkFirewallPolicyPacketMirroringRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#project GoogleComputeNetworkFirewallPolicyPacketMirroringRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.ruleName">rule_name</a></code> | <code>str</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.securityProfileGroup">security_profile_group</a></code> | <code>str</code> | A fully-qualified URL of a SecurityProfile resource instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.targetSecureTags">target_secure_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags</a>]]</code> | target_secure_tags block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.tlsInspect">tls_inspect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean flag indicating if the traffic should be TLS decrypted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.action"></a>

```python
action: str
```

- *Type:* str

The Action to perform when the client connection triggers the rule. Valid actions are "mirror", "do_not_mirror", "goto_next".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#action GoogleComputeNetworkFirewallPolicyPacketMirroringRule#action}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.direction"></a>

```python
direction: str
```

- *Type:* str

The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#direction GoogleComputeNetworkFirewallPolicyPacketMirroringRule#direction}

---

##### `firewall_policy`<sup>Required</sup> <a name="firewall_policy" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.firewallPolicy"></a>

```python
firewall_policy: str
```

- *Type:* str

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#firewall_policy GoogleComputeNetworkFirewallPolicyPacketMirroringRule#firewall_policy}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.match"></a>

```python
match: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#match GoogleComputeNetworkFirewallPolicyPacketMirroringRule#match}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#priority GoogleComputeNetworkFirewallPolicyPacketMirroringRule#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#description GoogleComputeNetworkFirewallPolicyPacketMirroringRule#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether the firewall policy rule is disabled.

When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist.
If this is unspecified, the firewall policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#disabled GoogleComputeNetworkFirewallPolicyPacketMirroringRule#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#id GoogleComputeNetworkFirewallPolicyPacketMirroringRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#project GoogleComputeNetworkFirewallPolicyPacketMirroringRule#project}.

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#rule_name GoogleComputeNetworkFirewallPolicyPacketMirroringRule#rule_name}

---

##### `security_profile_group`<sup>Optional</sup> <a name="security_profile_group" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.securityProfileGroup"></a>

```python
security_profile_group: str
```

- *Type:* str

A fully-qualified URL of a SecurityProfile resource instance.

Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group
Must be specified if action = 'mirror' and cannot be specified for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#security_profile_group GoogleComputeNetworkFirewallPolicyPacketMirroringRule#security_profile_group}

---

##### `target_secure_tags`<sup>Optional</sup> <a name="target_secure_tags" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.targetSecureTags"></a>

```python
target_secure_tags: typing.Union[IResolvable, typing.List[GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags</a>]]

target_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#target_secure_tags GoogleComputeNetworkFirewallPolicyPacketMirroringRule#target_secure_tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#timeouts GoogleComputeNetworkFirewallPolicyPacketMirroringRule#timeouts}

---

##### `tls_inspect`<sup>Optional</sup> <a name="tls_inspect" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.tlsInspect"></a>

```python
tls_inspect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean flag indicating if the traffic should be TLS decrypted.

Can be set only if action = 'mirror' and cannot be set for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#tls_inspect GoogleComputeNetworkFirewallPolicyPacketMirroringRule#tls_inspect}

---

### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_network_firewall_policy_packet_mirroring_rule

googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch(
  layer4_configs: typing.Union[IResolvable, typing.List[GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs]],
  dest_ip_ranges: typing.List[str] = None,
  src_ip_ranges: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch.property.layer4Configs">layer4_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs</a>]]</code> | layer4_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch.property.destIpRanges">dest_ip_ranges</a></code> | <code>typing.List[str]</code> | CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000. |

---

##### `layer4_configs`<sup>Required</sup> <a name="layer4_configs" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch.property.layer4Configs"></a>

```python
layer4_configs: typing.Union[IResolvable, typing.List[GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs</a>]]

layer4_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#layer4_configs GoogleComputeNetworkFirewallPolicyPacketMirroringRule#layer4_configs}

---

##### `dest_ip_ranges`<sup>Optional</sup> <a name="dest_ip_ranges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch.property.destIpRanges"></a>

```python
dest_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#dest_ip_ranges GoogleComputeNetworkFirewallPolicyPacketMirroringRule#dest_ip_ranges}

---

##### `src_ip_ranges`<sup>Optional</sup> <a name="src_ip_ranges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#src_ip_ranges GoogleComputeNetworkFirewallPolicyPacketMirroringRule#src_ip_ranges}

---

### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_network_firewall_policy_packet_mirroring_rule

googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs(
  ip_protocol: str,
  ports: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs.property.ports">ports</a></code> | <code>typing.List[str]</code> | An optional list of ports to which this rule applies. |

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

The IP protocol to which this rule applies.

The protocol type is required when creating a firewall rule.
This value can either be one of the following well known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#ip_protocol GoogleComputeNetworkFirewallPolicyPacketMirroringRule#ip_protocol}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

An optional list of ports to which this rule applies.

This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port.
Example inputs include: ["22"], ["80","443"], and ["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#ports GoogleComputeNetworkFirewallPolicyPacketMirroringRule#ports}

---

### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_network_firewall_policy_packet_mirroring_rule

googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags.property.name">name</a></code> | <code>str</code> | Name of the secure tag, created with TagManager's TagValue API. diff_suppress_func: 'tpgresource.CompareSelfLinkOrResourceName'. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the secure tag, created with TagManager's TagValue API. diff_suppress_func: 'tpgresource.CompareSelfLinkOrResourceName'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#name GoogleComputeNetworkFirewallPolicyPacketMirroringRule#name}

---

### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_network_firewall_policy_packet_mirroring_rule

googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#create GoogleComputeNetworkFirewallPolicyPacketMirroringRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#delete GoogleComputeNetworkFirewallPolicyPacketMirroringRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#update GoogleComputeNetworkFirewallPolicyPacketMirroringRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#create GoogleComputeNetworkFirewallPolicyPacketMirroringRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#delete GoogleComputeNetworkFirewallPolicyPacketMirroringRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#update GoogleComputeNetworkFirewallPolicyPacketMirroringRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_network_firewall_policy_packet_mirroring_rule

googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs</a>]]

---


### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_network_firewall_policy_packet_mirroring_rule

googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.resetPorts">reset_ports</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ports` <a name="reset_ports" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.ports">ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.portsInput"></a>

```python
ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs</a>]

---


### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_network_firewall_policy_packet_mirroring_rule

googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.putLayer4Configs">put_layer4_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.resetDestIpRanges">reset_dest_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.resetSrcIpRanges">reset_src_ip_ranges</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_layer4_configs` <a name="put_layer4_configs" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.putLayer4Configs"></a>

```python
def put_layer4_configs(
  value: typing.Union[IResolvable, typing.List[GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.putLayer4Configs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs</a>]]

---

##### `reset_dest_ip_ranges` <a name="reset_dest_ip_ranges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.resetDestIpRanges"></a>

```python
def reset_dest_ip_ranges() -> None
```

##### `reset_src_ip_ranges` <a name="reset_src_ip_ranges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.resetSrcIpRanges"></a>

```python
def reset_src_ip_ranges() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.layer4Configs">layer4_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.destIpRangesInput">dest_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.layer4ConfigsInput">layer4_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.srcIpRangesInput">src_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.destIpRanges">dest_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `layer4_configs`<sup>Required</sup> <a name="layer4_configs" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.layer4Configs"></a>

```python
layer4_configs: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList</a>

---

##### `dest_ip_ranges_input`<sup>Optional</sup> <a name="dest_ip_ranges_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.destIpRangesInput"></a>

```python
dest_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `layer4_configs_input`<sup>Optional</sup> <a name="layer4_configs_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.layer4ConfigsInput"></a>

```python
layer4_configs_input: typing.Union[IResolvable, typing.List[GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs</a>]]

---

##### `src_ip_ranges_input`<sup>Optional</sup> <a name="src_ip_ranges_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.srcIpRangesInput"></a>

```python
src_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_ip_ranges`<sup>Required</sup> <a name="dest_ip_ranges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.destIpRanges"></a>

```python
dest_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_ip_ranges`<sup>Required</sup> <a name="src_ip_ranges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch</a>

---


### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_network_firewall_policy_packet_mirroring_rule

googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags</a>]]

---


### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_network_firewall_policy_packet_mirroring_rule

googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags</a>]

---


### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_network_firewall_policy_packet_mirroring_rule

googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts</a>]

---



