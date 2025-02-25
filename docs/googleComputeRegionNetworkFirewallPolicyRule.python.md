# `googleComputeRegionNetworkFirewallPolicyRule` Submodule <a name="`googleComputeRegionNetworkFirewallPolicyRule` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionNetworkFirewallPolicyRule <a name="GoogleComputeRegionNetworkFirewallPolicyRule" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule google_compute_region_network_firewall_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_firewall_policy_rule

googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule(
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
  match: GoogleComputeRegionNetworkFirewallPolicyRuleMatch,
  priority: typing.Union[int, float],
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  region: str = None,
  rule_name: str = None,
  security_profile_group: str = None,
  target_secure_tags: typing.Union[IResolvable, typing.List[GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags]] = None,
  target_service_accounts: typing.List[str] = None,
  timeouts: GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts = None,
  tls_inspect: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.action">action</a></code> | <code>str</code> | The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny", "goto_next" and "apply_security_profile_group". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.direction">direction</a></code> | <code>str</code> | The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.firewallPolicy">firewall_policy</a></code> | <code>str</code> | The firewall policy of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch">GoogleComputeRegionNetworkFirewallPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#id GoogleComputeRegionNetworkFirewallPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#project GoogleComputeRegionNetworkFirewallPolicyRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.region">region</a></code> | <code>str</code> | The location of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.ruleName">rule_name</a></code> | <code>str</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.securityProfileGroup">security_profile_group</a></code> | <code>str</code> | A fully-qualified URL of a SecurityProfile resource instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.targetSecureTags">target_secure_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags</a>]]</code> | target_secure_tags block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.targetServiceAccounts">target_service_accounts</a></code> | <code>typing.List[str]</code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts">GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.tlsInspect">tls_inspect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean flag indicating if the traffic should be TLS decrypted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.action"></a>

- *Type:* str

The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny", "goto_next" and "apply_security_profile_group".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#action GoogleComputeRegionNetworkFirewallPolicyRule#action}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.direction"></a>

- *Type:* str

The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#direction GoogleComputeRegionNetworkFirewallPolicyRule#direction}

---

##### `firewall_policy`<sup>Required</sup> <a name="firewall_policy" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.firewallPolicy"></a>

- *Type:* str

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#firewall_policy GoogleComputeRegionNetworkFirewallPolicyRule#firewall_policy}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.match"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch">GoogleComputeRegionNetworkFirewallPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#match GoogleComputeRegionNetworkFirewallPolicyRule#match}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#priority GoogleComputeRegionNetworkFirewallPolicyRule#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.description"></a>

- *Type:* str

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#description GoogleComputeRegionNetworkFirewallPolicyRule#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether the firewall policy rule is disabled.

When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist.
If this is unspecified, the firewall policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#disabled GoogleComputeRegionNetworkFirewallPolicyRule#disabled}

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.enableLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the configured export destination in Stackdriver.
Logs may be exported to BigQuery or Pub/Sub.
Note: you cannot enable logging on "goto_next" rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#enable_logging GoogleComputeRegionNetworkFirewallPolicyRule#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#id GoogleComputeRegionNetworkFirewallPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#project GoogleComputeRegionNetworkFirewallPolicyRule#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.region"></a>

- *Type:* str

The location of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#region GoogleComputeRegionNetworkFirewallPolicyRule#region}

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.ruleName"></a>

- *Type:* str

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#rule_name GoogleComputeRegionNetworkFirewallPolicyRule#rule_name}

---

##### `security_profile_group`<sup>Optional</sup> <a name="security_profile_group" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.securityProfileGroup"></a>

- *Type:* str

A fully-qualified URL of a SecurityProfile resource instance.

Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group
Must be specified if action = 'apply_security_profile_group' and cannot be specified for other actions.

Security Profile Group and Firewall Policy Rule must be in the same scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#security_profile_group GoogleComputeRegionNetworkFirewallPolicyRule#security_profile_group}

---

##### `target_secure_tags`<sup>Optional</sup> <a name="target_secure_tags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.targetSecureTags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags</a>]]

target_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#target_secure_tags GoogleComputeRegionNetworkFirewallPolicyRule#target_secure_tags}

---

##### `target_service_accounts`<sup>Optional</sup> <a name="target_service_accounts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.targetServiceAccounts"></a>

- *Type:* typing.List[str]

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#target_service_accounts GoogleComputeRegionNetworkFirewallPolicyRule#target_service_accounts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts">GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#timeouts GoogleComputeRegionNetworkFirewallPolicyRule#timeouts}

---

##### `tls_inspect`<sup>Optional</sup> <a name="tls_inspect" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.tlsInspect"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean flag indicating if the traffic should be TLS decrypted.

Can be set only if action = 'apply_security_profile_group' and cannot be set for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#tls_inspect GoogleComputeRegionNetworkFirewallPolicyRule#tls_inspect}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putMatch">put_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putTargetSecureTags">put_target_secure_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetEnableLogging">reset_enable_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetRuleName">reset_rule_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetSecurityProfileGroup">reset_security_profile_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetTargetSecureTags">reset_target_secure_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetTargetServiceAccounts">reset_target_service_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetTlsInspect">reset_tls_inspect</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_match` <a name="put_match" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putMatch"></a>

```python
def put_match(
  layer4_configs: typing.Union[IResolvable, typing.List[GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs]],
  dest_address_groups: typing.List[str] = None,
  dest_fqdns: typing.List[str] = None,
  dest_ip_ranges: typing.List[str] = None,
  dest_network_scope: str = None,
  dest_region_codes: typing.List[str] = None,
  dest_threat_intelligences: typing.List[str] = None,
  src_address_groups: typing.List[str] = None,
  src_fqdns: typing.List[str] = None,
  src_ip_ranges: typing.List[str] = None,
  src_networks: typing.List[str] = None,
  src_network_scope: str = None,
  src_region_codes: typing.List[str] = None,
  src_secure_tags: typing.Union[IResolvable, typing.List[GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags]] = None,
  src_threat_intelligences: typing.List[str] = None
) -> None
```

###### `layer4_configs`<sup>Required</sup> <a name="layer4_configs" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putMatch.parameter.layer4Configs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs</a>]]

layer4_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#layer4_configs GoogleComputeRegionNetworkFirewallPolicyRule#layer4_configs}

---

###### `dest_address_groups`<sup>Optional</sup> <a name="dest_address_groups" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putMatch.parameter.destAddressGroups"></a>

- *Type:* typing.List[str]

Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#dest_address_groups GoogleComputeRegionNetworkFirewallPolicyRule#dest_address_groups}

---

###### `dest_fqdns`<sup>Optional</sup> <a name="dest_fqdns" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putMatch.parameter.destFqdns"></a>

- *Type:* typing.List[str]

Fully Qualified Domain Name (FQDN) which should be matched against traffic destination.

Maximum number of destination fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#dest_fqdns GoogleComputeRegionNetworkFirewallPolicyRule#dest_fqdns}

---

###### `dest_ip_ranges`<sup>Optional</sup> <a name="dest_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putMatch.parameter.destIpRanges"></a>

- *Type:* typing.List[str]

CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#dest_ip_ranges GoogleComputeRegionNetworkFirewallPolicyRule#dest_ip_ranges}

---

###### `dest_network_scope`<sup>Optional</sup> <a name="dest_network_scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putMatch.parameter.destNetworkScope"></a>

- *Type:* str

Network scope of the traffic destination. Possible values: ["INTERNET", "INTRA_VPC", "NON_INTERNET", "VPC_NETWORKS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#dest_network_scope GoogleComputeRegionNetworkFirewallPolicyRule#dest_network_scope}

---

###### `dest_region_codes`<sup>Optional</sup> <a name="dest_region_codes" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putMatch.parameter.destRegionCodes"></a>

- *Type:* typing.List[str]

Region codes whose IP addresses will be used to match for destination of traffic.

Should be specified as 2 letter country code defined as per ISO 3166 alpha-2 country codes. ex."US" Maximum number of dest region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#dest_region_codes GoogleComputeRegionNetworkFirewallPolicyRule#dest_region_codes}

---

###### `dest_threat_intelligences`<sup>Optional</sup> <a name="dest_threat_intelligences" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putMatch.parameter.destThreatIntelligences"></a>

- *Type:* typing.List[str]

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#dest_threat_intelligences GoogleComputeRegionNetworkFirewallPolicyRule#dest_threat_intelligences}

---

###### `src_address_groups`<sup>Optional</sup> <a name="src_address_groups" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putMatch.parameter.srcAddressGroups"></a>

- *Type:* typing.List[str]

Address groups which should be matched against the traffic source. Maximum number of source address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_address_groups GoogleComputeRegionNetworkFirewallPolicyRule#src_address_groups}

---

###### `src_fqdns`<sup>Optional</sup> <a name="src_fqdns" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putMatch.parameter.srcFqdns"></a>

- *Type:* typing.List[str]

Fully Qualified Domain Name (FQDN) which should be matched against traffic source.

Maximum number of source fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_fqdns GoogleComputeRegionNetworkFirewallPolicyRule#src_fqdns}

---

###### `src_ip_ranges`<sup>Optional</sup> <a name="src_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putMatch.parameter.srcIpRanges"></a>

- *Type:* typing.List[str]

CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_ip_ranges GoogleComputeRegionNetworkFirewallPolicyRule#src_ip_ranges}

---

###### `src_networks`<sup>Optional</sup> <a name="src_networks" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putMatch.parameter.srcNetworks"></a>

- *Type:* typing.List[str]

Networks of the traffic source. It can be either a full or partial url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_networks GoogleComputeRegionNetworkFirewallPolicyRule#src_networks}

---

###### `src_network_scope`<sup>Optional</sup> <a name="src_network_scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putMatch.parameter.srcNetworkScope"></a>

- *Type:* str

Network scope of the traffic source. Possible values: ["INTERNET", "INTRA_VPC", "NON_INTERNET", "VPC_NETWORKS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_network_scope GoogleComputeRegionNetworkFirewallPolicyRule#src_network_scope}

---

###### `src_region_codes`<sup>Optional</sup> <a name="src_region_codes" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putMatch.parameter.srcRegionCodes"></a>

- *Type:* typing.List[str]

Region codes whose IP addresses will be used to match for source of traffic.

Should be specified as 2 letter country code defined as per ISO 3166 alpha-2 country codes. ex."US" Maximum number of source region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_region_codes GoogleComputeRegionNetworkFirewallPolicyRule#src_region_codes}

---

###### `src_secure_tags`<sup>Optional</sup> <a name="src_secure_tags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putMatch.parameter.srcSecureTags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags</a>]]

src_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_secure_tags GoogleComputeRegionNetworkFirewallPolicyRule#src_secure_tags}

---

###### `src_threat_intelligences`<sup>Optional</sup> <a name="src_threat_intelligences" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putMatch.parameter.srcThreatIntelligences"></a>

- *Type:* typing.List[str]

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_threat_intelligences GoogleComputeRegionNetworkFirewallPolicyRule#src_threat_intelligences}

---

##### `put_target_secure_tags` <a name="put_target_secure_tags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putTargetSecureTags"></a>

```python
def put_target_secure_tags(
  value: typing.Union[IResolvable, typing.List[GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putTargetSecureTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#create GoogleComputeRegionNetworkFirewallPolicyRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#delete GoogleComputeRegionNetworkFirewallPolicyRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#update GoogleComputeRegionNetworkFirewallPolicyRule#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_enable_logging` <a name="reset_enable_logging" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetEnableLogging"></a>

```python
def reset_enable_logging() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_rule_name` <a name="reset_rule_name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetRuleName"></a>

```python
def reset_rule_name() -> None
```

##### `reset_security_profile_group` <a name="reset_security_profile_group" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetSecurityProfileGroup"></a>

```python
def reset_security_profile_group() -> None
```

##### `reset_target_secure_tags` <a name="reset_target_secure_tags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetTargetSecureTags"></a>

```python
def reset_target_secure_tags() -> None
```

##### `reset_target_service_accounts` <a name="reset_target_service_accounts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetTargetServiceAccounts"></a>

```python
def reset_target_service_accounts() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tls_inspect` <a name="reset_tls_inspect" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetTlsInspect"></a>

```python
def reset_tls_inspect() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeRegionNetworkFirewallPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_firewall_policy_rule

googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_firewall_policy_rule

googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_firewall_policy_rule

googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_firewall_policy_rule

googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeRegionNetworkFirewallPolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeRegionNetworkFirewallPolicyRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeRegionNetworkFirewallPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionNetworkFirewallPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference">GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.ruleTupleCount">rule_tuple_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.targetSecureTags">target_secure_tags</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference">GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.enableLoggingInput">enable_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.firewallPolicyInput">firewall_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.matchInput">match_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch">GoogleComputeRegionNetworkFirewallPolicyRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.securityProfileGroupInput">security_profile_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.targetSecureTagsInput">target_secure_tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.targetServiceAccountsInput">target_service_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts">GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.tlsInspectInput">tls_inspect_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.firewallPolicy">firewall_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.securityProfileGroup">security_profile_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.targetServiceAccounts">target_service_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.tlsInspect">tls_inspect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.match"></a>

```python
match: GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference">GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference</a>

---

##### `rule_tuple_count`<sup>Required</sup> <a name="rule_tuple_count" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.ruleTupleCount"></a>

```python
rule_tuple_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_secure_tags`<sup>Required</sup> <a name="target_secure_tags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.targetSecureTags"></a>

```python
target_secure_tags: GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.timeouts"></a>

```python
timeouts: GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference">GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging_input`<sup>Optional</sup> <a name="enable_logging_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.enableLoggingInput"></a>

```python
enable_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firewall_policy_input`<sup>Optional</sup> <a name="firewall_policy_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.firewallPolicyInput"></a>

```python
firewall_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.matchInput"></a>

```python
match_input: GoogleComputeRegionNetworkFirewallPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch">GoogleComputeRegionNetworkFirewallPolicyRuleMatch</a>

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `security_profile_group_input`<sup>Optional</sup> <a name="security_profile_group_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.securityProfileGroupInput"></a>

```python
security_profile_group_input: str
```

- *Type:* str

---

##### `target_secure_tags_input`<sup>Optional</sup> <a name="target_secure_tags_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.targetSecureTagsInput"></a>

```python
target_secure_tags_input: typing.Union[IResolvable, typing.List[GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags</a>]]

---

##### `target_service_accounts_input`<sup>Optional</sup> <a name="target_service_accounts_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.targetServiceAccountsInput"></a>

```python
target_service_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts">GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts</a>]

---

##### `tls_inspect_input`<sup>Optional</sup> <a name="tls_inspect_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.tlsInspectInput"></a>

```python
tls_inspect_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firewall_policy`<sup>Required</sup> <a name="firewall_policy" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.firewallPolicy"></a>

```python
firewall_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `security_profile_group`<sup>Required</sup> <a name="security_profile_group" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.securityProfileGroup"></a>

```python
security_profile_group: str
```

- *Type:* str

---

##### `target_service_accounts`<sup>Required</sup> <a name="target_service_accounts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.targetServiceAccounts"></a>

```python
target_service_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tls_inspect`<sup>Required</sup> <a name="tls_inspect" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.tlsInspect"></a>

```python
tls_inspect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionNetworkFirewallPolicyRuleConfig <a name="GoogleComputeRegionNetworkFirewallPolicyRuleConfig" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_firewall_policy_rule

googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig(
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
  match: GoogleComputeRegionNetworkFirewallPolicyRuleMatch,
  priority: typing.Union[int, float],
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  region: str = None,
  rule_name: str = None,
  security_profile_group: str = None,
  target_secure_tags: typing.Union[IResolvable, typing.List[GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags]] = None,
  target_service_accounts: typing.List[str] = None,
  timeouts: GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts = None,
  tls_inspect: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.action">action</a></code> | <code>str</code> | The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny", "goto_next" and "apply_security_profile_group". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.direction">direction</a></code> | <code>str</code> | The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.firewallPolicy">firewall_policy</a></code> | <code>str</code> | The firewall policy of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch">GoogleComputeRegionNetworkFirewallPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.description">description</a></code> | <code>str</code> | An optional description for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#id GoogleComputeRegionNetworkFirewallPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#project GoogleComputeRegionNetworkFirewallPolicyRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.region">region</a></code> | <code>str</code> | The location of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.ruleName">rule_name</a></code> | <code>str</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.securityProfileGroup">security_profile_group</a></code> | <code>str</code> | A fully-qualified URL of a SecurityProfile resource instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.targetSecureTags">target_secure_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags</a>]]</code> | target_secure_tags block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.targetServiceAccounts">target_service_accounts</a></code> | <code>typing.List[str]</code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts">GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.tlsInspect">tls_inspect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean flag indicating if the traffic should be TLS decrypted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.action"></a>

```python
action: str
```

- *Type:* str

The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny", "goto_next" and "apply_security_profile_group".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#action GoogleComputeRegionNetworkFirewallPolicyRule#action}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.direction"></a>

```python
direction: str
```

- *Type:* str

The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#direction GoogleComputeRegionNetworkFirewallPolicyRule#direction}

---

##### `firewall_policy`<sup>Required</sup> <a name="firewall_policy" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.firewallPolicy"></a>

```python
firewall_policy: str
```

- *Type:* str

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#firewall_policy GoogleComputeRegionNetworkFirewallPolicyRule#firewall_policy}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.match"></a>

```python
match: GoogleComputeRegionNetworkFirewallPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch">GoogleComputeRegionNetworkFirewallPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#match GoogleComputeRegionNetworkFirewallPolicyRule#match}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#priority GoogleComputeRegionNetworkFirewallPolicyRule#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#description GoogleComputeRegionNetworkFirewallPolicyRule#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether the firewall policy rule is disabled.

When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist.
If this is unspecified, the firewall policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#disabled GoogleComputeRegionNetworkFirewallPolicyRule#disabled}

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the configured export destination in Stackdriver.
Logs may be exported to BigQuery or Pub/Sub.
Note: you cannot enable logging on "goto_next" rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#enable_logging GoogleComputeRegionNetworkFirewallPolicyRule#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#id GoogleComputeRegionNetworkFirewallPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#project GoogleComputeRegionNetworkFirewallPolicyRule#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The location of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#region GoogleComputeRegionNetworkFirewallPolicyRule#region}

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#rule_name GoogleComputeRegionNetworkFirewallPolicyRule#rule_name}

---

##### `security_profile_group`<sup>Optional</sup> <a name="security_profile_group" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.securityProfileGroup"></a>

```python
security_profile_group: str
```

- *Type:* str

A fully-qualified URL of a SecurityProfile resource instance.

Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group
Must be specified if action = 'apply_security_profile_group' and cannot be specified for other actions.

Security Profile Group and Firewall Policy Rule must be in the same scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#security_profile_group GoogleComputeRegionNetworkFirewallPolicyRule#security_profile_group}

---

##### `target_secure_tags`<sup>Optional</sup> <a name="target_secure_tags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.targetSecureTags"></a>

```python
target_secure_tags: typing.Union[IResolvable, typing.List[GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags</a>]]

target_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#target_secure_tags GoogleComputeRegionNetworkFirewallPolicyRule#target_secure_tags}

---

##### `target_service_accounts`<sup>Optional</sup> <a name="target_service_accounts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.targetServiceAccounts"></a>

```python
target_service_accounts: typing.List[str]
```

- *Type:* typing.List[str]

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#target_service_accounts GoogleComputeRegionNetworkFirewallPolicyRule#target_service_accounts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts">GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#timeouts GoogleComputeRegionNetworkFirewallPolicyRule#timeouts}

---

##### `tls_inspect`<sup>Optional</sup> <a name="tls_inspect" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.tlsInspect"></a>

```python
tls_inspect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean flag indicating if the traffic should be TLS decrypted.

Can be set only if action = 'apply_security_profile_group' and cannot be set for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#tls_inspect GoogleComputeRegionNetworkFirewallPolicyRule#tls_inspect}

---

### GoogleComputeRegionNetworkFirewallPolicyRuleMatch <a name="GoogleComputeRegionNetworkFirewallPolicyRuleMatch" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_firewall_policy_rule

googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch(
  layer4_configs: typing.Union[IResolvable, typing.List[GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs]],
  dest_address_groups: typing.List[str] = None,
  dest_fqdns: typing.List[str] = None,
  dest_ip_ranges: typing.List[str] = None,
  dest_network_scope: str = None,
  dest_region_codes: typing.List[str] = None,
  dest_threat_intelligences: typing.List[str] = None,
  src_address_groups: typing.List[str] = None,
  src_fqdns: typing.List[str] = None,
  src_ip_ranges: typing.List[str] = None,
  src_networks: typing.List[str] = None,
  src_network_scope: str = None,
  src_region_codes: typing.List[str] = None,
  src_secure_tags: typing.Union[IResolvable, typing.List[GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags]] = None,
  src_threat_intelligences: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.layer4Configs">layer4_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs</a>]]</code> | layer4_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destAddressGroups">dest_address_groups</a></code> | <code>typing.List[str]</code> | Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destFqdns">dest_fqdns</a></code> | <code>typing.List[str]</code> | Fully Qualified Domain Name (FQDN) which should be matched against traffic destination. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destIpRanges">dest_ip_ranges</a></code> | <code>typing.List[str]</code> | CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destNetworkScope">dest_network_scope</a></code> | <code>str</code> | Network scope of the traffic destination. Possible values: ["INTERNET", "INTRA_VPC", "NON_INTERNET", "VPC_NETWORKS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destRegionCodes">dest_region_codes</a></code> | <code>typing.List[str]</code> | Region codes whose IP addresses will be used to match for destination of traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destThreatIntelligences">dest_threat_intelligences</a></code> | <code>typing.List[str]</code> | Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcAddressGroups">src_address_groups</a></code> | <code>typing.List[str]</code> | Address groups which should be matched against the traffic source. Maximum number of source address groups is 10. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcFqdns">src_fqdns</a></code> | <code>typing.List[str]</code> | Fully Qualified Domain Name (FQDN) which should be matched against traffic source. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcNetworks">src_networks</a></code> | <code>typing.List[str]</code> | Networks of the traffic source. It can be either a full or partial url. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcNetworkScope">src_network_scope</a></code> | <code>str</code> | Network scope of the traffic source. Possible values: ["INTERNET", "INTRA_VPC", "NON_INTERNET", "VPC_NETWORKS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcRegionCodes">src_region_codes</a></code> | <code>typing.List[str]</code> | Region codes whose IP addresses will be used to match for source of traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcSecureTags">src_secure_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags</a>]]</code> | src_secure_tags block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcThreatIntelligences">src_threat_intelligences</a></code> | <code>typing.List[str]</code> | Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source. |

---

##### `layer4_configs`<sup>Required</sup> <a name="layer4_configs" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.layer4Configs"></a>

```python
layer4_configs: typing.Union[IResolvable, typing.List[GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs</a>]]

layer4_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#layer4_configs GoogleComputeRegionNetworkFirewallPolicyRule#layer4_configs}

---

##### `dest_address_groups`<sup>Optional</sup> <a name="dest_address_groups" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destAddressGroups"></a>

```python
dest_address_groups: typing.List[str]
```

- *Type:* typing.List[str]

Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#dest_address_groups GoogleComputeRegionNetworkFirewallPolicyRule#dest_address_groups}

---

##### `dest_fqdns`<sup>Optional</sup> <a name="dest_fqdns" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destFqdns"></a>

```python
dest_fqdns: typing.List[str]
```

- *Type:* typing.List[str]

Fully Qualified Domain Name (FQDN) which should be matched against traffic destination.

Maximum number of destination fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#dest_fqdns GoogleComputeRegionNetworkFirewallPolicyRule#dest_fqdns}

---

##### `dest_ip_ranges`<sup>Optional</sup> <a name="dest_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destIpRanges"></a>

```python
dest_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#dest_ip_ranges GoogleComputeRegionNetworkFirewallPolicyRule#dest_ip_ranges}

---

##### `dest_network_scope`<sup>Optional</sup> <a name="dest_network_scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destNetworkScope"></a>

```python
dest_network_scope: str
```

- *Type:* str

Network scope of the traffic destination. Possible values: ["INTERNET", "INTRA_VPC", "NON_INTERNET", "VPC_NETWORKS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#dest_network_scope GoogleComputeRegionNetworkFirewallPolicyRule#dest_network_scope}

---

##### `dest_region_codes`<sup>Optional</sup> <a name="dest_region_codes" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destRegionCodes"></a>

```python
dest_region_codes: typing.List[str]
```

- *Type:* typing.List[str]

Region codes whose IP addresses will be used to match for destination of traffic.

Should be specified as 2 letter country code defined as per ISO 3166 alpha-2 country codes. ex."US" Maximum number of dest region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#dest_region_codes GoogleComputeRegionNetworkFirewallPolicyRule#dest_region_codes}

---

##### `dest_threat_intelligences`<sup>Optional</sup> <a name="dest_threat_intelligences" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destThreatIntelligences"></a>

```python
dest_threat_intelligences: typing.List[str]
```

- *Type:* typing.List[str]

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#dest_threat_intelligences GoogleComputeRegionNetworkFirewallPolicyRule#dest_threat_intelligences}

---

##### `src_address_groups`<sup>Optional</sup> <a name="src_address_groups" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcAddressGroups"></a>

```python
src_address_groups: typing.List[str]
```

- *Type:* typing.List[str]

Address groups which should be matched against the traffic source. Maximum number of source address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_address_groups GoogleComputeRegionNetworkFirewallPolicyRule#src_address_groups}

---

##### `src_fqdns`<sup>Optional</sup> <a name="src_fqdns" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcFqdns"></a>

```python
src_fqdns: typing.List[str]
```

- *Type:* typing.List[str]

Fully Qualified Domain Name (FQDN) which should be matched against traffic source.

Maximum number of source fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_fqdns GoogleComputeRegionNetworkFirewallPolicyRule#src_fqdns}

---

##### `src_ip_ranges`<sup>Optional</sup> <a name="src_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_ip_ranges GoogleComputeRegionNetworkFirewallPolicyRule#src_ip_ranges}

---

##### `src_networks`<sup>Optional</sup> <a name="src_networks" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcNetworks"></a>

```python
src_networks: typing.List[str]
```

- *Type:* typing.List[str]

Networks of the traffic source. It can be either a full or partial url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_networks GoogleComputeRegionNetworkFirewallPolicyRule#src_networks}

---

##### `src_network_scope`<sup>Optional</sup> <a name="src_network_scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcNetworkScope"></a>

```python
src_network_scope: str
```

- *Type:* str

Network scope of the traffic source. Possible values: ["INTERNET", "INTRA_VPC", "NON_INTERNET", "VPC_NETWORKS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_network_scope GoogleComputeRegionNetworkFirewallPolicyRule#src_network_scope}

---

##### `src_region_codes`<sup>Optional</sup> <a name="src_region_codes" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcRegionCodes"></a>

```python
src_region_codes: typing.List[str]
```

- *Type:* typing.List[str]

Region codes whose IP addresses will be used to match for source of traffic.

Should be specified as 2 letter country code defined as per ISO 3166 alpha-2 country codes. ex."US" Maximum number of source region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_region_codes GoogleComputeRegionNetworkFirewallPolicyRule#src_region_codes}

---

##### `src_secure_tags`<sup>Optional</sup> <a name="src_secure_tags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcSecureTags"></a>

```python
src_secure_tags: typing.Union[IResolvable, typing.List[GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags</a>]]

src_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_secure_tags GoogleComputeRegionNetworkFirewallPolicyRule#src_secure_tags}

---

##### `src_threat_intelligences`<sup>Optional</sup> <a name="src_threat_intelligences" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcThreatIntelligences"></a>

```python
src_threat_intelligences: typing.List[str]
```

- *Type:* typing.List[str]

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_threat_intelligences GoogleComputeRegionNetworkFirewallPolicyRule#src_threat_intelligences}

---

### GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs <a name="GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_firewall_policy_rule

googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs(
  ip_protocol: str,
  ports: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs.property.ports">ports</a></code> | <code>typing.List[str]</code> | An optional list of ports to which this rule applies. |

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

The IP protocol to which this rule applies.

The protocol type is required when creating a firewall rule.
This value can either be one of the following well known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#ip_protocol GoogleComputeRegionNetworkFirewallPolicyRule#ip_protocol}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

An optional list of ports to which this rule applies.

This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port.
Example inputs include: ["22"], ["80","443"], and ["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#ports GoogleComputeRegionNetworkFirewallPolicyRule#ports}

---

### GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags <a name="GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_firewall_policy_rule

googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags.property.name">name</a></code> | <code>str</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the secure tag, created with TagManager's TagValue API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#name GoogleComputeRegionNetworkFirewallPolicyRule#name}

---

### GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags <a name="GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_firewall_policy_rule

googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags.property.name">name</a></code> | <code>str</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the secure tag, created with TagManager's TagValue API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#name GoogleComputeRegionNetworkFirewallPolicyRule#name}

---

### GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts <a name="GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_firewall_policy_rule

googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#create GoogleComputeRegionNetworkFirewallPolicyRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#delete GoogleComputeRegionNetworkFirewallPolicyRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#update GoogleComputeRegionNetworkFirewallPolicyRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#create GoogleComputeRegionNetworkFirewallPolicyRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#delete GoogleComputeRegionNetworkFirewallPolicyRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_region_network_firewall_policy_rule#update GoogleComputeRegionNetworkFirewallPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList <a name="GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_firewall_policy_rule

googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs</a>]]

---


### GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_firewall_policy_rule

googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resetPorts">reset_ports</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ports` <a name="reset_ports" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ports">ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.portsInput"></a>

```python
ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs</a>]

---


### GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_firewall_policy_rule

googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.putLayer4Configs">put_layer4_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.putSrcSecureTags">put_src_secure_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestAddressGroups">reset_dest_address_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestFqdns">reset_dest_fqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestIpRanges">reset_dest_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestNetworkScope">reset_dest_network_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestRegionCodes">reset_dest_region_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestThreatIntelligences">reset_dest_threat_intelligences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcAddressGroups">reset_src_address_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcFqdns">reset_src_fqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcIpRanges">reset_src_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcNetworks">reset_src_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcNetworkScope">reset_src_network_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcRegionCodes">reset_src_region_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcSecureTags">reset_src_secure_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcThreatIntelligences">reset_src_threat_intelligences</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_layer4_configs` <a name="put_layer4_configs" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.putLayer4Configs"></a>

```python
def put_layer4_configs(
  value: typing.Union[IResolvable, typing.List[GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.putLayer4Configs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs</a>]]

---

##### `put_src_secure_tags` <a name="put_src_secure_tags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.putSrcSecureTags"></a>

```python
def put_src_secure_tags(
  value: typing.Union[IResolvable, typing.List[GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.putSrcSecureTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags</a>]]

---

##### `reset_dest_address_groups` <a name="reset_dest_address_groups" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestAddressGroups"></a>

```python
def reset_dest_address_groups() -> None
```

##### `reset_dest_fqdns` <a name="reset_dest_fqdns" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestFqdns"></a>

```python
def reset_dest_fqdns() -> None
```

##### `reset_dest_ip_ranges` <a name="reset_dest_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestIpRanges"></a>

```python
def reset_dest_ip_ranges() -> None
```

##### `reset_dest_network_scope` <a name="reset_dest_network_scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestNetworkScope"></a>

```python
def reset_dest_network_scope() -> None
```

##### `reset_dest_region_codes` <a name="reset_dest_region_codes" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestRegionCodes"></a>

```python
def reset_dest_region_codes() -> None
```

##### `reset_dest_threat_intelligences` <a name="reset_dest_threat_intelligences" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestThreatIntelligences"></a>

```python
def reset_dest_threat_intelligences() -> None
```

##### `reset_src_address_groups` <a name="reset_src_address_groups" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcAddressGroups"></a>

```python
def reset_src_address_groups() -> None
```

##### `reset_src_fqdns` <a name="reset_src_fqdns" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcFqdns"></a>

```python
def reset_src_fqdns() -> None
```

##### `reset_src_ip_ranges` <a name="reset_src_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcIpRanges"></a>

```python
def reset_src_ip_ranges() -> None
```

##### `reset_src_networks` <a name="reset_src_networks" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcNetworks"></a>

```python
def reset_src_networks() -> None
```

##### `reset_src_network_scope` <a name="reset_src_network_scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcNetworkScope"></a>

```python
def reset_src_network_scope() -> None
```

##### `reset_src_region_codes` <a name="reset_src_region_codes" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcRegionCodes"></a>

```python
def reset_src_region_codes() -> None
```

##### `reset_src_secure_tags` <a name="reset_src_secure_tags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcSecureTags"></a>

```python
def reset_src_secure_tags() -> None
```

##### `reset_src_threat_intelligences` <a name="reset_src_threat_intelligences" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcThreatIntelligences"></a>

```python
def reset_src_threat_intelligences() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.layer4Configs">layer4_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTags">src_secure_tags</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destAddressGroupsInput">dest_address_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destFqdnsInput">dest_fqdns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRangesInput">dest_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destNetworkScopeInput">dest_network_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destRegionCodesInput">dest_region_codes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligencesInput">dest_threat_intelligences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.layer4ConfigsInput">layer4_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcAddressGroupsInput">src_address_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcFqdnsInput">src_fqdns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRangesInput">src_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworkScopeInput">src_network_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworksInput">src_networks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcRegionCodesInput">src_region_codes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTagsInput">src_secure_tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligencesInput">src_threat_intelligences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destAddressGroups">dest_address_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destFqdns">dest_fqdns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRanges">dest_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destNetworkScope">dest_network_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destRegionCodes">dest_region_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligences">dest_threat_intelligences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcAddressGroups">src_address_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcFqdns">src_fqdns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworks">src_networks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworkScope">src_network_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcRegionCodes">src_region_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligences">src_threat_intelligences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch">GoogleComputeRegionNetworkFirewallPolicyRuleMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `layer4_configs`<sup>Required</sup> <a name="layer4_configs" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.layer4Configs"></a>

```python
layer4_configs: GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList</a>

---

##### `src_secure_tags`<sup>Required</sup> <a name="src_secure_tags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTags"></a>

```python
src_secure_tags: GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList</a>

---

##### `dest_address_groups_input`<sup>Optional</sup> <a name="dest_address_groups_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destAddressGroupsInput"></a>

```python
dest_address_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_fqdns_input`<sup>Optional</sup> <a name="dest_fqdns_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destFqdnsInput"></a>

```python
dest_fqdns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_ip_ranges_input`<sup>Optional</sup> <a name="dest_ip_ranges_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRangesInput"></a>

```python
dest_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_network_scope_input`<sup>Optional</sup> <a name="dest_network_scope_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destNetworkScopeInput"></a>

```python
dest_network_scope_input: str
```

- *Type:* str

---

##### `dest_region_codes_input`<sup>Optional</sup> <a name="dest_region_codes_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destRegionCodesInput"></a>

```python
dest_region_codes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_threat_intelligences_input`<sup>Optional</sup> <a name="dest_threat_intelligences_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligencesInput"></a>

```python
dest_threat_intelligences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `layer4_configs_input`<sup>Optional</sup> <a name="layer4_configs_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.layer4ConfigsInput"></a>

```python
layer4_configs_input: typing.Union[IResolvable, typing.List[GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs</a>]]

---

##### `src_address_groups_input`<sup>Optional</sup> <a name="src_address_groups_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcAddressGroupsInput"></a>

```python
src_address_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_fqdns_input`<sup>Optional</sup> <a name="src_fqdns_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcFqdnsInput"></a>

```python
src_fqdns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_ip_ranges_input`<sup>Optional</sup> <a name="src_ip_ranges_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRangesInput"></a>

```python
src_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_network_scope_input`<sup>Optional</sup> <a name="src_network_scope_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworkScopeInput"></a>

```python
src_network_scope_input: str
```

- *Type:* str

---

##### `src_networks_input`<sup>Optional</sup> <a name="src_networks_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworksInput"></a>

```python
src_networks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_region_codes_input`<sup>Optional</sup> <a name="src_region_codes_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcRegionCodesInput"></a>

```python
src_region_codes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_secure_tags_input`<sup>Optional</sup> <a name="src_secure_tags_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTagsInput"></a>

```python
src_secure_tags_input: typing.Union[IResolvable, typing.List[GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags</a>]]

---

##### `src_threat_intelligences_input`<sup>Optional</sup> <a name="src_threat_intelligences_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligencesInput"></a>

```python
src_threat_intelligences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_address_groups`<sup>Required</sup> <a name="dest_address_groups" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destAddressGroups"></a>

```python
dest_address_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_fqdns`<sup>Required</sup> <a name="dest_fqdns" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destFqdns"></a>

```python
dest_fqdns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_ip_ranges`<sup>Required</sup> <a name="dest_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRanges"></a>

```python
dest_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_network_scope`<sup>Required</sup> <a name="dest_network_scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destNetworkScope"></a>

```python
dest_network_scope: str
```

- *Type:* str

---

##### `dest_region_codes`<sup>Required</sup> <a name="dest_region_codes" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destRegionCodes"></a>

```python
dest_region_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_threat_intelligences`<sup>Required</sup> <a name="dest_threat_intelligences" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligences"></a>

```python
dest_threat_intelligences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_address_groups`<sup>Required</sup> <a name="src_address_groups" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcAddressGroups"></a>

```python
src_address_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_fqdns`<sup>Required</sup> <a name="src_fqdns" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcFqdns"></a>

```python
src_fqdns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_ip_ranges`<sup>Required</sup> <a name="src_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_networks`<sup>Required</sup> <a name="src_networks" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworks"></a>

```python
src_networks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_network_scope`<sup>Required</sup> <a name="src_network_scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworkScope"></a>

```python
src_network_scope: str
```

- *Type:* str

---

##### `src_region_codes`<sup>Required</sup> <a name="src_region_codes" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcRegionCodes"></a>

```python
src_region_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_threat_intelligences`<sup>Required</sup> <a name="src_threat_intelligences" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligences"></a>

```python
src_threat_intelligences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionNetworkFirewallPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch">GoogleComputeRegionNetworkFirewallPolicyRuleMatch</a>

---


### GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList <a name="GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_firewall_policy_rule

googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags</a>]]

---


### GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_firewall_policy_rule

googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags</a>]

---


### GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList <a name="GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_firewall_policy_rule

googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags</a>]]

---


### GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_firewall_policy_rule

googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags</a>]

---


### GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_firewall_policy_rule

googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts">GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts">GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts</a>]

---



